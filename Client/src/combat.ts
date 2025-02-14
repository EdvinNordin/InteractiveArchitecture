import * as THREE from "three";
import { client, playerList, currentPlayer } from "./socket";
import { animations } from "./loaders";
import { quat } from "./movement";
import { getYawRotation } from "./utils";
import { get } from "http";

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

export function hit() {}
