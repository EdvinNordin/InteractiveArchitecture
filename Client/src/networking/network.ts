import * as THREE from "three";
import { client } from "./socket";
import { getPitchRotation, getYawRotation } from "../utilities/utils";
import { currentPlayer, ready, Player, LinkedList } from "../utilities/classes";

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

  client.on("update animation", (animation: string, id: string) => {
    if (ready) {
      const player: Player | null = playerList.find(id);
      if (player) {
        player.animation = animation;
      }
    }
  });

  // client.on("switch targetable", (targetID: string) => {
  //   let target = playerList.find(targetID);
  //   if (target) {
  //     target.targetable = true;
  //   }
  // });

  client.on("died", (id: string) => {
    const player: Player | null = playerList.find(id);
    if (player) {
      player.hp = 0;
      player.animation = "death";
    }
  });

  client.on("revive", (pos: THREE.Vector3, id: string) => {
    const player: Player | null = playerList.find(id);
    if (player) {
      player.model.position.copy(pos);
      player.hp = 100;
      player.animation = "idle";
    }
  });

  client.on("remove player", (id: string) => {
    playerList.remove(id);
  });
}
