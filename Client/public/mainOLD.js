/*import * as THREE from "three";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";
import Stats from "three/examples/jsm/libs/stats.module.js";
import {io} from "socket.io-client";

import {camera, scene, renderer, world, composer} from "./setup.js";
import * as createObject from "./objects.js";
//import { socketConnection } from "./socket.js";

import {Rhino3dmLoader} from "three/examples/jsm/loaders/3DMLoader.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
/*
const scene = new THREE.Scene();

const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.bias = -0.0001;
scene.add(dirLight);
const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.85);
//hemiLight.groundColor.setRGB(0.85, 0.85, 0.71);
scene.add(hemiLight);
*/
//var robot = new THREE.Object3D();
/*const GLTFloader = new GLTFLoader();
var animations;

function spawnRobot(callback) {

    var robot = new THREE.Object3D();
// Load a glTF resource
    GLTFloader.load(
        // resource URL
        "assets/Robot1.glb",
        // called when the resource is loaded
        function (gltf) {
            robot = gltf.scene;
            animations = gltf.animations;
            robot.position.set(0, -20, 0);
            scene.add(robot);

            // Create an AnimationMixer and play the animations
            const mixer = new THREE.AnimationMixer(robot);
            mixer.clipAction(animations[0]).play();
            if (callback) callback(robot, mixer);
        },
        // called while loading is progressing
        function (xhr) {
            //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function (error) {
            console.log(error);
        }
    );
    return robot;
}

class Player {
    constructor(id) {
        this.id = id;
        this.model = new THREE.Object3D();//new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
        this.mixer = null;

        spawnRobot((robot, mixer) => {
            this.model = robot;
            this.mixer = mixer;
        });
        this.model.position.set(0, 20, 120);
        this.next = null;

    }

    destroy() {
        scene.remove(this.model);
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(id) {
        if (id !== socket.id) { //remove if playerlist should have own player
            const player = new Player(id);
            let current;
            if (this.head == null)
                this.head = player;
            else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = player;
            }
            this.size++;
        }
    }

    remove(id) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.id === id) {
                if (prev == null) {
                    // Node to be removed is the head
                    this.head = current.next;
                } else {
                    // Node to be removed is not the head
                    prev.next = current.next;
                }
                current.destroy();
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    find(id) {
        let current = this.head;
        while (current != null) {
            if (current.id === id) {
                return current;
            }
            current = current.next;
        }
        console.log("Player not found");
        return null;
    }

    copy(list) {
        let current = list.head;
        while (current != null) {
            this.add(current.id);
            current = current.next;
        }
    }

    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.id);
            current = current.next;
        }
    }
}


const playerList = new LinkedList();
const socket = io.connect('localhost:3000');

socket.on('playerList', (serverList) => {
    playerList.copy(serverList);
    //console.log(socket.id);
});

socket.on('newPlayer', (id) => {
    playerList.add(id);
    //console.log(playerList.size);
});

socket.on('update position', (pos, id) => {
    const player = playerList.find(id);
    player.model.position.set(pos.x, pos.y, pos.z);
});

socket.on('update rotation', (rot, id) => {
    const player = playerList.find(id);
    player.model.quaternion.set(rot.x, rot.y, rot.z, rot.w);
});

socket.on('removePlayer', (id) => {
    playerList.remove(id);
});


const cannonDebugger = new CannonDebugger(scene, world);
const stats = Stats();
document.body.appendChild(stats.dom);

/*
let playerMaterial = new CANNON.Material("playerMaterial");
let wallMaterial = new CANNON.Material("wallMaterial");
let groundMaterial = new CANNON.Material("groundMaterial");
groundMaterial.friction = 0.0;
let stairsMaterial = new CANNON.Material("stairsMaterial");
let playerGroundContact = new CANNON.ContactMaterial(
  playerMaterial,
  groundMaterial,
  {
    friction: 1,
    restitution: 0.01,
  }
);
let playerListtairsContact = new CANNON.ContactMaterial(
  playerMaterial,
  stairsMaterial,
  {
    friction: 0.5,
    restitution: 0.5,
  }
);
let playerWallContact = new CANNON.ContactMaterial(
  playerMaterial,
  wallMaterial,
  {
    friction: 0.5,
    restitution: 0.5,
  }
);
world.addContactMaterial(playerListtairsContact);
world.addContactMaterial(playerGroundContact);
world.addContactMaterial(playerWallContact);


let cameraBody = new CANNON.Body({
  mass: 1,
  shape: new CANNON.Sphere(2),
  position: new CANNON.Vec3(0, 20, 150),
  material: playerMaterial
});
//cameraBody.angularDamping = 1;
//cameraBody.linearDamping = 0.99;
world.addBody(cameraBody);
let raiser = new CANNON.Vec3(0, 12, 0);
*/
/*let planeMesh = createObject.newObject("Plane").threeMesh;
//let planeBody = createObject.newObject("Plane").cannonBody;
const texture = new THREE.TextureLoader().load("assets/stacked-stones.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(50, 50);
planeMesh.material = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
});
//planeBody.material = groundMaterial;
scene.add(planeMesh);
//world.addBody(planeBody);

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
        let rot = new THREE.Quaternion();
        rot.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
        object.quaternion.set(rot);
        object.position.y = 46;
        scale = 0.001;
        object.scale.set(scale, scale, scale);
        console.log(object);

        /*
        object.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0;
                child.material.side = 0;
                child.recieveShadow = true;
                child.castShadow = true;
                rot.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
                child.quaternion = rot;
                scene.add(child);

                /*let verts = child.geometry.attributes.position.array;
                for (let i = 0; i < verts.length; i++) {
                    verts[i] = verts[i] * scale*;
                }
                /*let indis = child.geometry.index.array;

                        let trimeshShape = new CANNON.Trimesh(verts, indis);
                        let trimeshBody = new CANNON.Body({ mass: 0 });
                        if (child.material.name == "Paint") {
                          //trimeshBody.material = stairsMaterial;
                        } else {
                          //trimeshBody.material = wallMaterial;
                        }
                        trimeshBody.collisionResponse = true;
                        trimeshBody.addShape(trimeshShape);

                        let rot = new CANNON.Quaternion();
                        rot.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
                        trimeshBody.quaternion = rot;

                        world.addBody(trimeshBody);*/
            //}

    /*},
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
                /*
                        let trimeshShape = new CANNON.Trimesh(verts, indis);
                        let trimeshBody = new CANNON.Body({ mass: 0 });
                        if (child.material.name == "Paint") {
                          //trimeshBody.material = stairsMaterial;
                        } else {
                          //trimeshBody.material = wallMaterial;
                        }
                        trimeshBody.collisionResponse = true;
                        trimeshBody.addShape(trimeshShape);

                        let rot = new CANNON.Quaternion();
                        rot.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
                        trimeshBody.quaternion = rot;

                        world.addBody(trimeshBody);*/
