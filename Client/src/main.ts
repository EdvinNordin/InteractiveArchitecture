import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { camera, scene, renderer, mobile } from "./setup";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels } from "./loaders";
import { PCMovement, mobileMovement, quat } from "./movement";
import { hit } from "./combat";
import { animations } from "./loaders";
import { client, ready, currentPlayer, playerList } from "./socket";

loadModels(floorGrid, wallGrid);

// stats
// const stats: Stats = new Stats();
//document.body.appendChild(stats.dom);

// delta
let cd: number = 200;
const clock = new THREE.Clock();
let delta;
// ANIMATION LOOP ######################################################################
animate();
function animate() {
  requestAnimationFrame(animate);

  delta = clock.getDelta();

  updatePlayers(delta, ready);

  updateMixers(delta);

  renderer.render(scene, camera);

  //composer.render();
  //stats.update();
}

function updatePlayers(delta: number, ready: boolean) {
  if (ready) {
    if (mobile) mobileMovement(delta);
    else {
      PCMovement(delta);

      camera.position.copy(
        new THREE.Vector3(0.5, 0, 2)
          .applyQuaternion(quat)
          .add(new THREE.Vector3(0, 1, 0).add(currentPlayer.model.position))
      );
    }
    if (
      currentPlayer.mixer
        .clipAction(currentPlayer.model.animations[2])
        .isRunning()
    ) {
      hit();
    }

    if (!currentPlayer.targetable) iFrames(delta);
  }
}

function updateMixers(delta: number) {
  let current: any = playerList.head;
  while (current != null) {
    let anyAnimationRunning = false;
    for (let i = 0; i < animations.length; i++) {
      if (current.mixer.clipAction(animations[i]).isRunning()) {
        anyAnimationRunning = true;
        break;
      }
    }
    if (!anyAnimationRunning) {
      current.mixer.clipAction(animations[0]).play();
    }
    current.mixer.update(delta);
    current = current.next;
  }
}

function iFrames(delta: number) {
  cd--;
  if (cd < 0) {
    currentPlayer.targetable = true;
    client.emit("targetable", currentPlayer.id);
    cd = 200;
  }
}
