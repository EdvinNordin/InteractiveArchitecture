import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { camera, scene, renderer, mobile } from "./setup";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels } from "./loaders";
import { PCMovement, mobileMovement } from "./movement";
import { mixerList, playerListSize } from "./socket";

loadModels(floorGrid, wallGrid);

// stats
const stats: Stats = new Stats();
document.body.appendChild(stats.dom);

// delta
const clock = new THREE.Clock();
let delta;

// ANIMATION LOOP ######################################################################
animate();
function animate() {
    requestAnimationFrame(animate);

    delta = clock.getDelta();

    if (mobile) mobileMovement(delta);
    else PCMovement(delta);

    updateMixers(delta);

    renderer.render(scene, camera);

    //composer.render();
    stats.update();
}

function updateMixers(delta: number) {

    for (let i = 0; i < playerListSize; i++) {
        if (mixerList[i]) mixerList[i].update(delta);
    }
}