import * as THREE from "three";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";
import Stats from "../node_modules/three/examples/jsm/libs/stats.module.js";

import { camera, scene, renderer, world, composer } from "./Setup.js";
import * as createObject from "./Objects.js";

import { Rhino3dmLoader } from "../node_modules/three/examples/jsm/loaders/3DMLoader.js";

const cannonDebugger = new CannonDebugger(scene, world);
const stats = Stats();
document.body.appendChild(stats.dom);

let playerMaterial = new CANNON.Material("playerMaterial");
let wallMaterial = new CANNON.Material("wallMaterial");
let groundMaterial = new CANNON.Material("groundMaterial");
let stairsMaterial = new CANNON.Material("stairsMaterial");
let playerGroundContact = new CANNON.ContactMaterial(
  playerMaterial,
  groundMaterial,
  {
    friction: 1,
    restitution: 0,
  }
);
let playerStairsContact = new CANNON.ContactMaterial(
  playerMaterial,
  stairsMaterial,
  {
    friction: 1,
    restitution: 0,
  }
);
let playerWallContact = new CANNON.ContactMaterial(
  playerMaterial,
  wallMaterial,
  {
    friction: 0,
    restitution: 0,
  }
);
world.addContactMaterial(playerStairsContact);
world.addContactMaterial(playerGroundContact);
world.addContactMaterial(playerWallContact);

let cameraBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Sphere(2.5),
  position: new CANNON.Vec3(0, 2.5, 150),
  material: playerMaterial,
});
cameraBody.angularDamping = 1;
cameraBody.linearDamping = 0.99;
world.addBody(cameraBody);
let raiser = new CANNON.Vec3(0, 12, 0);

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
planeBody.material = groundMaterial;
//scene.add(planeMesh);
world.addBody(planeBody);

/*
cameraBody.addEventListener("collideExit", function (e) {
  if (e.body.material.name == "stairsMaterial") {
    console.log("collided with wall");

    world.gravity.set(0, -900.82, 0);
  }
});
*/
let scale = 0.01;
const loader = new Rhino3dmLoader();
loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");

