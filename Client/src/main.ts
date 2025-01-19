import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { camera, scene, renderer, mobile } from "./setup";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels } from "./loaders";
import { PCMovement, mobileMovement } from "./movement";

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

    renderer.render(scene, camera);

    //composer.render();
    stats.update();
}
