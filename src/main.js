import * as THREE from "three";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";

import { camera, scene, renderer, world, composer } from "./Setup.js";
import * as createObject from "./Objects.js";

import { Rhino3dmLoader } from "../node_modules/three/examples/jsm/loaders/3DMLoader.js";

const cannonDebugger = new CannonDebugger(scene, world);

let cameraBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Sphere(2.5),
  position: new CANNON.Vec3(0, 2.5, 150),
});
cameraBody.angularDamping = 1;
cameraBody.linearDamping = 0.5;
world.addBody(cameraBody);
let raiser = new CANNON.Vec3(0, 7.5, 0);

let planeMesh = createObject.newObject("Plane").threeMesh;
let planeBody = createObject.newObject("Plane").cannonBody;
const texture = new THREE.TextureLoader().load("assets/stacked-stones.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(50, 50);
planeMesh.material = new THREE.MeshStandardMaterial({
  map: texture,
  side: THREE.DoubleSide,
});
scene.add(planeMesh);
world.addBody(planeBody);

const loader = new Rhino3dmLoader();
loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");
loader.load(
  "assets/baken_mesh_color-var1.3dm",
  function (object) {
    object.rotation.x = -Math.PI / 2; // rotate the model

    scene.add(object);

    let box = new THREE.Box3().setFromObject(object, false);
    let center = new THREE.Vector3();
    box.getCenter(center);
    let mat;
    object.traverse((child) => {
      if (child.isMesh) {
        /*if (child.material.name === "/Concrete Simple D02 200cm (1)") {
          mat = child.material;
        }*/
        child.material.metalness = 0;

        child.material.side = 0;
        child.recieveShadow = true;
        child.castShadow = true;
        let verts = child.geometry.attributes.position.array;
        for (let i = 0; i < verts.length; i++) {
          verts[i] = verts[i] * 0.01;
        }
        let indis = child.geometry.index.array;

        let trimeshShape = new CANNON.Trimesh(verts, indis);
        let trimeshBody = new CANNON.Body({ mass: 0 });
        trimeshBody.addShape(trimeshShape);

        let rot = new CANNON.Quaternion();
        rot.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        trimeshBody.quaternion = rot;

        world.addBody(trimeshBody);
      }
    });
  },
  function (progress) {
    //console.log((progress.loaded / progress.total) * 100 + "%");
  },
  function (error) {
    console.log(error);
  }
);

document.body.onclick = () => {
  if (document.pointerLockElement !== document.body) {
    document.body.requestPointerLock();
  }
};

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

const instructions = document.getElementById("instructions");
document.addEventListener("pointerlockchange", (e) => {
  if (document.pointerLockElement === document.body) {
    instructions.style.display = "none";
  } else {
    instructions.style.display = "";
  }
});

let forwardBool,
  backwardBool,
  leftBool,
  rightBool,
  upBool,
  downBool,
  flyingBool = false;
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
  let speed = 70;
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
  if (cameraBody.velocity.length() > speed) {
    cameraBody.velocity.normalize();
    cameraBody.velocity.scale(speed, cameraBody.velocity);
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

function cannonToThree() {
  camera.position.copy(cameraBody.position.vadd(raiser));
  camera.quaternion.copy(cameraBody.quaternion);
  //camera.position.copy(cameraBody.position);
  //camera.quaternion.copy(cameraBody.quaternion);
  //console.log(cameraBody.quaternion);
  // Pos then rot
  //sphereMesh.position.copy(sphereBody.position);
  //sphereMesh.quaternion.copy(sphereBody.quaternion);
  //scene.children.forEach((child) => {});
}
let pushDown = new CANNON.Vec3(0, -50, 0);
let prevYPos = 1.5;
animate();
function animate() {
  //loops the animate function
  requestAnimationFrame(animate);

  // Step the physics world
  world.fixedStep();

  // Move the camera
  move();
  let yPosDiff = cameraBody.position.y - prevYPos;
  if (yPosDiff < -0.1) {
    cameraBody.velocity = cameraBody.velocity.vadd(pushDown);
  }
  prevYPos = cameraBody.position.y;

  cannonToThree();
  //cannonDebugger.update();

  // Render three.js
  renderer.render(scene, camera);

  // Render the effect composer (post processing)
  composer.render();
}
