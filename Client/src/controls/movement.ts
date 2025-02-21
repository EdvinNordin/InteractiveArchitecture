import * as THREE from "three";
import { camera } from "../utilities/setup";
import { floorGrid, wallGrid, getObjectsInCell } from "../utilities/spatial";
import {
  getPitchRotation,
  getYawRotation,
  getPitchandYawRotation,
} from "../utilities/utils";
import { currentPlayer } from "../utilities/classes";
import { prevAnim } from "../animations";
import { listener } from "../utilities/setup";
import { client } from "../networking/socket";
import * as constant from "../utilities/constants";

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

// rotation
let phi: number = 0;
let theta: number = 0;

// export let quat: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
// let quatX: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
// let quatZ: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);

// mobile
export let rolling: boolean = false;
let rollReady: boolean = true;
let rollCD: number = 3;
let rollingTimer: number = rollCD;
let movement = new THREE.Vector3(0, 0, 0);

export function PCMovement(delta: number) {
  let speed = 5 * delta;
  let inputAmount = 0;

  // rolling timer
  if (!rollReady) {
    rollingTimer -= delta; // -1 per second
    updateCooldown(rollingTimer);
  }
  if (prevAnim === "roll" && currentPlayer.animation !== "roll") {
    // roll has ended
    rollReady = false;
  }
  if (rollingTimer <= 0) {
    // rolling cd done
    rollReady = true;
    rollingTimer = rollCD;
  }

  if (
    currentPlayer.animation === "idle" ||
    currentPlayer.animation === "run" ||
    currentPlayer.animation === "attack"
  ) {
    // set running speed
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
          getYawRotation(camera.quaternion)
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

      //rotate the model to the direction of movement
      const moveDirection = movement.clone().normalize();
      const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, -1),
        moveDirection
      );
      currentPlayer.model.quaternion.copy(targetQuaternion);
      client.emit("player rotation", {
        x: currentPlayer.model.quaternion.x,
        y: currentPlayer.model.quaternion.y,
        z: currentPlayer.model.quaternion.z,
        w: currentPlayer.model.quaternion.w,
      });

      // running animation
      if (
        currentPlayer.animation !== "run" &&
        currentPlayer.animation !== "attack"
      ) {
        currentPlayer.animation = "run";
      }
    } else if (currentPlayer.animation === "run") {
      currentPlayer.animation = "idle";
    }
  }
  // start rolling
  if (
    movementBool[5] &&
    rollReady &&
    !isJumping &&
    currentPlayer.animation !== "attack" &&
    currentPlayer.animation !== "roll"
  ) {
    currentPlayer.animation = "roll";
    movement.multiplyScalar(0.5);
  }

  // if (
  //   currentPlayer.animation === "attack" &&
  //   currentPlayer.mixer._actions.filter((action: any) =>
  //     action.isRunning()
  //   )[0] &&
  //   currentPlayer.mixer._actions.filter((action: any) => action.isRunning())[0]
  //     ._clip.name !== "attack"
  // ) {
  //   movement.multiplyScalar(0.1);
  // }

  // if (currentPlayer.animation === "attack") {
  //   movement.multiplyScalar(0);
  // }

  let wallHit = collision(delta, movement);
  if (!wallHit && !movement.equals(new THREE.Vector3(0, 0, 0))) {
    currentPlayer.model.position.add(movement);
    client.emit("player position", {
      x: currentPlayer.model.position.x,
      y: currentPlayer.model.position.y,
      z: currentPlayer.model.position.z,
    });
  }

  // camera offset and follow
  camera.position.copy(
    new THREE.Vector3(0.5, 0, 2)
      .applyQuaternion(camera.quaternion)
      .add(new THREE.Vector3(0, 1, 0).add(currentPlayer.model.position))
  );

  // camera collision
  let cameraRay = new THREE.Raycaster(
    new THREE.Vector3(0, 1, 0).add(currentPlayer.model.position),
    camera.position
      .clone()
      .sub(new THREE.Vector3(0, 1, 0).add(currentPlayer.model.position)),
    0,
    2
  );

  let currentCell = new THREE.Vector3(
    currentPlayer.model.position.x,
    currentPlayer.model.position.y,
    currentPlayer.model.position.z
  );
  let cameraHitFloor: any = findClosestObject(
    currentCell,
    floorGrid,
    cameraRay
  );
  let cameraHitWall: any = findClosestObject(currentCell, wallGrid, cameraRay);

  if (cameraHitFloor[1]) {
    camera.position.copy(cameraHitFloor[1].point);
  }
  if (cameraHitWall[1]) {
    camera.position.copy(cameraHitWall[1].point);
  }
}

