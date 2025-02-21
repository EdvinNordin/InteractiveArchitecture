import * as THREE from "three";
import { currentPlayer } from "../utilities/classes";
import { client } from "../networking/socket";
import { scene, camera } from "../utilities/setup";
import { getYawRotation } from "../utilities/utils";
import { randInt } from "three/src/math/MathUtils";

const hp = document.getElementById("hp") as HTMLElement;
const currentHP = document.getElementById("currentHP") as HTMLElement;
document.getElementById("deadIMG")!.style.display = "none";
const weaponDamage = 20;
let cd: number = 200;
let respawnTimer: number = 500;

document.addEventListener("mousedown", (e) => {
  if (document.pointerLockElement === document.body) {
    if (
      e.button === 0 &&
      currentPlayer.animation !== "attack" &&
      currentPlayer.animation !== "roll"
    ) {
      currentPlayer.model.quaternion.copy(getYawRotation(camera.quaternion));
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
  if (attacker === currentPlayer) return;
  if (
    currentPlayer.animation !== "roll" &&
    currentPlayer.animation !== "hit" &&
    currentPlayer.animation !== "death"
  ) {
    const attackingWeaponBox = new THREE.Box3();
    attackingWeaponBox.setFromObject(attacker.weapon);
    // let weaponHelper = new THREE.Box3Helper(attackingWeaponBox, 0xffff00);
    // scene.add(weaponHelper);

    const modelBox = new THREE.Box3();
    modelBox.setFromObject(currentPlayer.model);
    // let modelHelper = new THREE.Box3Helper(modelBox, 0xff0000);
    // scene.add(modelHelper);

    if (modelBox.intersectsBox(attackingWeaponBox)) {
      currentPlayer.hp -= weaponDamage;

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
        currentHP.innerHTML = `${currentPlayer.hp}%`;
      }
    }
  }
}

export function combat(delta: number) {
  //if (!currentPlayer.targetable) iFrames(delta);
  if (currentPlayer.hp <= 0) dead();
}

function iFrames(delta: number) {
  cd--;
  if (cd < 0) {
    //currentPlayer.targetable = true;
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
    document.getElementById("hp")!.style.width = "100%";
    scene.add(currentPlayer.model);
    client.emit("player respawn", currentPlayer.model.position);
    currentPlayer.hp = 100;
    currentHP.innerHTML = `${currentPlayer.hp}%`;
    respawnTimer = 1000;
    document.getElementById("deadIMG")!.style.display = "none";
    currentPlayer.animation = "idle";
  }
}
