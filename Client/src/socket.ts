import * as THREE from "three";
import { camera, scene } from "./setup";
import { getPitchRotation, getYawRotation } from "./utils";
import { loadModel, animations, weapon, model } from "./loaders";
import { rolling } from "./movement";
import { io, Socket } from "socket.io-client";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";

export let mixerList: any = [];
export let currentPlayer: Player;
class Player {
  id: string;
  hp: number;
  targetable: boolean;
  model: THREE.Object3D;
  pos: THREE.Vector3;
  rot: THREE.Quaternion;
  weapon: THREE.Object3D;
  mixer: THREE.AnimationMixer;
  next: Player | null;

  constructor(id: string, pos: THREE.Vector3, rot: THREE.Quaternion) {
    this.id = id;
    this.hp = 100;
    this.targetable = true;
    this.model = SkeletonUtils.clone(model);
    this.model.scale.setScalar(0.0025);
    this.pos = this.model.position.set(pos.x, pos.y, pos.z);
    this.rot = this.model.quaternion.set(rot.x, rot.y, rot.z, rot.w);
    scene.add(this.model);
    this.weapon = weapon;
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        this.weapon = child;
      }
    });
    //this.weapon = weapon;
    this.mixer = new THREE.AnimationMixer(this.model);
    this.mixer.clipAction(this.model.animations[0]).play();

    mixerList.push(this.mixer);
    this.next = null;
  }

  destroy(): void {
    scene.remove(this.model);
  }
}

class LinkedList {
  head: Player | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(id: string, pos: THREE.Vector3, rot: THREE.Quaternion): void {
    const player = new Player(id, pos, rot);
    let current: Player | null;
    if (this.head == null) {
      this.head = player;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = player;
    }
    this.size++;
    if (client.id === id) currentPlayer = player;
  }

  remove(id: string): void {
    let current: Player | null = this.head;
    let prev: Player | null = null;

    while (current != null) {
      if (current.id === id) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        current.destroy();
        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  find(id: string): Player | null {
    let current: Player | null = this.head;
    while (current != null) {
      if (current.id === id) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  copy(list: LinkedList): void {
    let serverCurrent: Player | null = list.head;
    while (serverCurrent != null) {
      this.add(serverCurrent.id, serverCurrent.pos, serverCurrent.rot);
      serverCurrent = serverCurrent.next;
    }
  }

  print(): void {
    let current: Player | null = this.head;
    while (current != null) {
      current = current.next;
    }
  }
}

export const client: Socket = io("localhost:3000");
// export const client: Socket = io(
//   "https://interactivearchitecturebackend.onrender.com/"
// );
export let ready: boolean = false;
export let playerListSize: number = 0;
export let playerList: LinkedList = new LinkedList();
loadModel()
  .then((model: any) => {
    playerListSize = playerList.size;
    client.emit("player ready"); //player ready
    //get player list from server
    client.on("transfer list", (serverList: LinkedList) => {
      playerList.copy(serverList);
      ready = true;
    });

    socketFunctions(playerList);
  })
  .catch((error: any) => {
    console.error("Error loading model:", error);
  });

export function socketFunctions(playerList: LinkedList): void {
  // when a new player joins
  client.on(
    "new player",
    (id: string, pos: THREE.Vector3, rot: THREE.Quaternion) => {
      if (ready) {
        playerList.add(id, pos, rot);

        // send the new player the current state of this player
        client.emit(
          "give state",
          {
            x: currentPlayer.model.position.x,
            y: currentPlayer.model.position.y,
            z: currentPlayer.model.position.z,
          },
          {
            x: currentPlayer.model.quaternion.x,
            y: currentPlayer.model.quaternion.y,
            z: currentPlayer.model.quaternion.z,
          },
          id
        );
      }
    }
  );

  client.on(
    "set state",
    (
      pos: { x: number; y: number; z: number },
      rot: { x: number; y: number; z: number; w: number },
      id: string
    ) => {
      let player: Player | null = playerList.find(id);
      if (player) {
        player.model.position.set(pos.x, pos.y, pos.z);
        let quaternion = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
        let yaw = getYawRotation(quaternion);
        player.model.quaternion.set(yaw.x, yaw.y, yaw.z, yaw.w);
      }
    }
  );

  client.on(
    "update position",
    (pos: { x: number; y: number; z: number }, id: string) => {
      if (ready) {
        const player: Player | null = playerList.find(id);
        if (player) {
          player.model.position.set(pos.x, pos.y, pos.z);
        }
      }
    }
  );

  client.on("update position animation", (id: string) => {
    if (ready) {
      const player: Player | null = playerList.find(id);
      if (player) {
        const action = player.mixer.clipAction(player.model.animations[1]);
        player.mixer.stopAllAction();
        action.setLoop(THREE.LoopOnce, 1);
        action.play();
      }
    }
  });

  client.on(
    "update rotation",
    (rot: { x: number; y: number; z: number; w: number }, id: string) => {
      if (ready) {
        const player: Player | null = playerList.find(id);
        if (player) {
          let quaternion = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
          let yaw = getYawRotation(quaternion);
          let pitch = getPitchRotation(
            new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w)
          );
          player.model.quaternion.set(yaw.x, yaw.y, yaw.z, yaw.w);
        }
      }
    }
  );

  client.on("update jump", (id: string) => {
    if (ready) {
      const player: Player | null = playerList.find(id);
      if (player) {
        // Jump animation
      }
    }
  });

  client.on("update roll", (id: string) => {
    if (ready) {
      const player: Player | null = playerList.find(id);
      if (player) {
        const action = player.mixer.clipAction(player.model.animations[3]);
        player.mixer.stopAllAction();
        action.setLoop(THREE.LoopOnce, 1);
        action.play();
      }
    }
  });

  client.on("attack animation", (id: string) => {
    if (ready) {
      const player: Player | null = playerList.find(id);
      if (player) {
        const action = player.mixer.clipAction(player.model.animations[2]);
        player.mixer.stopAllAction();
        action.setLoop(THREE.LoopOnce, 1);
        action.play();
      }
    }
  });

  const hp = document.getElementById("hpIMG") as HTMLElement;
  if (hp) {
    hp.style.width = hp.style.width || "100%";
  }

  client.on("verify hit", (attackerID: string) => {
    if (!rolling && currentPlayer.targetable) {
      let attacker = playerList.find(attackerID);
      if (attacker) {
        const attackingWeaponBox = new THREE.Box3();
        attackingWeaponBox.setFromObject(attacker.weapon);

        const modelBox = new THREE.Box3();
        modelBox.setFromObject(currentPlayer.model);

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
  });

  client.on("switch targetable", (targetID: string) => {
    let target = playerList.find(targetID);
    if (target) {
      target.targetable = true;
    }
  });

  client.on("remove player", (id: string) => {
    playerList.remove(id);
  });
}
