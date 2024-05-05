import * as THREE from "three"; //"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";
import * as CANNON from "cannon-es"; //"https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/+esm";

export function newObject(type) {
  let cannonBody, threeMesh;
  if (type === "Sphere") {
    cannonBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(1),
    });
    cannonBody.position.set(0, 0, 0); // m

    let sphereGeometry = new THREE.SphereGeometry(1);
    let sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    });
    threeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    threeMesh.castShadow = true;
    threeMesh.receiveShadow = true;

    return { cannonBody, threeMesh };
  } else if (type === "Box") {
    cannonBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
    });
    cannonBody.position.set(0, 0, 0); // m

    let boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    let boxMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    });
    threeMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    threeMesh.castShadow = true;
    threeMesh.receiveShadow = true;

    return { cannonBody, threeMesh };
  } else if (type === "Cylinder") {
    cannonBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Cylinder(1, 1, 1, 10),
    });
    cannonBody.position.set(0, 0, 0); // m

    let cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 10);
    let cylinderMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    });
    threeMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    threeMesh.castShadow = true;
    threeMesh.receiveShadow = true;

    return { cannonBody, threeMesh };
  } else if (type === "Plane") {
    cannonBody = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });
    cannonBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // make it face up
    cannonBody.position.set(0, 0, 0); // Place it at the bottom of the world

    let planeGeometry = new THREE.PlaneGeometry(1000, 1000);
    let planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });

    threeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    threeMesh.receiveShadow = true;
    threeMesh.position.copy(cannonBody.position);
    threeMesh.quaternion.copy(cannonBody.quaternion);

    return { cannonBody, threeMesh };
  } else {
    console.log("Invalid object type");
    return { cannonBody, threeMesh };
  }
}

var test = "Sphere";
let cannonBody = new CANNON.Body({ mass: 1, shape: new CANNON.Sphere(1) });
cannonBody.position.set(5, 0, 0); // m

let geometry = new THREE.SphereGeometry(1);
let material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
});
let threeMesh = new THREE.Mesh(geometry, material);
threeMesh.castShadow = true;
threeMesh.receiveShadow = true;

export { cannonBody, threeMesh };