loader.load(
  //"assets/baken_mesh_color-var1.3dm",
  "assets/land.3dm",
  function (object) {
    object.rotation.x = -Math.PI / 2; // rotate the model
    object.position.y = 46;

    scene.add(object);
    let mat;
    let box = new THREE.Box3().setFromObject(object, false);
    let center = new THREE.Vector3();
    box.getCenter(center);
    object.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 0;
        child.material.side = 0;
        child.recieveShadow = true;
        child.castShadow = true;
        let verts = child.geometry.attributes.position.array;
        for (let i = 0; i < verts.length; i++) {
          verts[i] = verts[i] * scale;
        }
        let indis = child.geometry.index.array;

        let trimeshShape = new CANNON.Trimesh(verts, indis);
        let trimeshBody = new CANNON.Body({ mass: 0 });
        if (child.material.name == "Paint") {
          trimeshBody.material = stairsMaterial;
        } else {
          trimeshBody.material = wallMaterial;
        }
        trimeshBody.collisionResponse = true;
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

loader.load(
  "assets/baken_mesh_color-var1.3dm",
  function (object) {
    object.rotation.x = -Math.PI / 2; // rotate the model

    scene.add(object);
    let mat;
    let box = new THREE.Box3().setFromObject(object, false);
    let center = new THREE.Vector3();
    box.getCenter(center);
    object.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 0;
        child.material.side = 0;
        child.recieveShadow = true;
        child.castShadow = true;
        let verts = child.geometry.attributes.position.array;
        for (let i = 0; i < verts.length; i++) {
          verts[i] = verts[i] * scale;
        }
        let indis = child.geometry.index.array;

        let trimeshShape = new CANNON.Trimesh(verts, indis);
        let trimeshBody = new CANNON.Body({ mass: 0 });
        if (child.material.name == "Paint") {
          trimeshBody.material = stairsMaterial;
        } else {
          trimeshBody.material = wallMaterial;
        }
        trimeshBody.collisionResponse = true;
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

loader.load(
  "assets/net.3dm",
  function (object) {
    object.rotation.x = -Math.PI / 2; // rotate the model
    object.position.x = 150;
    var i = 0;
    scene.add(object);
    let box = new THREE.Box3().setFromObject(object, false);
    let center = new THREE.Vector3();
    box.getCenter(center);
    object.traverse((child) => {
      if (child.isMesh) {
        i++;
        child.material.metalness = 0;
        child.material.side = 2;
        child.recieveShadow = true;
        child.castShadow = true;
        let verts = child.geometry.attributes.position.array;
        for (let i = 0; i < verts.length; i++) {
          verts[i] = verts[i] * scale;
        }
        let indis = child.geometry.index.array;

        let trimeshShape = new CANNON.Trimesh(verts, indis);
        let trimeshBody = new CANNON.Body({ mass: 0 });
        if (child.material.name == "Paint") {
          trimeshBody.material = stairsMaterial;
        } else {
          trimeshBody.material = wallMaterial;
        }
        trimeshBody.collisionResponse = true;
        trimeshBody.addShape(trimeshShape);

        let rot = new CANNON.Quaternion();
        rot.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        trimeshBody.quaternion = rot;
        trimeshBody.position = new CANNON.Vec3(150, 0, 0);
        world.addBody(trimeshBody);
      }
    });
    console.log(i);
  },
  function (progress) {
    //console.log((progress.loaded / progress.total) * 100 + "%");
  },
  function (error) {
    console.log(error);
  }
);

loader.load(
  "assets/byReduced.3dm",
  function (object) {
    object.rotation.x = -Math.PI / 2; // rotate the model
    object.position.x = -200;
    object.position.y = 0;
    scene.add(object);
    let box = new THREE.Box3().setFromObject(object, false);
    let center = new THREE.Vector3();
    box.getCenter(center);
    let i = 0;
    object.traverse((child) => {
      if (child.isMesh) {
        i++;
        child.material.metalness = 0;
        child.material.side = 0;
        child.recieveShadow = true;
        child.castShadow = true;
        let verts = child.geometry.attributes.position.array;
        for (let i = 0; i < verts.length; i++) {
          verts[i] = verts[i] * scale;
        }
        let indis = child.geometry.index.array;
        //console.log(verts.length);

        let trimeshShape = new CANNON.Trimesh(verts, indis);
        let trimeshBody = new CANNON.Body({ mass: 0 });
        if (i < 1295) {
          trimeshBody.material = wallMaterial;
        } else {
          trimeshBody.material = groundMaterial;
        }
        trimeshBody.collisionResponse = true;
        trimeshBody.addShape(trimeshShape);

        let rot = new CANNON.Quaternion();
        rot.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        trimeshBody.quaternion = rot;
        trimeshBody.position = new CANNON.Vec3(-200, 0, 0);

        //houses are upto 1295, gorundplane is 1493
        if (i < 1295 || i == 1493) {
          world.addBody(trimeshBody);
        }
      }
    });
    console.log(i);
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

    //cameraBody.quaternion.copy(qx);
    camera.quaternion.copy(q);
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
  flyingBool,
  canJump = false;
document.addEventListener("keydown", (e) => {
  if (document.pointerLockElement === document.body) {
    if (e.keyCode == 87 || e.keyCode == 38) forwardBool = true;
    if (e.keyCode == 83 || e.keyCode == 40) backwardBool = true;
    if (e.keyCode == 65 || e.keyCode == 37) leftBool = true;
    if (e.keyCode == 68 || e.keyCode == 39) rightBool = true;
    if (e.keyCode == 32) upBool = true;
    if (e.keyCode == 16) downBool = true;
    if (e.keyCode == 70) {
      flyingBool = !flyingBool;
      if (flyingBool) {
        cameraBody.mass = 0;
        cameraBody.collisionFilterGroup = 0;
        //world.gravity.set(0, 0, 0);
        cameraBody.velocity = new CANNON.Vec3(0, 0, 0);
      } else {
        cameraBody.mass = 1;
        cameraBody.collisionFilterGroup = 1;
        //world.gravity.set(0, -9.82, 0);
        //cameraBody.position.y = 1.5;
      }
    }
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 87 || e.keyCode == 38) forwardBool = false;
  if (e.keyCode == 83 || e.keyCode == 40) backwardBool = false;
  if (e.keyCode == 65 || e.keyCode == 37) leftBool = false;
  if (e.keyCode == 68 || e.keyCode == 39) rightBool = false;
  if (e.keyCode == 32) upBool = false;
  if (e.keyCode == 16) downBool = false;
});

const contactNormal = new CANNON.Vec3(); // Normal in the contact, pointing *out* of whatever the player touched
const upAxis = new CANNON.Vec3(0, 1, 0);
cameraBody.addEventListener("collide", function (e) {
  const { contact } = e;
  //console.log(contact);

  //cameraBody.angularDamping = 0.1;
  //cameraBody.linearDamping = 0.1;

  // contact.bi and contact.bj are the colliding bodies, and contact.ni is the collision normal.
  // We do not yet know which one is which! Let's check.
  if (contact.bi.id === cameraBody.id) {
    // bi is the player body, flip the contact normal
    contact.ni.negate(contactNormal);
  } else {
    // bi is something else. Keep the normal as it is
    contactNormal.copy(contact.ni);
  }

  // If contactNormal.dot(upAxis) is between 0 and 1, we know that the contact normal is somewhat in the up direction.
  if (contactNormal.dot(upAxis) > 0.5) {
    // Use a "good" threshold value between 0 and 1 here!
    canJump = true;
  }
});

function move() {
  let speed = 1000;
  let movement;
  if (!flyingBool) {
    if (forwardBool) {
      movement = new CANNON.Vec3(-speed, 0, 0);
      movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.applyTorque(movement);
    }
    if (backwardBool) {
      movement = new CANNON.Vec3(speed, 0, 0);
      movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.applyTorque(movement);
    }
    if (leftBool) {
      movement = new CANNON.Vec3(0, 0, speed);
      movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.applyTorque(movement);
    }
    if (rightBool) {
      movement = new CANNON.Vec3(0, 0, -speed);
      movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.applyTorque(movement);
    }
    if (upBool && canJump) {
      canJump = false;
      movement = new CANNON.Vec3(0, 5000, 0);
      //movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.linearDamping = 0.49;
      cameraBody.applyForce(movement);
    }
  } else {
    if (forwardBool) {
      movement = new CANNON.Vec3(0, 0, -1);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (backwardBool) {
      movement = new CANNON.Vec3(0, 0, 1);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (leftBool) {
      movement = new CANNON.Vec3(-1, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (rightBool) {
      movement = new CANNON.Vec3(1, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }

    if (upBool) {
      movement = new CANNON.Vec3(0, 1, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
    if (downBool) {
      movement = new CANNON.Vec3(0, -1, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
    }
  }
  /*if (cameraBody.velocity.length() > speed) {
    cameraBody.velocity.normalize();
    cameraBody.velocity.scale(speed, cameraBody.velocity);
  }*/
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
  //camera.quaternion.copy(cameraBody.quaternion);
}
camera;
let pushDown = new CANNON.Vec3(0, -500, 0);
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
  if (yPosDiff < -0.1 && !flyingBool) {
    //cameraBody.velocity = cameraBody.velocity.vadd(pushDown);
  }
  //world.gravity = pushDown;
  prevYPos = cameraBody.position.y;

  cannonToThree();
  //cannonDebugger.update();

  // Render three.js
  renderer.render(scene, camera);

  // Render the effect composer (post processing)
  //composer.render();
  stats.update();
}
