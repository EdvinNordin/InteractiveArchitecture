import * as THREE from "three";
import nipplejs from "nipplejs";
import screenfull from "screenfull";
import { camera } from "../utilities/setup";
import { client } from "../networking/socket";
import { clamp, getYawRotation } from "../utilities/utils";

let mobileMove: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
let previousTouch: Touch | null;
let jumpPressed: boolean = false;
let rotationTouchId: number | null = null;
let movementTouchId: number | null = null;
// rotation
let phi: number = 0;
let theta: number = 0;

export let quat: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
let quatX: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
let quatZ: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);

const rightElement = document.getElementById("right");
const joystickZone = document.getElementById("joystick");

//Mobile
export function mobileMovement(delta: number) {
  /*if (jumpPressed && !isJumping) {
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
  jumpPressed = false;*/
}

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
      client.emit("player rotation", {
        x: quat.x,
        y: quat.y,
        z: quat.z,
        w: quat.w,
      });

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
