import * as THREE from "./node_modules/three/build/three.module.js";

let forwardBool,
  backwardBool,
  leftBool,
  rightBool = false;

const instructions = document.getElementById("instructions");

let phi_ = 0;
let theta_ = 0;

let qx = new THREE.Quaternion();

let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  100
);

//camera staring pos
camera.position.z = 30;
camera.position.y = 8;

document.addEventListener("mousemove", (e) => {
  if (document.pointerLockElement === document.body) {
    const xh = e.movementX * 0.0005;
    const yh = e.movementY * 0.0005;

    phi_ += -xh * 8;
    theta_ = clamp(theta_ + -yh * 5, -Math.PI / 3, Math.PI / 3);

    qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi_);
    const qz = new THREE.Quaternion();
    qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta_);

    const q = new THREE.Quaternion();
    q.multiply(qx);
    q.multiply(qz);

    camera.quaternion.copy(q);
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
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 87) forwardBool = false;
  if (e.keyCode == 83) backwardBool = false;
  if (e.keyCode == 65) leftBool = false;
  if (e.keyCode == 68) rightBool = false;
});

function move() {
  let speed = 0.1;
  if (forwardBool) {
    const forwardMovement = new THREE.Vector3(0, 0, -1);
    forwardMovement.applyQuaternion(qx);
    forwardMovement.multiplyScalar(speed);

    camera.position.add(forwardMovement);
  }
  if (backwardBool) {
    const backwardMovement = new THREE.Vector3(0, 0, 1);
    backwardMovement.applyQuaternion(qx);
    backwardMovement.multiplyScalar(speed);

    camera.position.add(backwardMovement);
  }
  if (leftBool) {
    const leftMovement = new THREE.Vector3(-1, 0, 0);
    leftMovement.applyQuaternion(qx);
    leftMovement.multiplyScalar(speed);

    camera.position.add(leftMovement);
  }
  if (rightBool) {
    const rightMovement = new THREE.Vector3(1, 0, 0);
    rightMovement.applyQuaternion(qx);
    rightMovement.multiplyScalar(speed);

    camera.position.add(rightMovement);
  }
}

function clamp(x, a, b) {
  return Math.min(Math.max(x, a), b);
}

export { camera, move };
