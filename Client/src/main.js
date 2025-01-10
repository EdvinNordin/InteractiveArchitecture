import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import {io} from "socket.io-client";

import {camera, scene, renderer, composer} from "./setup.js";
import {applyQuaternion, clamp, getYawRotation, getPitchRotation} from "./utils.js";
import {setObjectCells, getObjectsInCell} from "./spatiParti.js";
import * as constant from "./constants.js";

import {Rhino3dmLoader} from "three/examples/jsm/loaders/3DMLoader.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";


class Player {
    constructor(id) {
        this.id = id;
        this.model = robot.clone(true);
        this.modelHead = this.model.getObjectByName("Head");
        this.mixer = new THREE.AnimationMixer(this.model);
        this.mixer.clipAction(animations[2]).play();
        this.next = null;
        scene.add(this.model);
    }

    destroy() {
        scene.remove(this.model);
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 1;
    }

    add(id) {
        if (id !== client.id) { //remove if playerlist should have own player
            const player = new Player(id);
            let current;
            if (this.head == null) {
                this.head = player;
            }
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
        //test
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
//// NETWORKING #####################################################################################
const client = io.connect('https://interactivearchitecturebackend.onrender.com');
//const client = io.connect('localhost:3000');


client.on('give list', (serverList) => {
    playerList.copy(serverList);
    ready = true;
});


client.on('new player', (id) => {
    playerList.add(id);

    client.emit('give state', camera.position, camera.quaternion, id);

});

client.on('set state', (pos, rot, id) => {
    let player = playerList.find(id);
    player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);

    //player.model.quaternion.set(rot);
    //player.modelHead.quaternion.set(rot);

    player.model.quaternion.copy(getYawRotation(rot));
    player.modelHead.quaternion.copy(getPitchRotation(rot));
})

client.on('update position', (pos, id) => {
    if(ready){
        const player = playerList.find(id);
        player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);

        if (player.mixer.clipAction(animations[2]).isRunning() && !player.mixer.clipAction(animations[3]).isRunning()) {
            player.mixer.clipAction(animations[2]).stop();
            player.mixer.clipAction(animations[10]).play();
        }
    }
});
//0.09381591630267129, -0.4675207063025343, 0.04998006037269623, 0.8775676364769904
client.on('update rotation', (rot, id) => {
    if(ready) {
        const player = playerList.find(id);
        let yaw = getYawRotation(rot);
        let pitch = getPitchRotation(rot);
        player.model.quaternion.set(yaw.x, yaw.y, yaw.z, yaw.w);
        player.modelHead.quaternion.set(pitch.x, pitch.y, pitch.z, pitch.w);
    }
});

client.on('update jump', (id) => {
    if(ready) {
        const player = playerList.find(id);
        player.mixer.clipAction(animations[10]).stop();
        player.mixer.clipAction(animations[2]).stop();
        player.mixer.clipAction(animations[3]).play();
    }
})


client.on('removePlayer', (id) => {
    playerList.remove(id);
});

// MODELS ##############################################################################
const GLTFloader = new GLTFLoader();
let animations;
let robot;
let ready = false;

GLTFloader.load("./robot.glb", function (gltf) {
    //console.log(gltf);
        robot = gltf.scene;
        animations = gltf.animations;
        robot.position.set(0, -10, 0);
        robot.scale.set(0.25, 0.25, 0.25);
        scene.add(robot);
        //console.log("robot loaded");
        client.emit('player ready');
    },
    function ( xhr) {
        if (xhr.loaded / xhr.total * 100 === 100) {
            //console.log("xhr");
        }
    }, // called when loading has errors
    function (error) {
        console.log(error);
    }
);

let grid = {};

let planeMesh = new THREE.Mesh();
planeMesh.geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
planeMesh.rotation.x = -Math.PI / 2;

const texture = new THREE.TextureLoader().load("/stacked-stones.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(50, 50);
planeMesh.material = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.FrontSide,
});

//planeMesh.position.set(1,1,1);
planeMesh.name="plane";
scene.add(planeMesh);
planeMesh.position.set(0, 0, 0);
/*
planeMesh.material = new THREE.MeshStandardMaterial({
})
planeMesh.material.color.setHex( 0xcccccc );
*/
//addToGrid(planeMesh, grid, constant.cellSize);
setObjectCells(planeMesh, grid, constant.cellSize);

const loader = new Rhino3dmLoader().setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/");

