import * as THREE from "three";
import { client, playerList, currentPlayer } from "./socket";

document.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement === document.body) {
    if (
      currentPlayer.model.animations &&
      !currentPlayer.mixer
        .clipAction(currentPlayer.model.animations[2])
        .isRunning()
    ) {
      client.emit("attacking", currentPlayer.id);
      const action = currentPlayer.mixer.clipAction(
        currentPlayer.model.animations[2]
      );
      currentPlayer.mixer.stopAllAction();
      action.setLoop(THREE.LoopOnce, 1);
      action.play();
    }
  }
});

export function hit() {
  const weaponBox = new THREE.Box3();
  weaponBox.setFromObject(currentPlayer.weapon);
  let current: any = playerList.head;
  while (current != null) {
    if (current.id === currentPlayer.id || !current.targetable) {
      current = current.next;
    } else {
      const enemyBox = new THREE.Box3();
      enemyBox.setFromObject(current.model);
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
