import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { client } from "../networking/socket";
import { scene } from "./setup";
import { socketFunctions } from "../networking/network";
import { loadModel, animations, weapon, model } from "./loaders";
export let mixerList: any = [];
export let currentPlayer: Player;

export class Player {
  id: string;
  hp: number;
  model: THREE.Object3D;
  pos: THREE.Vector3;
  rot: THREE.Quaternion;
  weapon: THREE.Object3D | null;
  mixer: THREE.AnimationMixer;
  animation: string;
  next: Player | null;

  constructor(id: string, pos: THREE.Vector3, rot: THREE.Quaternion) {
    this.id = id;
    this.hp = 100;
    this.model = SkeletonUtils.clone(model);
    this.model.scale.setScalar(0.0025);
    this.pos = this.model.position.set(pos.x, pos.y, pos.z);
    this.rot = this.model.quaternion.set(rot.x, rot.y, rot.z, rot.w);
    this.weapon = null;
    scene.add(this.model);
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.name === "Sword_Cube004") {
          this.weapon = child;
        }
      }
    });
    this.mixer = new THREE.AnimationMixer(this.model);
    this.mixer.clipAction(animations[0]).play();
    this.animation = "idle";
    mixerList.push(this.mixer);
    this.mixer.clipAction(animations[2]).setLoop(THREE.LoopOnce, 1);
    this.mixer.clipAction(animations[3]).setLoop(THREE.LoopOnce, 1);
    this.mixer.clipAction(animations[4]).setLoop(THREE.LoopOnce, 1);
    this.mixer.clipAction(animations[5]).setLoop(THREE.LoopOnce, 1);
    this.mixer.clipAction(animations[5]).clampWhenFinished = true;
    this.next = null;
  }

  destroy(): void {
    scene.remove(this.model);
  }
}

export class LinkedList {
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

export let ready: boolean = false;
export let playerList: LinkedList = new LinkedList();

loadModel()
  .then((model: any) => {
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