loader.load("/baken.3dm", function (object) {
        object.rotation.x = -Math.PI / 2; // rotate the model
        object.scale.set(constant.scale, constant.scale, constant.scale);
        object.position.z = -20;
        object.name = "baken";
        scene.add(object);
        let box = new THREE.Box3().setFromObject(object, false);
        let center = new THREE.Vector3();
        let boxSize = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(boxSize);
        object.position.y = 0;//-boxSize.y / 4;
        object.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0;
                child.material.side = 0;
                child.recieveShadow = true;
                child.castShadow = true;
                if (child.material.name === "Paint") {
                    child.name = "Stairs";
                    setObjectCells(child, grid, constant.cellSize);

                }else{
                    child.name = "Wall";
                    setObjectCells(child, grid, constant.cellSize);
                }

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

/*
loader.load("land.3dm", function (object) {
    //object.rotation.x = -Math.PI / 2; // rotate the model
    //object.position.y = 50;
    //object.scale.set(constant.scale, constant.scale, 0.008);
    let box = new THREE.Box3().setFromObject(object, false);
    let center = new THREE.Vector3();
    box.getCenter(center);
    let i = 1;
    object.traverse((child) => {
        if (child.isMesh) {
            child.material.metalness = 0;
            child.material.side = 0;
            child.recieveShadow = true;
            child.castShadow = true;
            child.material.wireframe = false;
            //console.log(child);
            if (i === 1) {
                child.rotation.x = -Math.PI / 2; // rotate the model
                child.position.y = 0;
                child.scale.set(constant.scale, constant.scale, constant.scale);
                scene.add(child);

            }
            i++;
        }
    });
}, function (progress) {
    //console.log((progress.loaded / progress.total) * 100 + "%");
}, function (error) {
    console.log(error);
});
*/

/*
loader.load(
    "net.3dm",
    function (object) {
        object.rotation.x = -Math.PI / 2; // rotate the model

        object.scale.set(constant.scale);
        object.position.x = 150;
        let i = 0;
        scene.add(object);

        object.traverse((child) => {
            if (child.isMesh) {
                i++;
                child.material.metalness = 0;
                child.material.side = 2;
                child.recieveShadow = true;
                child.castShadow = true;
            }
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
*/
/*
loader.load(
    "byReduced.3dm",
    function (object) {
        object.rotation.x = -Math.PI / 2; // rotate the model
        object.scale.set(constant.scale);
        object.position.x = -200;
        object.position.y = 0;
        scene.add(object);
        /*let box = new THREE.Box3().setFromObject(object, false);
        let center = new THREE.Vector3();
        box.getCenter(center);
        let i = 0;

        object.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0;
                child.material.side = 0;
                child.recieveShadow = true;
                child.castShadow = true;

            }
        });
        //console.log(i);
    },
    function (progress) {
        //console.log((progress.loaded / progress.total) * 100 + "%");
    },
    function (error) {
        console.log(error);
    }
);*/

// POINTER LOCK ##########################################################################

const instructions = document.getElementById("instructions");

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

// CAMERA ######################################################################

let phi = 0, theta = 0;
let q = new THREE.Quaternion(), qx = new THREE.Quaternion(), qz = new THREE.Quaternion();
q.set(0, 0, 0, 1);


document.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement === document.body) {
        const xh = e.movementX * 0.001;
        const yh = e.movementY * 0.001;

        phi += -xh;
        theta = clamp(theta - yh, -Math.PI / 2, Math.PI / 2);

        qz = new THREE.Quaternion();
        qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
        qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

        q = qx.multiply(qz);

        camera.quaternion.copy(q);
        if(ready){
            client.emit('player rotation', {x: q.x, y: q.y, z: q.z, w: q.w});
        }
    }
});

// MOVEMENT ######################################################################

let forwardBool, backwardBool, leftBool, rightBool, upBool, downBool, moving = false;

