import * as THREE from "three";
import { client, currentPlayer } from "./socket";
import { quat } from "./movement";
import { scene } from "./setup";
import { getYawRotation } from "./utils";
import { randInt } from "three/src/math/MathUtils";

const hp = document.getElementById("hpIMG") as HTMLElement;
document.getElementById("deadIMG")!.style.display = "none";
const weaponDamage = 20;
let cd: number = 200;
let respawnTimer: number = 500;

document.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement === document.body) {
    if (
      currentPlayer.animation !== "attack" &&
      currentPlayer.animation !== "roll"
    ) {
      currentPlayer.model.quaternion.copy(getYawRotation(quat));
      client.emit("player rotation", {
        x: currentPlayer.model.quaternion.x,
        y: currentPlayer.model.quaternion.y,
        z: currentPlayer.model.quaternion.z,
        w: currentPlayer.model.quaternion.w,
      });
      currentPlayer.animation = "attack";
    }
  }
});

export function getAttacked(attacker: any, rolling: boolean) {
  if (!rolling && currentPlayer.targetable) {
    const attackingWeaponBox = new THREE.Box3();
    attackingWeaponBox.setFromObject(attacker.weapon);

    const modelBox = new THREE.Box3();
    modelBox.setFromObject(currentPlayer.model);

    if (modelBox.intersectsBox(attackingWeaponBox)) {
      currentPlayer.hp -= weaponDamage;
      currentPlayer.targetable = false;

      if (hp) {
        if (currentPlayer.hp <= 0) {
          currentPlayer.animation = "death";
          currentPlayer.hp = 0;
          document.getElementById("deadIMG")!.style.display = "";
          client.emit("player dead", currentPlayer.id);
        } else {
          currentPlayer.animation = "hit";
        }
        hp.style.width = `${currentPlayer.hp}%`;
      }
    }
  }
}

export function combat(delta: number) {
  if (!currentPlayer.targetable) iFrames(delta);
  if (currentPlayer.hp <= 0) dead();
}

function iFrames(delta: number) {
  cd--;
  if (cd < 0) {
    currentPlayer.targetable = true;
    client.emit("targetable", currentPlayer.id);
    cd = 300;
  }
}

function dead() {
  respawnTimer--;
  if (respawnTimer > 0) {
    document.getElementById("deadIMG")!.style.display = "";
  } else {
    currentPlayer.model.position.set(randInt(-5, 5), 0.01, randInt(-5, 5));
    document.getElementById("hpIMG")!.style.width = "100%";
    scene.add(currentPlayer.model);
    client.emit("player respawn", currentPlayer.model.position);
    currentPlayer.hp = 100;
    respawnTimer = 1000;
    document.getElementById("deadIMG")!.style.display = "none";
    currentPlayer.animation = "idle";
  }
}
