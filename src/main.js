import * as THREE from "three";
import * as CANNON from "cannon-es";

import { camera, scene, renderer, world, composer, move } from "./Setup.js";
import * as createObject from "./Objects.js";
import * as Inputs from "./Inputs.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Rhino3dmLoader } from "three/addons/loaders/3DMLoader.js";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
//import { GUI } from "three/addons/libs/lil-gui.module.min.js";
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
//get body element

// Imported models

/*let tower = new THREE.Object3D();
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
    };
});*/

/*const loader = new Rhino3dmLoader();

// Specify path to a folder containing WASM/JS libraries or a CDN.
// For example, /jsm/libs/rhino3dm/ is the location of the library inside the three.js repository
// loader.setLibraryPath( '/path_to_library/rhino3dm/' );
loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");
let object = new THREE.Object3D();
// Load a 3DM file
loader.load(
  // resource URL
  "./assets/baken.3dm",
  // called when the resource is loaded
  function (object) {
    /* var box = new THREE.Box3().setFromObject(object, true);
    var center = new THREE.Vector3();
    box.getCenter(center);
    console.log(center);
    object.position.add(-center); // center the model
    box.getSize(center);
    console.log(center);
    //object.rotation.y = Math.PI; // rotate the model
    object.scale.set(0.001, 0.001, 0.001); */
/* object.traverse((child) => {
      const bbox = new THREE.Box3().setFromObject(child);
      const vec = new THREE.Vector3();
      bbox.getCenter(vec);
      if (child instanceof THREE.Mesh) {
        const material = child.material;
        child.position.set(vec.x, vec.y, vec.z);
        if (child.geometry) {
          child.geometry.translate(-vec.x, -vec.y, -vec.z);
        }
      } else {
        child.position.set(vec.x, vec.y, vec.z);
        child.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.translate(-vec.x, -vec.y, -vec.z);
          }
        });
        child.position.set(0, 0, 0);
      }
    });
    scene.add(object);
    console.log(object);
    sphereBody.position.copy(object.position);
    //camera.lookAt(object.position);
  },
  // called as loading progresses
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log(error);
  }
);*/

animate();
// Start the simulation loop
function animate() {
  //loops the animate function
  requestAnimationFrame(animate);

  // Step the physics world
  world.fixedStep();

  move();
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
