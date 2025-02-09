import * as THREE from "three";
import { camera, scene } from "./setup";
import * as constant from "./constants";
import { getPitchRotation, getYawRotation } from "./utils";
import { loadRobot } from "./loaders";
import { dashing } from "./movement";
import { io, Socket } from "socket.io-client";

export let mixerList: any = [];
class Player {
  id: string;
  model: THREE.Object3D;
  modelHead: THREE.Object3D | null;
  hp: number;
  mixer: THREE.AnimationMixer;
  next: Player | null;

  constructor(id: string, robot: any) {
    this.id = id;
    this.model = robot.clone(true); //new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( {color: 0xbbbbbb} ) );
    this.modelHead = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xbbbbbb })
    ); //this.model.getObjectByName("Head") as THREE.Object3D;
    this.hp = 100;
    this.mixer = new THREE.AnimationMixer(this.model);
    //this.mixer.clipAction(animations[2]).play();
    mixerList.push(this.mixer);
    this.next = null;
    scene.add(this.model);
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

  add(id: string, robot: THREE.Object3D): void {
    const player = new Player(id, robot);
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
    //console.log("Player not found");
    return null;
  }

  copy(list: LinkedList, robot: THREE.Object3D): void {
    let serverCurrent: Player | null = list.head;
    while (serverCurrent != null) {
      this.add(serverCurrent.id, robot);
      serverCurrent = serverCurrent.next;
    }
  }

  print(): void {
    let current: Player | null = this.head;
    while (current != null) {
      console.log(current.id);
      current = current.next;
    }
  }
}

export const client: Socket = io(
  "https://interactivearchitecturebackend.onrender.com"
);
//export const client: Socket = io("localhost:3000");
export let ready: boolean = false;
export let playerListSize: number = 0;
export let playerList: LinkedList = new LinkedList();

loadRobot()
  .then((robot: any) => {
    client.emit("player ready");
    playerListSize = playerList.size;
    socketFunctions(playerList, robot);
  })
  .catch((error: any) => {
    console.error("Error loading robot:", error);
  });

export function socketFunctions(
  playerList: LinkedList,
  robot: THREE.Object3D
): void {
  client.on("transfer list", (serverList: LinkedList) => {
    playerList.copy(serverList, robot);
    ready = true;
  });

  client.on("new player", (id: string) => {
    playerList.add(id, robot);
    client.emit(
      "give state",
      { x: camera.position.x, y: camera.position.y, z: camera.position.z },
      {
        x: camera.quaternion.x,
        y: camera.quaternion.y,
        z: camera.quaternion.z,
      },
      id
    );
  });

  client.on(
    "set state",
    (
      pos: { x: number; y: number; z: number },
      rot: { x: number; y: number; z: number; w: number },
      id: string
    ) => {
      let player: Player | null = playerList.find(id);
      if (player) {
        player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);
        let quaternion = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
        let yaw = getYawRotation(quaternion);
        let pitch = getPitchRotation(
          new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w)
        );
        player.model.quaternion.set(yaw.x, yaw.y, yaw.z, yaw.w);
        if (player.modelHead) {
          player.modelHead.quaternion.set(pitch.x, pitch.y, pitch.z, pitch.w);
        }
      }
    }
  );

  client.on(
    "update position",
    (pos: { x: number; y: number; z: number }, id: string) => {
      if (ready) {
        const player: Player | null = playerList.find(id);
        if (player) {
          player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);
          /*if (player.mixer.clipAction(animations[2]).isRunning() == false) {
                    console.log("Running");
                    player.mixer.clipAction(animations[2]).stop();

                }*/
        }
      }
    }
  );

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
          if (player.modelHead) {
            player.modelHead.quaternion.set(pitch.x, pitch.y, pitch.z, pitch.w);
          }
        }
      }
    }
  );

  client.on("update jump", (id: string) => {
    if (ready) {
      const player: Player | null = playerList.find(id);
      if (player) {
        // Handle jump logic here
      }
    }
  });

  const hp = document.getElementById("hpIMG") as HTMLElement;
  if (hp) {
    hp.style.width = hp.style.width || "90%";
  }
  client.on("loseHP", (hitID) => {
    if (!dashing) {
      let playerHit: Player | null = playerList.find(hitID);
      console.log(playerHit);
      if (playerHit) {
        playerHit.hp -= 10;
        if (hp) {
          //hp.style.width = "10%";

          const currentWidth = parseFloat(hp.style.width);
          hp.style.width = `${Math.max(0, currentWidth - 10)}%`;
        }
      }
    }
  });

  client.on("removePlayer", (id: string) => {
    playerList.remove(id);
  });
}