/*            }
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
                /*
                        let trimeshShape = new CANNON.Trimesh(verts, indis);
                        let trimeshBody = new CANNON.Body({ mass: 0 });
                        if (child.material.name == "Paint") {
                          //trimeshBody.material = stairsMaterial;
                        } else {
                          //trimeshBody.material = wallMaterial;
                        }
                        trimeshBody.collisionResponse = true;
                        trimeshBody.addShape(trimeshShape);

                        let rot = new CANNON.Quaternion();
                        rot.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
                        trimeshBody.quaternion = rot;
                        trimeshBody.position = new CANNON.Vec3(150, 0, 0);
                        world.addBody(trimeshBody);*/
/*            }
        });
        //console.log(i);
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
                /*
                        let trimeshShape = new CANNON.Trimesh(verts, indis);
                        let trimeshBody = new CANNON.Body({ mass: 0 });
                        if (i < 1295) {
                          //trimeshBody.material = wallMaterial;
                        } else {
                          //trimeshBody.material = groundMaterial;
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
                        }*/
/*            }
        });
        //console.log(i);
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
let q = new THREE.Quaternion(0, 0, 0, 1);
let qx = new THREE.Quaternion();
let qz = new THREE.Quaternion();
document.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement === document.body) {
        const xh = e.movementX * 0.001;
        const yh = e.movementY * 0.001;

        phi_ += -xh;
        theta_ = clamp(theta_ + -yh, -Math.PI / 2, Math.PI / 2);

        qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi_);
        qz = new THREE.Quaternion();
        qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta_);

        q = qx.multiply(qz);

        //cameraBody.quaternion.copy(qx);
        camera.quaternion.copy(q);
        socket.emit('player rotation', {x: q.x, y: q.y, z: q.z, w: q.w});
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
    moving,
    canJump = false;
document.addEventListener("keydown", (e) => {
    if (document.pointerLockElement === document.body) {
        if (e.key === "w" || e.key === "ArrowUp") forwardBool = true;
        if (e.key === "s" || e.key === "ArrowDown") backwardBool = true;
        if (e.key === "a" || e.key === "ArrowLeft") leftBool = true;
        if (e.key === "d" || e.key === "ArrowRight") rightBool = true;
        if (e.key === " ") upBool = true;
        if (e.key === "Shift") downBool = true;
        //if (e.key == "f") {
        /*flyingBool = !flyingBool;
        if (flyingBool) {
          cameraBody.mass = 0;
          cameraBody.collisionFilterGroup = 0;
          //world.gravity.set(0, 0, 0);
          cameraBody.velocity = new CANNON.Vec3(0, 0, 0);
        } else {
          cameraBody.mass = 1;
          cameraBody.collisionFilterGroup = 1;
          //world.gravity.set(0, 3000, 0);
          //cameraBody.position.y = 1.5;
        }*/
        //}
