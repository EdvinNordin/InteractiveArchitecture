import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import nipplejs from "nipplejs";
import {io} from "socket.io-client";

import {camera, scene, renderer, composer} from "./setup.js";
import {applyQuaternion, clamp, getYawRotation, getPitchRotation} from "./utils.js";
import {setObjectCells, getObjectsInCell} from "./spatiParti.js";
import * as constant from "./constants.js";
import * as loaders from "./loaders.js";
//import movement from "./movement.js";
import screenfull from 'screenfull';
import { lerp } from "three/src/math/MathUtils.js";

class Player {
    constructor(id) {
        this.id = id;
        this.model = wholeRobot[0].clone(true);
        this.modelHead = this.model.getObjectByName("Head");
        /*this.mixer = wholeRobot[1];
        this.mixer.clipAction(animations[2]).play();*/
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
    }

    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.id);
            current = current.next;
        }
    }
}

let playerList = new LinkedList();
let floorGrid = {};
let wallGrid = {};
let wholeRobot = [];
let animations;
let ready = false;

const client = io.connect('https://interactivearchitecturebackend.onrender.com');
//const client = io.connect('localhost:3000');

loaders.loadModels(client, floorGrid, wallGrid, wholeRobot);

client.on('transfer list', (serverList) => {
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

    //player.model.quaternion.copy(getYawRotation(rot));
    //player.modelHead.quaternion.copy(getPitchRotation(rot));
})

client.on('update position', (pos, id) => {
    if(ready){
        const player = playerList.find(id);
        player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);

        /*if (player.mixer.clipAction(animations[2]).isRunning() && !player.mixer.clipAction(animations[3]).isRunning()) {
            player.mixer.clipAction(animations[2]).stop();
            player.mixer.clipAction(animations[10]).play();
        }*/
    }
});

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
        //player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);
        /*player.mixer.clipAction(animations[10]).stop();
        player.mixer.clipAction(animations[2]).stop();
        player.mixer.clipAction(animations[3]).play();*/
    }
})

client.on('removePlayer', (id) => {
    playerList.remove(id);
});


let check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
let mobile = check;

// MOVEMENT ######################################################################

let movementBool = [false, false, false, false, false];
let movementVector = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
let isJumping = false;
let jumpHeight = 0;
let mobileMovement = new THREE.Vector3(0, 0, 0);


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

    //runAnimations();
    // Render three.js
    renderer.render(scene, camera);

    //composer.render();
    stats.update();
}
function move(delta) {

    let wallHit = false;
    if (mobile && ready) {
        
        wallHit = floor(delta, mobileMovement);
        if (!wallHit) {
            camera.position.add(mobileMovement);
        }
        client.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
    }
    else{


        let inputActive = false;
        let moved = false;
        let movement = new THREE.Vector3(0, 0, 0);
        let speed = 5 * delta;
        let inputAmount = 0;
        
        for (let i = 0; i < 4; i++) {
            movementVector[i].set(0, 0, 0);
        }
        
        if (movementBool[0]) {
            movementVector[0].set(0,0,-speed);
            movementVector[0] = applyQuaternion(movementVector[0], qx);
            movementVector[0].y = 0;
            inputActive = true;
            inputAmount++;
        }
        if (movementBool[1]) {
            movementVector[1].set(0, 0, speed);
            movementVector[1] = applyQuaternion(movementVector[1], qx);
            movementVector[1].y = 0;
            inputActive = true;
            inputAmount++;
        }
        if (movementBool[2]) {
            movementVector[2].set(-speed, 0, 0);
            movementVector[2] = applyQuaternion(movementVector[2], qx);
            movementVector[2].y = 0;
            inputActive = true;
            inputAmount++;
        }
        if (movementBool[3]) {
            movementVector[3].set(speed, 0, 0);
            movementVector[3] = applyQuaternion(movementVector[3], qx);
            movementVector[3].y = 0;
            inputActive = true;
            inputAmount++;
        }
        if (movementBool[4] && !isJumping) {
            isJumping = true;
            jumpHeight = 0.05;
            inputActive = true;
            moved = true;
            client.emit('player jump', camera.position);
        }
        
        if(inputAmount > 0) {
            let totDir = new THREE.Vector3(0,0,0);
            for (let i = 0; i < 4; i++) {
                console.log(movementVector[i]);
                totDir.add(movementVector[i].clone());
            }
             //= movementVector[0].add(movementVector[1].add(movementVector[2].add(movementVector[3])));
            movement = totDir.divideScalar(Math.sqrt(inputAmount));
        }

        wallHit = floor(delta, movement);

        if (!wallHit) {
            camera.position.add(movement);
            moved = true;

            client.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
        }

        if (inputActive && ready && moved) {
            //client.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
        }
    }
}




