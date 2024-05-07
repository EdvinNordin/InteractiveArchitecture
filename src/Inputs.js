import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";
import * as CANNON from "cannon-es";

import { world } from "./Setup.js";

let forwardBool,
  backwardBool,
  leftBool,
  rightBool,
  upBool,
  downBool = false;

const instructions = document.getElementById("instructions");

let phi_ = 0;
let theta_ = 0;

let qx = new CANNON.Quaternion();

let cameraBody = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
  position: new CANNON.Vec3(0, 1, 100),
});
cameraBody.angularDamping = 1;
cameraBody.linearDamping = 1;
world.addBody(cameraBody);

document.addEventListener("mousemove", (e) => {
  if (document.pointerLockElement === document.body) {
    const xh = e.movementX * 0.0005;
    const yh = e.movementY * 0.0005;

    phi_ += -xh * 8;
    theta_ = clamp(theta_ + -yh * 5, -Math.PI / 3, Math.PI / 3);

    qx.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), phi_);
    let qz = new CANNON.Quaternion();
    qz.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), theta_);

    let q = new CANNON.Quaternion(0, 0, 0, 0);
    q = qx.mult(qz);
    //qx.mult(qz);
    //console.log(q);

    cameraBody.quaternion.copy(q);
  }
});

document.body.onclick = () => {
  if (document.pointerLockElement !== document.body) {
    document.body.requestPointerLock();
  }
};

document.addEventListener("pointerlockchange", (e) => {
  if (document.pointerLockElement === document.body) {
    instructions.style.display = "none";
  } else {
    instructions.style.display = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (document.pointerLockElement === document.body) {
    if (e.keyCode == 87) forwardBool = true;
    if (e.keyCode == 83) backwardBool = true;
    if (e.keyCode == 65) leftBool = true;
    if (e.keyCode == 68) rightBool = true;
    if (e.keyCode == 32) upBool = true;
    if (e.keyCode == 16) downBool = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 87) forwardBool = false;
  if (e.keyCode == 83) backwardBool = false;
  if (e.keyCode == 65) leftBool = false;
  if (e.keyCode == 68) rightBool = false;
  if (e.keyCode == 32) upBool = false;
  if (e.keyCode == 16) downBool = false;
});

function move() {
  let speed = 0.1;
  if (forwardBool) {
    let forwardMovement = new CANNON.Vec3(0, 0, -1);
    forwardMovement = applyQuaternion(forwardMovement, qx);
    forwardMovement.scale(10000);

    //cameraBody.position = cameraBody.position.vadd(forwardMovement);

    cameraBody.velocity = forwardMovement;

    //console.log(cameraBody);
    //cameraBody.position += forwardMovement;
  }
  if (backwardBool) {
    let backwardMovement = new CANNON.Vec3(0, 0, 1);
    backwardMovement = applyQuaternion(backwardMovement, qx);
    backwardMovement.scale(speed);

    cameraBody.position = cameraBody.position.vadd(backwardMovement);
    //cameraBody.position += backwardMovement;
  }
  if (leftBool) {
    let leftMovement = new CANNON.Vec3(-1, 0, 0);
    leftMovement = applyQuaternion(leftMovement, qx);
    leftMovement.scale(speed);

    cameraBody.position = cameraBody.position.vadd(leftMovement);
    //cameraBody.position += leftMovement;
  }
  if (rightBool) {
    let rightMovement = new CANNON.Vec3(1, 0, 0);
    rightMovement = applyQuaternion(rightMovement, qx);
    rightMovement.scale(speed);

    cameraBody.position = cameraBody.position.vadd(rightMovement);
    //cameraBody.position += rightMovement;
  }
  if (flyingBool) {
    if (upBool) {
      let upMovement = new CANNON.Vec3(0, 1, 0);
      upMovement = applyQuaternion(upMovement, qx);
      upMovement.scale(speed);

      cameraBody.position = cameraBody.position.vadd(upMovement);
    }
    if (downBool) {
      let downMovement = new CANNON.Vec3(0, -1, 0);
      downMovement = applyQuaternion(downMovement, qx);
      downMovement.scale(speed);

      cameraBody.position = cameraBody.position.vadd(downMovement);
    }
  }
}

function clamp(x, a, b) {
  return Math.min(Math.max(x, a), b);
}

function applyQuaternion(vec, quat) {
  const x = vec.x,
    y = vec.y,
    z = vec.z;
  const qx = quat.x,
    qy = quat.y,
    qz = quat.z,
    qw = quat.w;

  // calculate quat * vec
  const ix = qw * x + qy * z - qz * y;
  const iy = qw * y + qz * x - qx * z;
  const iz = qw * z + qx * y - qy * x;
  const iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  vec.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  vec.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  vec.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return vec;
}

export { move, cameraBody };
