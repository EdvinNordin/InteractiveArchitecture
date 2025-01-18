import * as THREE from "three";



export default function movement(delta, camera, mobile, forwardBool, backwardBool, leftBool, rightBool, upBool, moving) {
    let hit = false;
    
    let movement = new THREE.Vector3(0, 0, 0);
    let speed = 5 * delta;
    let inputAmount = 0;

    let rayStart = new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z);
    const down = new THREE.Vector3(0, -1, 0);
    let downRay = new THREE.Raycaster(rayStart, down, 0, 5);
    downRay.layers.set(0);
    let forwardRay = new THREE.Raycaster(rayStart, movement, 0, 5);
    forwardRay.layers.set(1);


    let moved = false;
    if (mobile && ready) {
        //camera.position.add(mobileMovement);
        forwardRay.set(camera.position, mobileMovement);
        floor(downRay, forwardRay);
        if (!hit) {
            camera.position.add(mobileMovement);
            moved = true;
        }
        //client.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
    }
    else{

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
            moved = true;
            client.emit('player jump', camera.position);
        }
        if(inputAmount > 0) {
            let totDir = forward.add(backward.add(left.add(right)));
            movement = totDir.divideScalar(Math.sqrt(inputAmount));
            //downRay.set(new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), down);
            
            
        }
        forwardRay.set(camera.position, movement);
        intersection(downRay, forwardRay, delta);
        if (!hit) {
            camera.position.add(movement);
            moved = true;
        }
    }

    if (moving && ready && moved) {
        client.emit('player position', {x: camera.position.x, y: camera.position.y, z: camera.position.z});
    }
    if(!isJumping && !mobile) moving = false;
}


function intersection(downRay, forwardRay, delta){
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

    if(closestWall && forwardDistance < 0.2) {
        hit = true;
    }else{
        hit = false;
    }
}
