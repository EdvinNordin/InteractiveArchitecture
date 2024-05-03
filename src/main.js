import * as THREE from "three";
import * as CANNON from "cannon-es";

import { camera, scene, renderer, world, composer } from "./Setup.js";
import * as createObject from "./Objects.js";
import * as Inputs from "./Inputs.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
//import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const gltfLoader = new GLTFLoader();

// Created objects
let sphereMesh = createObject.newObject("Sphere").threeMesh;
let sphereBody = createObject.newObject("Sphere").cannonBody;
scene.add(sphereMesh);
world.addBody(sphereBody);

let planeMesh = createObject.newObject("Plane").threeMesh;
let planeBody = createObject.newObject("Plane").cannonBody;
scene.add(planeMesh);
world.addBody(planeBody);

// Imported models

let tower = new THREE.Object3D();
gltfLoader.load("./assets/box.glb", function (gltf) {
  tower = gltf.scene;
  tower.scale.set(1, 1, 1);
  tower.position.set(10, 10, 10);
  scene.add(tower);
  /*loadedMesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  }),
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("An error happened:", error);
    };*/
});

/*const fbxLoader = new FBXLoader();
fbxLoader.load("./assets/baken.fbx", (object) => {
  // mixer = new THREE.AnimationMixer( object );

  // const action = mixer.clipAction( object.animations[ 0 ] );
  // action.play();
  console.log(object);

  object.scale.set(0.01, 0.01, 0.01);
  scene.add(object);
});*/

animate();
// Start the simulation loop
function animate() {
  //loops the animate function
  requestAnimationFrame(animate);

  // Step the physics world
  world.fixedStep();

  //update the controls
  //sphereBody = Inputs.moveSphere(sphereBody);
  //camera.position.copy(sphereBody.position).add(new THREE.Vector3(0, 6, 10));
  //camera.lookAt(sphereBody.position);

  // Copy phyics pos and rot to renderer
  cannonToThree();

  // Render three.js
  renderer.render(scene, camera);

  // Render the effect composer (post processing)
  composer.render();
}

// Copy coordinates from Cannon.js to Three.js
function cannonToThree() {
  sphereMesh.position.copy(sphereBody.position);
  sphereMesh.quaternion.copy(sphereBody.quaternion);

  //scene.children.forEach((child) => {});
}
