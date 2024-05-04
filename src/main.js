import * as THREE from "three";
import * as CANNON from "cannon-es";

import { camera, scene, renderer, world, composer } from "./Setup.js";
import * as createObject from "./Objects.js";
import { move } from "./Inputs.js";

import { Rhino3dmLoader } from "three/addons/loaders/3DMLoader.js";

THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

// Created objects
let sphereMesh = createObject.newObject("Sphere").threeMesh;
let sphereBody = createObject.newObject("Sphere").cannonBody;
scene.add(sphereMesh);
world.addBody(sphereBody);

let planeMesh = createObject.newObject("Plane").threeMesh;
let planeBody = createObject.newObject("Plane").cannonBody;
scene.add(planeMesh);
world.addBody(planeBody);

// Start the simulation loop
animate();

function animate() {
  //loops the animate function
  requestAnimationFrame(animate);

  // Step the physics world
  world.fixedStep();

  // Move the camera
  move();

  // Copy phyics pos and rot to renderer
  cannonToThree();

  // Render three.js
  renderer.render(scene, camera);

  // Render the effect composer (post processing)
  composer.render();
}

// Copy coordinates from Cannon.js to Three.js
function cannonToThree() {
  // Pos then rot
  sphereMesh.position.copy(sphereBody.position);
  sphereMesh.quaternion.copy(sphereBody.quaternion);
  //scene.children.forEach((child) => {});
}
