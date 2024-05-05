import * as THREE from "../node_modules/three/build/three.module.js";
import * as CANNON from "../node_modules/cannon-es/dist/cannon-es.js";

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

scene.add(planeMesh);
world.addBody(planeBody);

const loader = new Rhino3dmLoader();

loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");
loader.load(
  "assets/baken.3dm",
  function (object) {
    object.scale.set(0.001, 0.001, 0.001);
    object.rotation.x = -Math.PI / 2; // rotate the model
    var box = new THREE.Box3().setFromObject(object);
    var center = new THREE.Vector3();
    box.getCenter(center);
    object.position.sub(center); // center the model
    object.position.add(new THREE.Vector3(0, 10, 0));
    /*object.traverse(function (child) {
      var box = new THREE.Box3().setFromObject(child);
      var center = new THREE.Vector3();
      box.getCenter(center);
      console.log("before ");
      console.log(center);
      child.position.sub(center); // center the model
      //child.rotation.y = Math.PI; // rotate the model
      var box2 = new THREE.Box3().setFromObject(child);
      box2.getCenter(center);
      console.log("after ");
      console.log(center);
      //scene.add(child);
    });*/
    //object.scale.set(0.1, 0.1, 0.1);
    scene.add(object);

    // hide spinner
    //document.getElementById("loader").style.display = "none";
  },
  function (progress) {
    //console.log((progress.loaded / progress.total) * 100 + "%");
  },
  function (error) {
    console.log(error);
  }
);

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
