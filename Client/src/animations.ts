import { client, ready, currentPlayer, playerList } from "./socket";
import { PCMovement, mobileMovement, quat, rolling } from "./movement";
import { getAttacked } from "./combat";
import { animations } from "./loaders";

let prevAnim: string = "idle";

export function updateMixers(delta: number) {
  let current: any = playerList.head;
  while (current != null) {
    const runningActionName = current.mixer._actions.filter((action: any) =>
      action.isRunning()
    );
    if (current !== currentPlayer) {
      if (current.animation === "attack") {
        getAttacked(current, rolling);
      }

      if (runningActionName.length === 0 && current.animation !== "death") {
        current.animation = "idle";
        let action = current.mixer.clipAction(getAnimationbyName("idle"));
        current.mixer.stopAllAction();
        action.reset();
        action.play();
      } else if (
        runningActionName[0] &&
        current.animation !== runningActionName[0]._clip.name
      ) {
        let action = current.mixer.clipAction(
          getAnimationbyName(current.animation)
        );
        current.mixer.stopAllAction();
        action.reset();
        action.play();
      }
    } else {
      // currentPlayer animations
      if (
        runningActionName.length === 0 &&
        currentPlayer.animation !== "death"
      ) {
        currentPlayer.animation = "idle";
        client.emit("new animation", currentPlayer.animation);
        let action = currentPlayer.mixer.clipAction(getAnimationbyName("idle"));
        currentPlayer.mixer.stopAllAction();
        action.reset();
        action.play();
      } else if (currentPlayer.animation !== prevAnim) {
        client.emit("new animation", currentPlayer.animation);
        let action = currentPlayer.mixer.clipAction(
          getAnimationbyName(currentPlayer.animation)
        );
        currentPlayer.mixer.stopAllAction();
        action.reset();
        action.play();
        prevAnim = currentPlayer.animation;
      }
    }

    current.mixer.update(delta);
    current = current.next;
  }
}

function getAnimationbyName(name: string) {
  for (let i = 0; i < animations.length; i++) {
    if (animations[i].name === name) return animations[i];
  }
  console.log("animation not found");
  return null;
}
