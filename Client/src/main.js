import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import nipplejs from "nipplejs";
import {io} from "socket.io-client";

import {camera, scene, renderer, composer} from "./setup.js";
import {applyQuaternion, clamp, getYawRotation, getPitchRotation} from "./utils.js";
import {setObjectCells, getObjectsInCell} from "./spatiParti.js";
import * as constant from "./constants.js";
import * as loaders from "./loaders.js";
import {socketFunctions, client} from "./socket.js";


class Player {
    constructor(id) {
        this.id = id;
        this.model = wholeRobot[0].clone(true);
        this.modelHead = wholeRobot[1].clone(true);//this.model.getObjectByName("Head");
        this.mixer = new THREE.AnimationMixer(this.model);
        //this.mixer.clipAction(animations[2]).play();
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

//// NETWORKING #####################################################################################

//const client = io.connect('localhost:3000');

let playerList = new LinkedList();
let grid = {};
let wholeRobot = [];
let animations;
loaders.loadModels(client, grid, wholeRobot);
let ready = false;

socketFunctions(client, playerList, ready);

/*
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
*/

let check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
let mobile = check;

// POINTER LOCK ##########################################################################

const instructions = document.getElementById("instructions");
if(!mobile) {
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

/*
var joystick = nipplejs.create({
    zone: document.getElementById('joystick'),
    mode: 'static',
    position: { left: '15%', top: '70%' },
    color: 'green',
    size: 200
});*/

//check if mobile

let phi = 0, theta = 0;
let q = new THREE.Quaternion(), qx = new THREE.Quaternion(), qz = new THREE.Quaternion();
q.set(0, 0, 0, 1);
let previousTouch;

document.getElementById('right').addEventListener("touchstart", (e) => {
    // Clear any previous touch to start fresh
    previousTouch = e.touches[0];
});

document.getElementById('right').addEventListener("touchmove", (e) => {
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




let forwardBool, backwardBool, leftBool, rightBool, upBool, moving = false;

let mobileMovement = new THREE.Vector3(0,0,0);
let inputAmount = 0;
if(mobile) {

    let joystickL = nipplejs.create({
        zone: document.getElementById('joystick'),
        mode: 'static',
        position: { left: '10%', top: '80%' },
        restJoystick: true,
    });

    joystickL[0].on('start', (evt, data) => {
        inputAmount++;
    })
    joystickL[0].on('move', (evt, data) => {
        let xDir = data.vector.x;
        let zDir = -data.vector.y;
        let dir = new THREE.Vector3(xDir*0.1, 0, zDir*0.1);
        //camera.position.z += 0.005;
        mobileMovement = applyQuaternion(dir, qx);
        moving = true;
        //camera.position.add(movement);
    })

    joystickL[0].on('end', (evt, data) => {
        inputAmount--;
        mobileMovement.set(0,0,0);
    })
}

document.addEventListener("keydown", (e) => {
    if (document.pointerLockElement === document.body) {
        if (e.key === "w" || e.key === "ArrowUp") forwardBool = true;
        if (e.key === "s" || e.key === "ArrowDown") backwardBool = true;
        if (e.key === "a" || e.key === "ArrowLeft") leftBool = true;
        if (e.key === "d" || e.key === "ArrowRight") rightBool = true;
        if (e.key === " ") upBool = true;

    }
});

document.addEventListener("keyup", (e) => {

    if (e.key === "w" || e.key === "ArrowUp") forwardBool = false;
    if (e.key === "s" || e.key === "ArrowDown") backwardBool = false;
    if (e.key === "a" || e.key === "ArrowLeft") leftBool = false;
    if (e.key === "d" || e.key === "ArrowRight") rightBool = false;
    if (e.key === " ") upBool = false;
});

function move(delta) {
    if (mobile) {
        camera.position.add(mobileMovement);
    }else{
        let movement = new THREE.Vector3(0, 0, 0);
        let speed = 5 * delta;
        inputAmount = 0;

        let forward = new THREE.Vector3(0,0,0), backward = new THREE.Vector3(0,0,0), left = new THREE.Vector3(0,0,0), right = new THREE.Vector3(0,0,0), up = new THREE.Vector3(0,0,0), down = new THREE.Vector3(0,0,0);

        if (forwardBool) {
            forward.set(0,0,-speed);// = new THREE.Vector3(0, 0, -speed);
            forward = applyQuaternion(forward, qx);
            forward.y = 0;
            moving = true;
            inputAmount++;
        }
        if (backwardBool) {
            backward.set(0, 0, speed);
            backward = applyQuaternion(backward, qx);
            backward.y = 0;
            moving = true;
            inputAmount++;
        }
        if (leftBool) {
            left.set(-speed, 0, 0);
            left = applyQuaternion(left, qx);
            left.y = 0;
            moving = true;
            inputAmount++;
        }
        if (rightBool) {
            right.set(speed, 0, 0);
            right = applyQuaternion(right, qx);
            right.y = 0;
            moving = true;
            inputAmount++;
        }
        if (upBool && !isJumping) {
            isJumping = true;
            jumpHeight = 0.05;
            moving = true;
            client.emit('player jump');
        }
        if(inputAmount > 0) {
            let totDir = forward.add(backward.add(left.add(right)));
            movement = totDir.divideScalar(Math.sqrt(inputAmount));
            camera.position.add(movement);
        }
    }
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

    //runAnimations();
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