import * as THREE from "three";
import { camera, scene, mobile } from "./setup";
import { floorGrid, wallGrid, getObjectsInCell } from "./spatiParti";
import { clamp, getPitchRotation, getYawRotation } from "./utils";
import { client, ready, playerList, currentPlayer } from "./socket";
import { animations } from "./loaders";
import * as constant from "./constants";
import nipplejs from "nipplejs";
import screenfull from "screenfull";

let isJumping = false;
let jumpHeight = 0;

// movement
let movementBool: [boolean, boolean, boolean, boolean, boolean, boolean] = [
  false,
  false,
  false,
  false,
  false,
  false,
];
let movementVector: [
  THREE.Vector3,
  THREE.Vector3,
  THREE.Vector3,
  THREE.Vector3
] = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0),
];
let mobileMove: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

// rotation
let phi: number = 0;
let theta: number = 0;

export let quat: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
let quatX: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
let quatZ: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);

let rotationTouchId: number | null = null;
let movementTouchId: number | null = null;

// mobile
let previousTouch: Touch | null;
let jumpPressed: boolean = false;
export let rolling: boolean = false;
let rollReady: boolean = true;
let rollLength: number = 100;
let rollingTimer: number = rollLength;
let rollCD: number = 100;
let movement = new THREE.Vector3(0, 0, 0);

export function PCMovement(delta: number) {
  let speed = 5 * delta;
  let inputAmount = 0;

  // rolling timer
  if (!rollReady) {
    rollingTimer--;
  }
  // rolling done and cd
  if (rollingTimer <= 0) {
    rolling = false;
    if (rollingTimer <= -rollCD) {
      rollReady = true;
      rollingTimer = rollLength;
    }
  }

  // sets rolling speed
  if (!rolling) {
    movement.set(0, 0, 0);
    // sets movement vector
    for (let i = 0; i < 4; i++) {
      movementVector[i].set(0, 0, 0);

      if (movementBool[i]) {
        movementVector[i].set(
          constant.movementDir[i].x * speed,
          constant.movementDir[i].y * speed,
          constant.movementDir[i].z * speed
        );
        movementVector[i] = movementVector[i].applyQuaternion(
          getYawRotation(quat)
        );
        movementVector[i].y = 0;
        inputAmount++;
      }
    }

    // JUMPING
    if (movementBool[4] && !isJumping) {
      isJumping = true;
      jumpHeight = 0.05;
      client.emit("player jump", currentPlayer.model.position);
    }
    // total movement vector
    if (inputAmount > 0) {
      let totDir = new THREE.Vector3(0, 0, 0);
      for (let i = 0; i < 4; i++) {
        totDir.add(movementVector[i].clone());
      }
      movement = totDir.divideScalar(Math.sqrt(inputAmount));

      // running animation
      if (
        !currentPlayer.mixer.clipAction(animations[1]).isRunning() &&
        !currentPlayer.mixer.clipAction(animations[2]).isRunning()
      ) {
        const action = currentPlayer.mixer.clipAction(animations[1]);

        client.emit("position animation", {});
        currentPlayer.mixer.stopAllAction();
        action.play();
      }
    } else if (!currentPlayer.mixer.clipAction(animations[2]).isRunning()) {
      const idle = currentPlayer.mixer.clipAction(animations[0]);
      currentPlayer.mixer.stopAllAction();
      idle.play();
    }
  }
  // start rolling
  if (movementBool[5] && rollReady && !isJumping) {
    rolling = true;
    rollReady = false;
    movement.multiplyScalar(0.5);
    client.emit("player roll", {});
    const roll = currentPlayer.mixer.clipAction(animations[3]);
    roll.timeScale = 1.5;
    currentPlayer.mixer.stopAllAction();
    roll.setLoop(THREE.LoopOnce, 1);
    roll.play();
  }

  let wallHit = collision(delta, movement);
  if (!wallHit && !movement.equals(new THREE.Vector3(0, 0, 0))) {
    currentPlayer.model.position.add(movement);
    client.emit("player position", {
      x: currentPlayer.model.position.x,
      y: currentPlayer.model.position.y,
      z: currentPlayer.model.position.z,
    });
  }
}

