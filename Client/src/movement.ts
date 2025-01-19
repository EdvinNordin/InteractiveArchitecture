import * as THREE from "three";
import { camera, mobile } from "./setup"
import { floorGrid, wallGrid, getObjectsInCell } from "./spatiParti";
import { applyQuaternion, clamp } from "./utils"
import { client, ready } from "./socket";
import * as constant from "./constants";
import { Socket } from "socket.io-client";
import nipplejs from "nipplejs";
import screenfull from 'screenfull';

let isJumping = false;
let jumpHeight = 0;


// movement
let movementBool: [boolean, boolean, boolean, boolean, boolean] = [false, false, false, false, false];
let movementVector: [THREE.Vector3, THREE.Vector3, THREE.Vector3, THREE.Vector3] = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
let mobileMove: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

// rotation
let phi: number = 0;
let theta: number = 0;

let quat: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
let quatX: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);
let quatZ: THREE.Quaternion = new THREE.Quaternion(0, 0, 0, 1);


let rotationTouchId: number | null = null;
let movementTouchId: number | null = null;

// mobile
let previousTouch: Touch | null;
let jumpPressed: boolean = false;


export function PCMovement(delta: number) {
    let speed = 5 * delta;
    let inputAmount = 0;
    let movement = new THREE.Vector3(0, 0, 0);

    for (let i = 0; i < 4; i++) {
        movementVector[i].set(0, 0, 0);

        if (movementBool[i]) {
            movementVector[i].set(constant.movementDir[i].x * speed, constant.movementDir[i].y * speed, constant.movementDir[i].z * speed)
            movementVector[i] = applyQuaternion(movementVector[i], quatX)
            movementVector[i].y = 0;
            inputAmount++;
        }
    }
    if (movementBool[4] && !isJumping) {
        isJumping = true;
        jumpHeight = 0.05;
        client.emit('player jump', camera.position);
    }

    if (inputAmount > 0) {
        let totDir = new THREE.Vector3(0, 0, 0);
        for (let i = 0; i < 4; i++) {
            totDir.add(movementVector[i].clone());
        }
        movement = totDir.divideScalar(Math.sqrt(inputAmount));
    }

    let wallHit = collision(delta, movement);
    if (!wallHit) {
        camera.position.add(movement);
        client.emit('player position', { x: camera.position.x, y: camera.position.y, z: camera.position.z });
    }
}

export function mobileMovement(delta: number) {
    if (jumpPressed && !isJumping) {
        isJumping = true;
        jumpHeight = 0.05;
        client.emit('player jump', camera.position);
    }


    let wallHit = collision(delta, mobileMove);
    if (!wallHit) {
        camera.position.add(mobileMove);
        client.emit('player position', { x: camera.position.x, y: camera.position.y, z: camera.position.z });
    }
    jumpPressed = false;
}

function collision(delta: number, moveDir: THREE.Vector3) {
    let currentCell = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);

    // FLOOR COLLISION DETECTION
    let downRay = new THREE.Raycaster(camera.position, new THREE.Vector3(0, -1, 0), 0, 5);
    downRay.layers.set(0);

    let distanceToFloor = 1000
    let closestFloorInfo = findClosestObject(currentCell, floorGrid, downRay)
    distanceToFloor = typeof closestFloorInfo[0] === 'number' ? closestFloorInfo[0] : 1000;
    let closestFloor = closestFloorInfo[1]

    // JUMPING
    let feetToFloorDistance = distanceToFloor - constant.modelHeight;
    if (isJumping) {

        jumpHeight -= delta * 0.15;
        camera.position.y += jumpHeight;
        if (feetToFloorDistance + jumpHeight < 0.01) {
            isJumping = false;
            jumpHeight = 0;
        }
    }
    else if (closestFloor) {
        if ((constant.modelHeight - distanceToFloor) > 0) {
            camera.position.y += (constant.modelHeight - distanceToFloor);
        } else {
            camera.position.y -= (distanceToFloor - constant.modelHeight);
        }
    }
    else {
        isJumping = true;
    }


    // WALL COLLISION DETECTION
    let forwardRay = new THREE.Raycaster(camera.position, moveDir, 0, 5);
    forwardRay.layers.set(1);

    let closestWallInfo = findClosestObject(currentCell, wallGrid, forwardRay)
    let forwardDistance = closestWallInfo[0] as number;
    let closestWall = closestWallInfo[1];

    let wallHit = false;
    if (closestWall && typeof forwardDistance === 'number' && forwardDistance < 0.2) wallHit = true;

    return wallHit;
}