document.addEventListener("keydown", (e) => {
    if (document.pointerLockElement === document.body) {
        if (e.key === "w" || e.key === "ArrowUp") forwardBool = true;
        if (e.key === "s" || e.key === "ArrowDown") backwardBool = true;
        if (e.key === "a" || e.key === "ArrowLeft") leftBool = true;
        if (e.key === "d" || e.key === "ArrowRight") rightBool = true;
        if (e.key === " ") upBool = true;
        if (e.key === "Shift") console.log('%c ', 'font-size:400px; background:url(https://pics.me.me/codeit-google-until-youfinda-stackoverflow-answerwith-code-to-copy-paste-34126823.png) no-repeat;');//downBool = true;

    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") forwardBool = false;
    if (e.key === "s" || e.key === "ArrowDown") backwardBool = false;
    if (e.key === "a" || e.key === "ArrowLeft") leftBool = false;
    if (e.key === "d" || e.key === "ArrowRight") rightBool = false;
    if (e.key === " ") upBool = false;
    if (e.key === "Shift") downBool = false;
});

function move(delta) {
    let speed = 5 * delta;
    let movement;
    let inputAmount = 0;
    let forward = new THREE.Vector3(0,0,0), backward = new THREE.Vector3(0,0,0), left = new THREE.Vector3(0,0,0), right = new THREE.Vector3(0,0,0), up = new THREE.Vector3(0,0,0), down = new THREE.Vector3(0,0,0);

    if (forwardBool) {
        forward.set(0,0,-speed);// = new THREE.Vector3(0, 0, -speed);
        forward = applyQuaternion(forward, qx);
        forward.y = 0;
        //camera.position.add(movement);
        moving = true;
        inputAmount++;
    }
    if (backwardBool) {
        backward.set(0, 0, speed);
        backward = applyQuaternion(backward, qx);
        backward.y = 0;
        //camera.position.add(movement);
        moving = true;
        inputAmount++;
    }
    if (leftBool) {
        left.set(-speed, 0, 0);
        left = applyQuaternion(left, qx);
        left.y = 0;
        //camera.position.add(movement);
        moving = true;
        inputAmount++;
    }
    if (rightBool) {
        right.set(speed, 0, 0);
        right = applyQuaternion(right, qx);
        right.y = 0;
        //camera.position.add(movement);
        moving = true;
        inputAmount++;
    }
    if (upBool && !isJumping) {
        //up.set(0, speed, 0);
        //up = applyQuaternion(up, qx);
        isJumping = true;
        jumpHeight = 0.05;
        //camera.position.add(up);
        moving = true;
        client.emit('player jump');
    }
    if (downBool) {
        down.set(0, -speed, 0);
        //down = applyQuaternion(down, qx);
        //camera.position.add(down);
        //moving = true;
    }
    if(inputAmount > 0){
        let totDir = forward.add(backward.add(left.add(right)));
        movement = totDir.divideScalar(Math.sqrt(inputAmount)); //
        camera.position.add(movement);
    }

    //.log(rayCaster.ray.origin);
    floor(rayCaster);

    if (moving && ready) {
        client.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
    }
    if(!isJumping) moving = false;
}
let rayStart = (camera.position);//new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);

const direction = new THREE.Vector3(0, -1, 0);
let rayCaster = new THREE.Raycaster(rayStart, direction, 0, 5);

let isJumping = false;
let jumpHeight = 0;

// ANIMATION LOOP ###############################################################
const stats = Stats();
document.body.appendChild(stats.dom);
const clock = new THREE.Clock();
let delta;
animate();
function animate() {
    //loops the animate function
    requestAnimationFrame(animate);

    delta = clock.getDelta();
    move(delta);

    runAnimations();
    //console.log(getCellKey(camera.position, constant.cellSize));

    // Render three.js
    renderer.render(scene, camera);

    //composer.render();
    stats.update();
}

function floor(rayCaster){
    let currentCell = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
    let distance = 1000;
    let closestObject

    //Find the closest distance to ray
    for(let i = 0; i < 7; i++) {
        //if (i === 0)
        if (i === 1) currentCell.x += constant.cellSize;
        else if (i === 2) currentCell.x -= constant.cellSize;
        else if (i === 3) currentCell.y += constant.cellSize;
        else if (i === 4) currentCell.y -= constant.cellSize;
        else if (i === 5) currentCell.z += constant.cellSize;
        else if (i === 6) currentCell.z -= constant.cellSize;

        let cellObjects = getObjectsInCell(currentCell, grid, constant.cellSize);

        //if(i!==3) console.log(cellObjects.length);
        if (cellObjects.length > 0) {
            let rayCastHits = rayCaster.intersectObjects(cellObjects);

            if (rayCastHits.length > 0) {

                //find the lowest distance object
                for (let i = 0; i < cellObjects.length; i++) {
                    //if(rayCastHits[i].material.name === "Paint") console.log(rayCastHits[i].material.name);
                    if (rayCastHits[i] && rayCastHits[i].distance < distance && rayCastHits[i] !== closestObject) {
                        //console.log(rayCastHits[i].object.material.name)
                        closestObject = rayCastHits[i];
                        distance = closestObject.distance;
                        //test = i;
                    }
                }
            }
        }
    }
    if(isJumping && (constant.modelHeight - distance) > 0) {
        isJumping = false;
        jumpHeight = 0;
    }else if(isJumping){
        jumpHeight -= 0.001;
        camera.position.y += jumpHeight;
    }

    if(!isJumping){
        if(closestObject) {

            if ((constant.modelHeight - distance) > 0) {

                camera.position.y += (constant.modelHeight - distance);
            } else {
                camera.position.y -= (distance - constant.modelHeight);
            }

        }else {
            camera.position.y -= 0.07;
        }
    }
}

function runAnimations() {
    let current = playerList.head;
    while (current) {
        if (current.mixer) {
            current.mixer.update(delta);

            if (!current.sent && current.mixer.clipAction(animations[10]).isRunning() && !current.mixer.clipAction(animations[2]).isRunning()) {
                current.mixer.clipAction(animations[10]).stop();
                current.mixer.clipAction(animations[2]).play();
            }
        }
        current.sent = false;
        current = current.next;
    }
}


/*const nearbyWalkableObjects = getObjectsInNearbyCells(camera.position, grid, constant.cellSize); // Use grid
const intersections = rayCaster.intersectObjects(nearbyWalkableObjects, true); // Perform raycast
//console.log();
if (intersections.length > 0) {
    const distance = intersections[0].distance;

    if (distance < maxStepHeight) {
        camera.position.y += constant.modelHeight - distance;
    } else {
        camera.position.y = camera.position.y - (distance - constant.modelHeight);
    }
} else {
    camera.position.y -= 5; // Fallback for no intersection
}*/