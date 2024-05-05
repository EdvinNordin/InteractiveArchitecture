import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";

import { camera, scene, renderer, world, composer } from "./Setup.js";
import * as createObject from "./Objects.js";
import { move } from "./Inputs.js";

import { Rhino3dmLoader } from "../node_modules/three/examples/jsm/loaders/3DMLoader.js";

THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

// Created objects
let sphereMesh = createObject.newObject("Sphere").threeMesh;
let sphereBody = createObject.newObject("Sphere").cannonBody;
scene.add(sphereMesh);
world.addBody(sphereBody);

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

//scene.add(planeMesh);
world.addBody(planeBody);

const loader = new Rhino3dmLoader();

loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");
loader.load(
  "assets/baken_grey_texture.3dm",
  function (object) {
    object.scale.set(0.01, 0.01, 0.01);
    object.rotation.x = -Math.PI / 2; // rotate the model
    var box = new THREE.Box3().setFromObject(object);
    var center = new THREE.Vector3();
    box.getCenter(center);
    object.position.sub(center); // center the model
    object.position.add(new THREE.Vector3(0, 10, 0));
    object.traverse(function (child) {
      var childBox = new THREE.Box3().setFromObject(child);
      var boxSize = childBox.getSize(new THREE.Vector3());

      var childBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(boxSize),
      });
      world.addBody(childBody);
    });
    scene.add(object);
  },
  function (progress) {
    //console.log((progress.loaded / progress.total) * 100 + "%");
  },
  function (error) {
    console.log(error);
  }
);

let cameraBody = new CANNON.Body({ mass: 1 });
cameraBody.addShape(new CANNON.Sphere(1));
cameraBody.position.set(0, 8, 30);
world.addBody(cameraBody);

/*cameraBody.addEventListener("collide", (event) => {
  console.log(event);
});*/

const cannonDebugger = new CannonDebugger(scene, world);

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

  //cannonDebugger.update();
  // Render three.js
  renderer.render(scene, camera);

  // Render the effect composer (post processing)
  //composer.render();
}

// Copy coordinates from Cannon.js to Three.js
function cannonToThree() {
  cameraBody.position.copy(camera.position);
  // Pos then rot
  sphereMesh.position.copy(sphereBody.position);
  sphereMesh.quaternion.copy(sphereBody.quaternion);
  //scene.children.forEach((child) => {});
}
