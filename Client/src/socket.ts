import * as THREE from "three";
import { camera, scene } from "./setup";
import * as constant from "./constants";
import { getPitchRotation, getYawRotation } from "./utils";
import { loadRobot } from "./loaders";
import { io, Socket } from "socket.io-client";

class Player {
    id: string;
    model: THREE.Object3D;
    modelHead: THREE.Object3D | undefined;
    next: Player | null;

    constructor(id: string, robot: THREE.Object3D) {
        this.id = id;
        this.model = robot.clone(true);
        this.modelHead = this.model.getObjectByName("Head") as THREE.Object3D;
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
        this.size = 1;
    }

    add(id: string, robot: THREE.Object3D): void {
        if (id !== client.id) {
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
        console.log("Player not found");
        return null;
    }

    copy(list: LinkedList, robot: THREE.Object3D): void {
        let current: Player | null = list.head;
        while (current != null) {
            this.add(current.id, robot);
            current = current.next;
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

export const client: Socket = io('localhost:3000');

loadRobot().then((value: unknown) => {
    const robot = value as THREE.Object3D;
    //console.log("Robot loaded:", robot);
    client.emit('player ready');

    let playerList: LinkedList = new LinkedList();
    let ready: boolean = false;

    socketFunctions(playerList, robot, ready);

}).catch((error) => {
    console.error("Error loading robot:", error);
});

export function socketFunctions(playerList: LinkedList, robot: THREE.Object3D, ready: boolean): void {

    client.on('transfer list', (serverList: LinkedList) => {
        playerList.copy(serverList, robot);
        ready = true;
    });

    client.on('new player', (id: string) => {
        playerList.add(id, robot);
        client.emit('give state', camera.position.toArray(), camera.quaternion.toArray(), id);
    });

    client.on('set state', (pos: { x: number, y: number, z: number }, rot: [number, number, number, number], id: string) => {
        let player: Player | null = playerList.find(id);
        if (player) {
            player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);
        }
    });

    client.on('update position', (pos: { x: number, y: number, z: number }, id: string) => {
        if (ready) {
            const player: Player | null = playerList.find(id);
            if (player) {
                player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);
            }
        }
    });

    client.on('update rotation', (rot: { x: number, y: number, z: number, w: number }, id: string) => {
        if (ready) {
            const player: Player | null = playerList.find(id);
            if (player) {
                let quaternion = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
                let yaw = getYawRotation(quaternion);
                let pitch = getPitchRotation(new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w));
                player.model.quaternion.set(yaw.x, yaw.y, yaw.z, yaw.w);
                if (player.modelHead) {
                    player.modelHead.quaternion.set(pitch.x, pitch.y, pitch.z, pitch.w);
                }
            }
        }
    });

    client.on('update jump', (id: string) => {
        if (ready) {
            const player: Player | null = playerList.find(id);
            if (player) {
                // Handle jump logic here
            }
        }
    });

    client.on('removePlayer', (id: string) => {
        playerList.remove(id);
    });
}