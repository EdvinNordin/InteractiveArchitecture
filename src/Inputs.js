import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";
import * as CANNON from "cannon-es";

import { world } from "./Setup.js";

let forwardBool,
  backwardBool,
  leftBool,
  rightBool,
  upBool,
  downBool,
  flyingBool = false;

const instructions = document.getElementById("instructions");

let phi_ = 0;
let theta_ = 0;

let qx = new CANNON.Quaternion();

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
    if (e.keyCode == 70) {
      flyingBool = !flyingBool;
      if (flyingBool) {
        cameraBody.mass = 0;
        cameraBody.collisionFilterGroup = 0;
        world.gravity.set(0, 0, 0);
        cameraBody.velocity = cameraBody.velocity.set(0, 0, 0);
      } else {
        cameraBody.mass = 1;
        cameraBody.collisionFilterGroup = 1;
        world.gravity.set(0, -9.82, 0);
        cameraBody.position.y = 1.5;
      }
    }
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
  let speed = 100;
  let movement;
  if (!flyingBool) {
    if (forwardBool) {
      movement = new CANNON.Vec3(0, 0, -speed);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
    if (backwardBool) {
      let movement = new CANNON.Vec3(0, 0, speed);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
    if (leftBool) {
      let movement = new CANNON.Vec3(-speed, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
    if (rightBool) {
      let movement = new CANNON.Vec3(speed, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
  } else {
    if (forwardBool) {
      movement = new CANNON.Vec3(0, 0, -1);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (backwardBool) {
      let movement = new CANNON.Vec3(0, 0, 1);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (leftBool) {
      let movement = new CANNON.Vec3(-1, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (rightBool) {
      let movement = new CANNON.Vec3(1, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }

    if (upBool) {
      let movement = new CANNON.Vec3(0, 1, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (downBool) {
      let movement = new CANNON.Vec3(0, -1, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
  }
  if (cameraBody.velocity.length() > 20) {
    cameraBody.velocity.normalize();
    cameraBody.velocity.scale(20, cameraBody.velocity);
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

/*
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

    cameraBody.velocity = forwardMovement;
  }
  if (backwardBool) {
    let backwardMovement = new CANNON.Vec3(0, 0, 1);
    backwardMovement = applyQuaternion(backwardMovement, qx);
    backwardMovement.scale(speed);

    cameraBody.position = cameraBody.position.vadd(backwardMovement);
  }
  if (leftBool) {
    let leftMovement = new CANNON.Vec3(-1, 0, 0);
    leftMovement = applyQuaternion(leftMovement, qx);
    leftMovement.scale(speed);

    cameraBody.position = cameraBody.position.vadd(leftMovement);
  }
  if (rightBool) {
    let rightMovement = new CANNON.Vec3(1, 0, 0);
    rightMovement = applyQuaternion(rightMovement, qx);
    rightMovement.scale(speed);

    cameraBody.position = cameraBody.position.vadd(rightMovement);
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

export { move };
*/
