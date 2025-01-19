import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import nipplejs from "nipplejs";
import screenfull from 'screenfull';

import { camera, scene, renderer, mobile } from "./setup";
import { applyQuaternion, clamp } from "./utils";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels } from "./loaders";
import { PCMovement, mobileMovement } from "./movement";
import { client } from "./socket";

let ready = false;
//socketFunctions(ready);
loadModels(floorGrid, wallGrid);


// MOVEMENT ######################################################################

let movementBool: [boolean, boolean, boolean, boolean, boolean] = [false, false, false, false, false];
let movementVector: [THREE.Vector3, THREE.Vector3, THREE.Vector3, THREE.Vector3] = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
let mobileMove: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
let jumpPressed: boolean = false;


let phi = 0, theta = 0;
let q = new THREE.Quaternion(), qx = new THREE.Quaternion(), qz = new THREE.Quaternion();
q.set(0, 0, 0, 1);
let previousTouch: Touch;


// ANIMATION LOOP ###############################################################

// stats
const stats: Stats = new Stats();
document.body.appendChild(stats.dom);

// delta
const clock = new THREE.Clock();
let delta;

// render new frame every step
animate();
function animate() {
    requestAnimationFrame(animate);

    delta = clock.getDelta();

    if (mobile) {
        mobileMovement(delta, client, mobileMove, jumpPressed);
        jumpPressed = false;
    }
    else PCMovement(delta, client, movementBool, movementVector, qx);

    renderer.render(scene, camera);

    //composer.render();
    stats.update();
}

// EVENT LISTENERS ##################################################################################

if (!mobile) {
    // ROTATION
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
            client.emit('player rotation', { x: q.x, y: q.y, z: q.z, w: q.w });

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

    // TOUCH ROTATION
    const rightElement = document.getElementById('right');
    if (rightElement) {
        rightElement.addEventListener("touchstart", (e) => {
            previousTouch = e.touches[0];
        });
        rightElement.addEventListener("touchmove", (e) => {
            const touch = e.touches[0];
            if (previousTouch) {

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
                    client.emit('player rotation', { x: q.x, y: q.y, z: q.z, w: q.w });
                }
            }
            previousTouch = touch;
        })

        // JOYSTICK
        const joystickZone = document.getElementById('joystick');
        if (joystickZone) {
            let joystickL: nipplejs.JoystickManager = nipplejs.create({
                zone: joystickZone,
                mode: 'static',
                position: { left: '10%', top: '80%' },
                restJoystick: true,
            });

            if (joystickL) {
                joystickL.get(0).on('move', (evt, data) => {
                    let xDir = data.vector.x;
                    let zDir = -data.vector.y;
                    let dir = new THREE.Vector3(xDir * 0.05, 0, zDir * 0.05);
                    mobileMove = applyQuaternion(dir, qx);
                })

                joystickL.get(0).on('end', (evt, data) => {
                    mobileMove.set(0, 0, 0);
                })
            }
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