//Mobile
export function mobileMovement(delta: number) {
  if (jumpPressed && !isJumping) {
    isJumping = true;
    jumpHeight = 0.05;
    client.emit("player jump", currentPlayer.model.position);
  }

  let wallHit = collision(delta, mobileMove);
  if (!wallHit) {
    currentPlayer.model.position.add(mobileMove);
    client.emit("player position", {
      x: currentPlayer.model.position.x,
      y: currentPlayer.model.position.y,
      z: currentPlayer.model.position.z,
    });
  }
  jumpPressed = false;
}

function collision(delta: number, moveDir: THREE.Vector3) {
  let currentCell = new THREE.Vector3(
    currentPlayer.model.position.x,
    currentPlayer.model.position.y,
    currentPlayer.model.position.z
  );

  // FLOOR COLLISION DETECTION
  let downRay = new THREE.Raycaster(
    currentPlayer.model.position,
    new THREE.Vector3(0, -1, 0),
    0,
    5
  );
  downRay.layers.set(0);

  let distanceToFloor = 1000;
  let closestFloorInfo = findClosestObject(currentCell, floorGrid, downRay);
  distanceToFloor =
    typeof closestFloorInfo[0] === "number" ? closestFloorInfo[0] : 1000;
  let closestFloor = closestFloorInfo[1];

  // JUMPING
  if (isJumping) {
    jumpHeight -= delta * 0.15;
    currentPlayer.model.position.y += jumpHeight;
    // client.emit("position animation", {});
    client.emit("player position", {
      x: currentPlayer.model.position.x,
      y: currentPlayer.model.position.y,
      z: currentPlayer.model.position.z,
    });
    if (distanceToFloor < 0.1) {
      isJumping = false;
      jumpHeight = 0;
    }
  } else if (closestFloor) {
    if (distanceToFloor < 0.01) {
      currentPlayer.model.position.y += distanceToFloor;
    } else {
      //currentPlayer.model.position.y -= distanceToFloor - 0;
    }
  } else {
    isJumping = true;
  }

  // WALL COLLISION DETECTION
  let forwardRay = new THREE.Raycaster(
    currentPlayer.model.position,
    moveDir,
    0,
    5
  );
  forwardRay.layers.set(1);

  let closestWallInfo = findClosestObject(currentCell, wallGrid, forwardRay);
  let forwardDistance = closestWallInfo[0] as number;
  let closestWall = closestWallInfo[1];

  let wallHit = false;
  if (
    closestWall &&
    typeof forwardDistance === "number" &&
    forwardDistance < 0.2
  )
    wallHit = true;

  return wallHit;
}

function findClosestObject(
  currentCell: THREE.Vector3,
  grid: { [key: string]: THREE.Object3D[] },
  ray: THREE.Raycaster
) {
  let closestDistance = 1000;
  let closestObject;

  let cellObjects = getObjectsInCell(currentCell, grid);
  if (cellObjects.length > 0) {
    let hitObjects = ray.intersectObjects(cellObjects);
    if (hitObjects.length > 0) {
      //find the lowest distance object
      for (let i = 0; i < cellObjects.length; i++) {
        if (
          hitObjects[i] &&
          hitObjects[i].distance < closestDistance &&
          hitObjects[i] !== closestObject
        ) {
          closestObject = hitObjects[i];
          closestDistance = closestObject.distance;
        }
      }
    }
  }
  return [closestDistance, closestObject];
}

// EVENT LISTENERS ############################################################################################################

