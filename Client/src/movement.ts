import * as THREE from "three";
import { camera } from "./setup.js"
import { floorGrid, wallGrid, getObjectsInCell } from "./spatiParti.js";
import { applyQuaternion } from "./utils.js"
import * as constant from "./constants.js";
import { Socket } from "socket.io-client";

let isJumping = false;
let jumpHeight = 0;

export function PCMovement(delta: number, client: Socket<any>, movementBool: [boolean, boolean, boolean, boolean, boolean], movementVector: [THREE.Vector3, THREE.Vector3, THREE.Vector3, THREE.Vector3], qx: THREE.Quaternion) {
    let speed = 5 * delta;
    let inputAmount = 0;
    let movement = new THREE.Vector3(0, 0, 0);

    for (let i = 0; i < 4; i++) {
        movementVector[i].set(0, 0, 0);

        if (movementBool[i]) {
            movementVector[i].set(constant.movementDir[i].x * speed, constant.movementDir[i].y * speed, constant.movementDir[i].z * speed)
            movementVector[i] = applyQuaternion(movementVector[i], qx)
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

export function mobileMovement(delta: number, client: Socket<any>, movement: THREE.Vector3, jumpPressed: boolean) {
    if (jumpPressed && !isJumping) {
        isJumping = true;
        jumpHeight = 0.05;
        client.emit('player jump', camera.position);
    }


    let wallHit = collision(delta, movement);
    if (!wallHit) {
        camera.position.add(movement);
        client.emit('player position', { x: camera.position.x, y: camera.position.y, z: camera.position.z });
    }
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
