import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { camera, scene, renderer, mobile } from "./setup";
import { floorGrid, wallGrid } from "./spatiParti";
import { loadModels } from "./loaders";
import { PCMovement, mobileMovement, quat, rolling } from "./movement";
import { hit } from "./combat";
import { animations } from "./loaders";
import { client, ready, currentPlayer, playerList } from "./socket";

loadModels(floorGrid, wallGrid);

// stats
// const stats: Stats = new Stats();
//document.body.appendChild(stats.dom);
// delta
let prevAnim: string = "idle";
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
    if (currentPlayer.mixer.clipAction(animations[2]).isRunning()) {
      hit();
    }
    if (!currentPlayer.targetable) iFrames(delta);
  }
}

function updateMixers(delta: number) {
  let current: any = playerList.head;
  while (current != null) {
    if (current === currentPlayer) {
      const runningActionName = current.mixer._actions.filter((action: any) =>
        action.isRunning()
      );

      if (runningActionName.length === 0) {
        currentPlayer.animation = "idle";
        client.emit("new animation", currentPlayer.animation);
        let action = currentPlayer.mixer.clipAction(getAnimationbyName("idle"));
        action.reset();
        action.play();
      } else if (currentPlayer.animation !== prevAnim) {
        client.emit("new animation", currentPlayer.animation);
        let action = currentPlayer.mixer.clipAction(
          getAnimationbyName(currentPlayer.animation)
        );
        currentPlayer.mixer.stopAllAction();
        action.reset();
        action.play();
        prevAnim = currentPlayer.animation;
      }
    } else {
      const runningActionName = current.mixer._actions.filter((action: any) =>
        action.isRunning()
      );
      if (runningActionName.length === 0) {
        current.animation = "idle";
        let action = current.mixer.clipAction(getAnimationbyName("idle"));
        action.reset();
        action.play();
      } else if (current.animation !== runningActionName[0]._clip.name) {
        let action = current.mixer.clipAction(
          getAnimationbyName(current.animation)
        );
        current.mixer.stopAllAction();
        action.reset();
        action.play();
      }
      if (current.animation === "attack") {
        isAttacking(current, rolling);
      }
    }
    current.mixer.update(delta);
    current = current.next;
  }
}

function iFrames(delta: number) {
  cd--;
  if (cd < 0) {
    console.log("i am now targetable");
    currentPlayer.targetable = true;
    client.emit("targetable", currentPlayer.id);
    cd = 300;
  }
}

const hp = document.getElementById("hpIMG") as HTMLElement;
if (hp) {
  hp.style.width = hp.style.width || "100%";
}

function isAttacking(attacker: any, rolling: boolean) {
  if (!rolling && currentPlayer.targetable) {
    const attackingWeaponBox = new THREE.Box3();
    attackingWeaponBox.setFromObject(attacker.weapon);

    const modelBox = new THREE.Box3();
    modelBox.setFromObject(currentPlayer.model);

    const weaponHelper = new THREE.Box3Helper(attackingWeaponBox, 0xff0000);
    //scene.add(weaponHelper);

    const modelHelper = new THREE.Box3Helper(modelBox, 0xffff00);
    //scene.add(modelHelper);

    if (modelBox.intersectsBox(attackingWeaponBox)) {
      currentPlayer.hp -= 10;
      currentPlayer.targetable = false;

      if (hp) {
        const currentWidth = parseFloat(hp.style.width);
        hp.style.width = `${currentPlayer.hp}%`;
      }
      console.log(currentPlayer.hp);
      if (currentPlayer.hp <= 0) {
        client.emit("player dead", currentPlayer.id);
        currentPlayer.destroy();
      }
    }
  }
}

function getAnimationbyName(name: string) {
  for (let i = 0; i < animations.length; i++) {
    if (animations[i].name === name) return animations[i];
  }
  console.log("animation not found");
  return null;
}