// AUDIO SETUP
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
const soundButton = document.getElementById("sound");
let soundBool = false;
if (soundButton) {
  soundButton.onclick = () => {
    if (soundBool) {
      soundBool = false;
      soundButton.innerHTML = "🔇";
      return;
    } else {
      soundBool = true;
      soundButton.innerHTML = "🔊";
      return;
    }
  };
}

function collision(delta: number, moveDir: THREE.Vector3) {
  let currentCell = new THREE.Vector3(
    currentPlayer.model.position.x,
    currentPlayer.model.position.y,
    currentPlayer.model.position.z
  );

  // FLOOR COLLISION DETECTION
  let downRay = new THREE.Raycaster(
    new THREE.Vector3(0, 0.35, 0).add(currentPlayer.model.position),
    new THREE.Vector3(0, -1, 0),
    0,
    5
  );
  downRay.layers.set(0);
  // let downRayhelper = new THREE.ArrowHelper(
  //   downRay.ray.direction,
  //   downRay.ray.origin,
  //   5,
  //   0xff0000
  // );
  // scene.add(downRayhelper);

  let distanceToFloor = 1000;
  let closestFloorInfo = findClosestObject(currentCell, floorGrid, downRay);
  distanceToFloor =
    typeof closestFloorInfo[0] === "number" ? closestFloorInfo[0] : 1000;
  let closestFloor = closestFloorInfo[1];
  // JUMPING
  if (isJumping) {
    if (currentPlayer.model.position.y < -100)
      currentPlayer.model.position.y = 2;
    jumpHeight -= delta * 0.15;
    currentPlayer.model.position.y += jumpHeight;
    // client.emit("position animation", {});
    client.emit("player position", {
      x: currentPlayer.model.position.x,
      y: currentPlayer.model.position.y,
      z: currentPlayer.model.position.z,
    });
    if (distanceToFloor < 0.5) {
      isJumping = false;
      jumpHeight = 0;
    }
  } else if (closestFloor) {
    if (!isJumping) {
      if (
        currentPlayer.animation === "run" &&
        sound.isPlaying === false &&
        soundBool
      ) {
        audioLoader.load("./low.wav", function (buffer) {
          sound.stop();
          sound.setBuffer(buffer);
          sound.setLoop(false);
          sound.setVolume(1);
          sound.playbackRate = 0.31;
          sound.play();
        });
      }

      if (distanceToFloor < 0.34) {
        currentPlayer.model.position.y += distanceToFloor;
      } else {
        currentPlayer.model.position.y -= distanceToFloor - 0.35;
      }
    } else {
      //falling
      isJumping = true;
    }
  }
  // WALL COLLISION DETECTION
  let forwardRay = new THREE.Raycaster(
    new THREE.Vector3(0, 0.5, 0).add(currentPlayer.model.position),
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
let quatX = new THREE.Quaternion();
let quatZ = new THREE.Quaternion();
let quat = new THREE.Quaternion();
let quaternion = new THREE.Quaternion(1, 0, 0, 0); // Initial quaternion (no rotation)

// ROTATION
document.addEventListener("mousemove", (e) => {
  if (document.pointerLockElement === document.body) {
    const xh = e.movementX * 0.001;
    const yh = e.movementY * 0.001;

    phi -= xh;
    theta = Math.min(Math.max(theta - yh, -Math.PI / 2), Math.PI / 2);

    quatZ = new THREE.Quaternion();
    quatX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
    quatZ.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

    quat = quatX.multiply(quatZ);
    camera.quaternion.copy(quat);
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

const cooldownTimer = document.getElementById("cooldownTimer");
function updateCooldown(currentCD: number) {
  const percentage = Math.min(1 - currentCD / rollCD, 1);
  let degrees = percentage * 360;
  if (cooldownTimer) {
    cooldownTimer.style.background = `conic-gradient(rgb(255, 255, 255) ${degrees}deg, rgb(184, 184, 184)${degrees}deg)`;
  }
}