if (!mobile) {
  // ROTATION
  document.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement === document.body) {
      const xh = e.movementX * 0.001;
      const yh = e.movementY * 0.001;

      phi -= xh;
      theta = clamp(theta - yh, -Math.PI / 2, Math.PI / 2);

      quatZ = new THREE.Quaternion();
      quatX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
      quatZ.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

      quat = quatX.multiply(quatZ);
      currentPlayer.model.quaternion.copy(getYawRotation(quat));
      camera.quaternion.copy(quat);

      if (ready) {
        client.emit("player rotation", {
          x: quat.x,
          y: quat.y,
          z: quat.z,
          w: quat.w,
        });
      }
    }
  });
  // MOVEMENT
  document.addEventListener("keydown", (e) => {
    if (document.pointerLockElement === document.body) {
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp")
        movementBool[0] = true;
      if (e.key === "s" || e.key === "S" || e.key === "ArrowDown")
        movementBool[1] = true;
      if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft")
        movementBool[2] = true;
      if (e.key === "d" || e.key === "D" || e.key === "ArrowRight")
        movementBool[3] = true;
      if (e.key === " ") movementBool[4] = true;
      if (e.key === "Shift") movementBool[5] = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "W" || e.key === "ArrowUp")
      movementBool[0] = false;
    if (e.key === "s" || e.key === "S" || e.key === "ArrowDown")
      movementBool[1] = false;
    if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft")
      movementBool[2] = false;
    if (e.key === "d" || e.key === "D" || e.key === "ArrowRight")
      movementBool[3] = false;
    if (e.key === " ") movementBool[4] = false;
    if (e.key === "Shift") movementBool[5] = false;
  });
} else {
  // TOUCH ROTATION AND MOVEMENT
  const rightElement = document.getElementById("right");
  const joystickZone = document.getElementById("joystick");

  if (rightElement && joystickZone) {
    rightElement.addEventListener("touchstart", (e) => {
      e.preventDefault();
      for (let touch of e.touches) {
        if (rotationTouchId === null && touch.target === rightElement) {
          console.log(touch);
          rotationTouchId = touch.identifier;
          previousTouch = touch;
        }
      }
    });

    rightElement.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const rotationTouch = Array.from(e.touches).find(
        (t) => t.identifier === rotationTouchId
      );
      if (rotationTouch && previousTouch) {
        const xAmount = rotationTouch.pageX - previousTouch.pageX;
        const yAmount = rotationTouch.pageY - previousTouch.pageY;

        const xh = xAmount * 0.005;
        const yh = yAmount * 0.005;

        phi += -xh;
        theta = clamp(theta - yh, -Math.PI / 2, Math.PI / 2);

        quatZ = new THREE.Quaternion();
        quatX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
        quatZ.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

        quat = quatX.multiply(quatZ);

        camera.quaternion.copy(quat);
        if (ready) {
          client.emit("player rotation", {
            x: quat.x,
            y: quat.y,
            z: quat.z,
            w: quat.w,
          });
        }
        previousTouch = rotationTouch;
      }
    });

    rightElement.addEventListener("touchend", (e) => {
      e.preventDefault();
      if (
        rotationTouchId !== null &&
        !Array.from(e.touches).some((t) => t.identifier === rotationTouchId)
      ) {
        rotationTouchId = null;
        previousTouch = null;
      }
    });

    let joystickL: nipplejs.JoystickManager = nipplejs.create({
      zone: joystickZone,
      mode: "static",
      position: { left: "10%", top: "80%" },
      restJoystick: true,
    });

    if (joystickL) {
      joystickL.get(0).on("start", (evt) => {
        if (movementTouchId === null) {
          //console.log(evt.target.id);
          movementTouchId = evt.target.id;
        }
      });

      joystickL.get(0).on("move", (evt, data) => {
        let xDir = data.vector.x;
        let zDir = -data.vector.y;
        let dir = new THREE.Vector3(xDir * 0.05, 0, zDir * 0.05);
        mobileMove = dir.applyQuaternion(quatX);
      });

      joystickL.get(0).on("end", (evt, data) => {
        mobileMove.set(0, 0, 0);
        movementTouchId = null;
      });
    }

    // JUMP BUTTON
    const jumpButton = document.getElementById("jumpButton");
    if (jumpButton) {
      jumpButton.addEventListener("touchstart", (e) => {
        jumpPressed = true;
      });
    }

    // FULLSCREEN
    const fullscreenButton = document.getElementById("fullscreenButton");
    if (fullscreenButton) {
      fullscreenButton.addEventListener("click", () => {
        if (screenfull.isEnabled) {
          screenfull.toggle();
        }
      });
    }
  }
}
