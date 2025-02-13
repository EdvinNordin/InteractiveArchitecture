import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { camera, scene, renderer, mobile } from "./setup";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels, animations } from "./loaders";
import { PCMovement, mobileMovement, quat } from "./movement";
import { hit } from "./combat";
import { client, ready, currentPlayer, playerList } from "./socket";
import { clamp, getPitchRotation, getYawRotation } from "./utils";

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
        .clipAction(currentPlayer.model.animations[0])
        .isRunning()
    ) {
      hit();
    }
    if (!currentPlayer.targetable) iFrames(delta);
    //console.log(currentPlayer.targetable);
  }

  updateMixers(delta);

  renderer.render(scene, camera);

  //composer.render();
  //stats.update();
}

function updateMixers(delta: number) {
  let current: any = playerList.head;
  while (current != null) {
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
