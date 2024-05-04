import * as CANNON from "cannon-es";
import * as THREE from "three"; /*
/*
const maxForce = 50;

let forward = false;
let backward = false;
let left = false;
let right = false;

export function moveSphere(sphereBody) {
  sphereBody.linearDamping = 0.9;
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
      case "w":
        forward = true;
        break;

      case "s":
      case "ArrowDown":
        backward = true;
        break;

      case "a":
      case "ArrowLeft":
        left = true;
        break;

      case "d":
      case "ArrowRight":
        right = true;
        break;
    }
  });
  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "w":
      case "ArrowUp":
        forward = false;
        break;

      case "s":
      case "ArrowDown":
        backward = false;
        break;

      case "a":
      case "ArrowLeft":
        left = false;
        break;

      case "d":
      case "ArrowRight":
        right = false;
        break;
    }
  });

  if (forward) {
    sphereBody.applyTorque(new CANNON.Vec3(-maxForce, 0, 0));
  } else {
    sphereBody.applyTorque(new CANNON.Vec3(0, 0, 0));
  }

  if (backward) {
    sphereBody.applyTorque(new CANNON.Vec3(maxForce, 0, 0));
  } else {
    sphereBody.applyTorque(new CANNON.Vec3(0, 0, 0));
  }

  if (left) {
    sphereBody.applyTorque(new CANNON.Vec3(0, 0, maxForce));
  } else {
    sphereBody.applyTorque(new CANNON.Vec3(0, 0, 0));
  }

  if (right) {
    sphereBody.applyTorque(new CANNON.Vec3(0, 0, -maxForce));
  } else {
    sphereBody.applyTorque(new CANNON.Vec3(0, 0, 0));
  }

  return sphereBody;
}*/
import { camera } from "./Setup";


//document.addEventListener("mousedown", (e) => onMouseDown_(e), false);
//document.addEventListener("mouseup", (e) => onMouseUp_(e), false);

