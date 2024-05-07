import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";

import { camera, scene, renderer, world, composer } from "./Setup.js";
import * as createObject from "./Objects.js";
//import { move, cameraBody } from "./Inputs.js";

//import { ConvexHull } from "three/addons/math/ConvexHull.js";
import { Rhino3dmLoader } from "../node_modules/three/examples/jsm/loaders/3DMLoader.js";

THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
let wow;
// Created objects
let sphereMesh = createObject.newObject("Sphere").threeMesh;
let sphereBody = createObject.newObject("Sphere").cannonBody;
scene.add(sphereMesh);
world.addBody(sphereBody);

/*
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyF") {
    console.log("F");
    sphereBody.force.set(0, 0, -50);
  }
});*/

let planeMesh = createObject.newObject("Plane").threeMesh;
let planeBody = createObject.newObject("Plane").cannonBody;

const texture = new THREE.TextureLoader().load("assets/grass.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(100, 100);

planeMesh.material = new THREE.MeshStandardMaterial({
  map: texture,
  side: THREE.DoubleSide,
});

scene.add(planeMesh);
world.addBody(planeBody);

const loader = new Rhino3dmLoader();

loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");
loader.load(
  "assets/baken_grey_texture.3dm",
  function (object) {
    object.scale.set(0.01, 0.01, 0.01);
    object.rotation.x = -Math.PI / 2; // rotate the model
    var box = new THREE.Box3().setFromObject(object, false);
    var center = new THREE.Vector3();
    box.getCenter(center);
    object.position.sub(center); // center the model
    object.position.y = 0; //center.y / 2;
    /*object.traverse(function (child) {
      //var childCH = new ConvexHull().setFromObject(child);
      //childCH.compute();
      var childBox = new THREE.Box3().setFromObject(child, true);
      var boxSize = childBox.getSize(new THREE.Vector3());
      var test = new CANNON.Vec3();
      test.copy(childBox.getCenter(new THREE.Vector3()));

      var childBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        mass: 0,
        shape: new CANNON.Box(boxSize),
        position: test,
      });
      //world.addBody(childBody);
    });*/
    //var jek = new ConvexHull().setFromObject(object);
    var hej = new CANNON.Vec3();
    var pos = new CANNON.Vec3();
    pos.copy(object.position);
    hej.copy(box.getSize(new THREE.Vector3()));
    console.log(box.getSize(new THREE.Vector3()));
    var objectBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      mass: 0,
      shape: new CANNON.Box(hej),
      position: pos,
    });
    console.log(hej);
    objectBody.position.z = -100;
    world.addBody(objectBody);
    scene.add(object);
  },
  function (progress) {
    //console.log((progress.loaded / progress.total) * speed0 + "%");
  },
  function (error) {
    console.log(error);
  }
);

/*cameraBody.addEventListener("collide", (event) => {
  console.log(event);
});*/

const cannonDebugger = new CannonDebugger(scene, world);

var cameraRaiser = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Plane(),
  position: new CANNON.Vec3(0, 7.5, 0),
});
cameraRaiser.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(cameraRaiser);

const testBody = createObject.newObject("Sphere").cannonBody;
world.addBody(testBody);
var flying = new CANNON.Vec3(0, 9.82, 0);
// Start the simulation loop
function animate() {
  //loops the animate function
  requestAnimationFrame(animate);
  // Step the physics world
  world.fixedStep();

  //console.log(cameraBody.velocity);
  // Move the camera
  move();
  // Copy phyics pos and rot to renderer
  //console.log(testBody.velocity);

  //cameraBody.force = cameraBody.force.vadd(flying);
  camera.position.copy(cameraBody.position);
  camera.quaternion.copy(cameraBody.quaternion);
  cannonToThree();
  cannonDebugger.update();
  // Render three.js
  renderer.render(scene, camera);

  // Render the effect composer (post processing)
  //composer.render();
}

// Copy coordinates from Cannon.js to Three.js
function cannonToThree() {
  //camera.position.copy(cameraBody.position);
  //camera.quaternion.copy(cameraBody.quaternion);
  //console.log(cameraBody.quaternion);
  // Pos then rot
  //sphereMesh.position.copy(sphereBody.position);
  //sphereMesh.quaternion.copy(sphereBody.quaternion);
  //scene.children.forEach((child) => {});
}

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

let cameraBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Sphere(0.001),
  position: new CANNON.Vec3(0, 8, 100),
});
cameraBody.angularDamping = 1;
cameraBody.linearDamping = 0.5;

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
        cameraBody.position.y = 8;
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
      //console.log(cameraBody);
      //cameraBody.position += forwardMovement;
    }
    if (backwardBool) {
      let movement = new CANNON.Vec3(0, 0, speed);
      movement = applyQuaternion(movement, qx);

      cameraBody.velocity = cameraBody.velocity.vadd(movement);
      //cameraBody.position = cameraBody.position.vadd(backwardMovement);
      //cameraBody.position += backwardMovement;
    }
    if (leftBool) {
      let movement = new CANNON.Vec3(-speed, 0, 0);
      //movement.scale(speed, movement);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
    if (rightBool) {
      let movement = new CANNON.Vec3(speed, 0, 0);
      //movement.scale(speed, movement);
      movement = applyQuaternion(movement, qx);

      cameraBody.velocity = cameraBody.velocity.vadd(movement);
      //cameraBody.position = cameraBody.position.vadd(rightMovement);
      //cameraBody.position += rightMovement;
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
      //movement.scale(speed, movement);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (rightBool) {
      let movement = new CANNON.Vec3(1, 0, 0);
      //movement.scale(speed, movement);
      movement = applyQuaternion(movement, qx);

      cameraBody.position = cameraBody.position.vadd(movement);
    }

    if (upBool) {
      let movement = new CANNON.Vec3(0, 1, 0);
      //movement.scale(speed, movement);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
    if (downBool) {
      let movement = new CANNON.Vec3(0, -1, 0);
      //movement.scale(speed, movement);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);

      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
    }
  }
  if (cameraBody.velocity.length() > 20) {
    cameraBody.velocity.normalize();
    cameraBody.velocity.scale(20, cameraBody.velocity);
  }
  /*
  if (cameraBody.velocity.x > 20) cameraBody.velocity.x = 20;
  else if (cameraBody.velocity.x < -20) cameraBody.velocity.x = -20;
  if (cameraBody.velocity.y > 20) cameraBody.velocity.y = 20;
  else if (cameraBody.velocity.y < -20) cameraBody.velocity.y = -20;
  if (cameraBody.velocity.z > 20) cameraBody.velocity.z = 20;
  else if (cameraBody.velocity.z < -20) cameraBody.velocity.z = -20;*/
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

animate();