function floor(delta, movement){
    const down = new THREE.Vector3(0, -1, 0);
    let downRay = new THREE.Raycaster(camera.position, down, 0, 5);
    downRay.layers.set(0);
    
    let forwardRay = new THREE.Raycaster(camera.position, movement, 0, 5);
    forwardRay.layers.set(1);

    forwardRay.set(camera.position, movement);
    let currentCell = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);

    let stepDistance = 1000;
    let closestFloor;

    let forwardDistance = 1000;
    let closestWall;


    let floorCellObjects = getObjectsInCell(currentCell, floorGrid, constant.cellSize);

    if (floorCellObjects.length > 0) {
        let floorHits = downRay.intersectObjects(floorCellObjects);

        if (floorHits.length > 0) {

            //find the lowest stepDistance object
            for (let i = 0; i < floorCellObjects.length; i++) {
                if (floorHits[i] && floorHits[i].distance < stepDistance && floorHits[i] !== closestFloor) {
                    closestFloor = floorHits[i];
                    stepDistance = closestFloor.distance;
                }
            }
        }
    
    }
    if(isJumping && (constant.modelHeight - stepDistance) > 0) {
        isJumping = false;
        jumpHeight = 0;
    }
    else if(isJumping){
        jumpHeight -= delta*0.15;
        camera.position.y += jumpHeight;
    }
    if(!isJumping){
        if(closestFloor) {
            if ((constant.modelHeight - stepDistance) > 0) {
                camera.position.y += (constant.modelHeight - stepDistance);
            } else {
                camera.position.y -= (stepDistance - constant.modelHeight);
            }
        }else {
            isJumping = true;
        }
    }


    let wallCellObjects = getObjectsInCell(currentCell, wallGrid, constant.cellSize);

    if (wallCellObjects.length > 0) {

        let forwardHits = forwardRay.intersectObjects(wallCellObjects);
        
        if (forwardHits.length > 0) {
    
            //find the lowest distance object
            for (let i = 0; i < wallCellObjects.length; i++) {
                if (forwardHits[i] && forwardHits[i].distance < forwardDistance && forwardHits[i] !== closestWall) {
                    closestWall = forwardHits[i];
                    forwardDistance = closestWall.distance;
                    
                }
            }
        }
    }

    let wallHit = false;
    if(closestWall && forwardDistance < 0.2) {
        wallHit = true;
    }else{
        wallHit = false;
    }

    return wallHit;
    
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

function c(x) {
    console.log(x);
}
// POINTER LOCK ##########################################################################


document.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement === document.body) {

        const xh = e.movementX * 0.001;
        const yh = e.movementY * 0.001;

        phi -= xh;
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

document.addEventListener("keydown", (e) => {
    if (document.pointerLockElement === document.body) {
        if (e.key === "w" || e.key === "ArrowUp") movementBool[0] = true;
        if (e.key === "s" || e.key === "ArrowDown") movementBool[1] = true;
        if (e.key === "a" || e.key === "ArrowLeft") movementBool[2] = true;
        if (e.key === "d" || e.key === "ArrowRight") movementBool[3] = true;
        if (e.key === " ") movementBool[4] = true;
    }
});

document.addEventListener("keyup", (e) => {

    if (e.key === "w" || e.key === "ArrowUp") movementBool[0] = false;
    if (e.key === "s" || e.key === "ArrowDown") movementBool[1] = false;
    if (e.key === "a" || e.key === "ArrowLeft") movementBool[2] = false;
    if (e.key === "d" || e.key === "ArrowRight") movementBool[3] = false;
    if (e.key === " ") movementBool[4] = false;
});

document.getElementById('fullscreenButton').addEventListener('click', () => {
    if (screenfull.isEnabled) {
        screenfull.toggle();
    }
});
const instructions = document.getElementById("instructions");
if(!mobile) {
    document.getElementById("jumpButton").style.display = "none";
    document.getElementById("fullscreenButton").style.display = "none";
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
}else{
        instructions.style.display = "none";
}

let phi = 0, theta = 0;
let q = new THREE.Quaternion(), qx = new THREE.Quaternion(), qz = new THREE.Quaternion();
q.set(0, 0, 0, 1);
let previousTouch;

document.getElementById('right').addEventListener("touchstart", (e) => {
    previousTouch = e.touches[0];
    console.log(e)
});

document.getElementById('jumpButton').addEventListener("touchstart", (e) => {
    if (!isJumping){
        isJumping = true;
        jumpHeight = 0.05;
        client.emit('player jump', camera.position);
    }
});


document.getElementById('right').addEventListener("touchmove", (e) => {

    console.log(e)
    const touch = e.touches[0];
    if(previousTouch) {

        // be aware that these only store the movement of the first touch in the touches array
        const xAmount = touch.pageX - previousTouch.pageX;
        const yAmount = touch.pageY - previousTouch.pageY;


        const xh = xAmount * 0.005;
        const yh = yAmount * 0.005;

        phi += -xh;
        theta = clamp(theta - yh, -Math.PI / 2, Math.PI / 2);

        qz = new THREE.Quaternion();
        qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
        qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

        q = qx.multiply(qz);

        camera.quaternion.copy(q);
        if (ready) {
            client.emit('player rotation', {x: q.x, y: q.y, z: q.z, w: q.w});
        }
    }

    previousTouch = touch;
})



if(mobile) {

    let joystickL = nipplejs.create({
        zone: document.getElementById('joystick'),
        mode: 'static',
        position: { left: '10%', top: '80%' },
        restJoystick: true,
    });

    joystickL[0].on('start', (evt, data) => {
        //inputAmount++;
    })
    joystickL[0].on('move', (evt, data) => {
        let xDir = data.vector.x;
        let zDir = -data.vector.y;
        let dir = new THREE.Vector3(xDir*0.05, 0, zDir*0.05);
        mobileMovement = applyQuaternion(dir, qx);
    })

    joystickL[0].on('end', (evt, data) => {
        //inputAmount--;
        mobileMovement.set(0,0,0);
    })
}