function findClosestObject(currentCell: THREE.Vector3, grid: { [key: string]: THREE.Object3D[] }, ray: THREE.Raycaster) {
    let closestDistance = 1000;
    let closestObject;

    let cellObjects = getObjectsInCell(currentCell, grid);
    if (cellObjects.length > 0) {

        let hitObjects = ray.intersectObjects(cellObjects);
        if (hitObjects.length > 0) {
            //find the lowest distance object
            for (let i = 0; i < cellObjects.length; i++) {
                if (hitObjects[i] && hitObjects[i].distance < closestDistance && hitObjects[i] !== closestObject) {
                    closestObject = hitObjects[i];
                    closestDistance = closestObject.distance;
                }
            }
        }
    }
    return [closestDistance, closestObject];
}


// EVENT LISTENERS ############################################################################################################

if (!mobile) {
    // ROTATION
    document.addEventListener("mousemove", (e) => {
        if (document.pointerLockElement === document.body) {

            const xh = e.movementX * 0.001;
            const yh = e.movementY * 0.001;

            phi -= xh;
            theta = clamp(theta - yh, -Math.PI / 2, Math.PI / 2);

            quatZ = new THREE.Quaternion();
            quatX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
            quatZ.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

            quat = quatX.multiply(quatZ);

            camera.quaternion.copy(quat);

            if (ready) {
                client.emit('player rotation', { x: quat.x, y: quat.y, z: quat.z, w: quat.w });
            }
        }
    });
    // MOVEMENT
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
}

else {
    // TOUCH ROTATION AND MOVEMENT
    const rightElement = document.getElementById('right');
    const joystickZone = document.getElementById('joystick');

    if (rightElement && joystickZone) {
        rightElement.addEventListener("touchstart", (e) => {
            if (rotationTouchId === null) {
                rotationTouchId = e.touches[0].identifier;
                previousTouch = e.touches[0];
            }
        });

        rightElement.addEventListener("touchmove", (e) => {
            const rotationTouch = Array.from(e.touches).find(t => t.identifier === rotationTouchId);
            if (rotationTouch && previousTouch) {
                const xAmount = rotationTouch.pageX - previousTouch.pageX;
                const yAmount = rotationTouch.pageY - previousTouch.pageY;

                const xh = xAmount * 0.005;
                const yh = yAmount * 0.005;

                phi += -xh;
                theta = clamp(theta - yh, -Math.PI / 2, Math.PI / 2);

                quatZ = new THREE.Quaternion();
                quatX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), phi);
                quatZ.setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta);

                quat = quatX.multiply(quatZ);

                camera.quaternion.copy(quat);
                if (ready) {
                    client.emit('player rotation', { x: quat.x, y: quat.y, z: quat.z, w: quat.w });
                }
                previousTouch = rotationTouch;
            }
        });

        rightElement.addEventListener("touchend", (e) => {
            if (rotationTouchId !== null && !Array.from(e.touches).some(t => t.identifier === rotationTouchId)) {
                rotationTouchId = null;
                previousTouch = null;
            }
        });

        let joystickL: nipplejs.JoystickManager = nipplejs.create({
            zone: joystickZone,
            mode: 'static',
            position: { left: '10%', top: '80%' },
            restJoystick: true,
        });
        if (joystickL) {
            joystickL.get(0).on('start', (evt, data) => {
                if (movementTouchId === null) {
                    movementTouchId = data.identifier;
                }
            });

            joystickL.get(0).on('move', (evt, data) => {
                let xDir = data.vector.x;
                let zDir = -data.vector.y;
                let dir: THREE.Vector3 = new THREE.Vector3(xDir * 0.05, 0, zDir * 0.05);
                mobileMove = applyQuaternion(dir, quatX);
                console.log(mobileMove)
            });

            joystickL.get(0).on('end', (evt, data) => {
                mobileMove.set(0, 0, 0);
                movementTouchId = null;
            });
        }

        // JUMP BUTTON
        const jumpButton = document.getElementById('jumpButton');
        if (jumpButton) {
            jumpButton.addEventListener("touchstart", (e) => {
                jumpPressed = true;
            });
        }

        // FULLSCREEN
        const fullscreenButton = document.getElementById('fullscreenButton');
        if (fullscreenButton) {
            fullscreenButton.addEventListener('click', () => {
                if (screenfull.isEnabled) {
                    screenfull.toggle();
                }
            });
        }
    }
}