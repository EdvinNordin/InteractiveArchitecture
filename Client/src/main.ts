import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { camera, scene, renderer, mobile } from "./setup";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels } from "./loaders";
import { PCMovement, mobileMovement } from "./movement";
import { updateMixers } from "./animations";
import { ready } from "./network";
import { combat } from "./combat";

loadModels(floorGrid, wallGrid);

// const stats: Stats = new Stats();
//document.body.appendChild(stats.dom);

const clock = new THREE.Clock();
let delta;

// ANIMATION LOOP ######################################################################
animate();
function animate() {
  requestAnimationFrame(animate);

  delta = clock.getDelta();

  updatePlayers(delta, ready);

  renderer.render(scene, camera);

  //composer.render();
  //stats.update();
}

function updatePlayers(delta: number, ready: boolean) {
  if (ready) {
    if (mobile) mobileMovement(delta);
    else PCMovement(delta);

    combat(delta);

    updateMixers(delta);
  }
}
