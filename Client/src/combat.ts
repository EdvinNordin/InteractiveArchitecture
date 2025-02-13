import * as THREE from "three";
import { client, playerList, currentPlayer } from "./socket";
import { scene } from "./setup";
import { weapon } from "./loaders";

document.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement === document.body) {
    playerList.print();
    if (
      currentPlayer.model.animations &&
      currentPlayer.mixer
        .clipAction(currentPlayer.model.animations[0])
        .isRunning() === false
    ) {
      client.emit("attacking", currentPlayer.id);
      const action = currentPlayer.mixer.clipAction(
        currentPlayer.model.animations[0]
      );
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }
  }
});

export function hit() {
  const weaponBox = new THREE.Box3();
  weaponBox.setFromObject(currentPlayer.weapon);
  // const weaponBoxHelper = new THREE.Box3Helper(weaponBox, 0xff0000);
  //scene.add(weaponBoxHelper);
  let current: any = playerList.head;
  while (current != null) {
    if (current.id === currentPlayer.id || !current.targetable) {
      current = current.next;
    } else {
      //doesnt get here
      //console.log(current.model.position);
      const enemyBox = new THREE.Box3();
      enemyBox.setFromObject(current.model);
      // const enemyBoxHelper = new THREE.Box3Helper(enemyBox, 0xffff00);
      //scene.add(enemyBoxHelper);
      if (weaponBox.intersectsBox(enemyBox)) {
        client.emit("check hit", currentPlayer.id, current.id);
        current.targetable = false;
        break;
      } else {
        current = current.next;
      }
    }
  }
}