/*    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") forwardBool = false;
    if (e.key === "s" || e.key === "ArrowDown") backwardBool = false;
    if (e.key === "a" || e.key === "ArrowLeft") leftBool = false;
    if (e.key === "d" || e.key === "ArrowRight") rightBool = false;
    if (e.key === " ") upBool = false;
    if (e.key === "Shift") downBool = false;
});

const rayStart = camera.position.add(0, 5, 0);
//var rayEnd = cameraBody.position.add(2,0,0);
const direction = new THREE.Vector3(0, -1, 0);

const rayCaster = new THREE.Raycaster(rayStart, direction, 0, 5);


/*
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
});*/
/*
function move(delta) {
    let speed = 100000 * delta;
    let movement;

    //if (!flyingBool) {
    /*if (forwardBool) {
      /*
      movement = new CANNON.Vec3(-speed, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);

      movement = new THREE.Vec3(0, 0, -1);
      movement = applyQuaternion(movement, qx);
      camera.position.add(movement);
      //console.log(cameraBody);
      cameraBody.applyTorque(movement);
      moving = true;
    }
    if (backwardBool) {
      /*
      movement = new CANNON.Vec3(speed, 0, 0);
      movement = applyQuaternion(movement, qx);
      cameraBody.velocity = cameraBody.velocity.vadd(movement);
      //cameraBody.applyTorque(movement);

      movement = new CANNON.Vec3(0, 0, 1);
      movement = applyQuaternion(movement, qx);
      cameraBody.position = cameraBody.position.vadd(movement);
      moving = true;
    }
    if (leftBool) {
      movement = new CANNON.Vec3(0, 0, speed);
      movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.applyTorque(movement);
      moving = true;
    }
    if (rightBool) {
      movement = new CANNON.Vec3(0, 0, -speed);
      movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.applyTorque(movement);
      moving = true;
    }
    if (upBool && canJump) {
      canJump = false;
      movement = new CANNON.Vec3(0, 5000, 0);
      //movement = applyQuaternion(movement, qx);
      //cameraBody.velocity = cameraBody.velocity.vadd(movement);
      cameraBody.linearDamping = 0.49;
      cameraBody.applyForce(movement);
      moving = true;
    }
  } else {*/
/*    if (forwardBool) {
        movement = new THREE.Vector3(0, 0, -1);
        movement = applyQuaternion(movement, qx);
        movement.y = 0;
        //console.log(qx);  
        camera.position.add(movement);
        moving = true;
    }
    if (backwardBool) {
        movement = new THREE.Vector3(0, 0, 1);
        movement = applyQuaternion(movement, qx);
        movement.y = 0;
        camera.position.add(movement);
        moving = true;
    }
    if (leftBool) {
        movement = new THREE.Vector3(-1, 0, 0);
        movement = applyQuaternion(movement, qx);
        movement.y = 0;
        camera.position.add(movement);
        moving = true;
    }
    if (rightBool) {
        movement = new THREE.Vector3(1, 0, 0);
        movement = applyQuaternion(movement, qx);
        movement.y = 0;
        camera.position.add(movement);
        moving = true;
    }

    if (upBool) {
        movement = new THREE.Vector3(0, 1, 0);
        movement = applyQuaternion(movement, qx);
        camera.position.add(movement);
        moving = true;
    }
    if (downBool) {
        movement = new THREE.Vector3(0, -1, 0);
        movement = applyQuaternion(movement, qx);
        camera.position.add(movement);
        moving = true;
    }
    //}
    if (moving) {
        socket.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
    }
    moving = false;
    /*if (cameraBody.velocity.length() > speed) {
      cameraBody.velocity.normalize();
      cameraBody.velocity.scale(speed, cameraBody.velocity);
    }*/
/*}

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

camera.position.set(0, 20, 120);

const clock = new THREE.Clock();
let delta;
animate();

function animate() {
    //console.log(camera);
    //loops the animate function
    requestAnimationFrame(animate);

    delta = clock.getDelta();

    if (rayCaster.intersectObject(planeMesh).length > 0) {
        var distance = rayCaster.intersectObject(planeMesh)[0].distance;
        camera.position.y += distance;
        console.log(distance);

    }
    //console.log(delta);
    // Step the physics world
    //world.step(delta);

    // Move the camera
    move(delta);
    //camera.position.copy(cameraBody.position);

    //cannonDebugger.update();
    /*
    let current = playerList.head;
    while (current) {
      if (current.mixer) {
        current.mixer.update(delta);
      }
      current = current.next;
    }*/
    // Render three.js
 /*   renderer.render(scene, camera);

    // Render the effect composer (post processing)
    //composer.render();
    //stats.update();
}*/
