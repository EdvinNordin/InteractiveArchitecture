import {camera} from "./setup.js";
import * as constant from "./constants.js";
import {getPitchRotation, getYawRotation} from "./utils.js";
import {io} from "socket.io-client";

export const client = io.connect('https://interactivearchitecturebackend.onrender.com');
//export const client = io.connect('localhost:3000');

export function socketFunctions(client, playerList, ready){

    client.on('give list', (serverList) => {
        playerList.copy(serverList);
        ready = true;
    });

    client.on('new player', (id) => {
        playerList.add(id);

        client.emit('give state', camera.position, camera.quaternion, id);

    });

    client.on('set state', (pos, rot, id) => {
        let player = playerList.find(id);
        player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);

        //player.model.quaternion.copy(getYawRotation(rot));
        //player.modelHead.quaternion.copy(getPitchRotation(rot));
    })

    client.on('update position', (pos, id) => {
        if(ready){
            const player = playerList.find(id);
            console.log(player.model.position);
            player.model.position.set(pos.x, pos.y - constant.modelHeight, pos.z);

            /*if (player.mixer.clipAction(animations[2]).isRunning() && !player.mixer.clipAction(animations[3]).isRunning()) {
                player.mixer.clipAction(animations[2]).stop();
                player.mixer.clipAction(animations[10]).play();
            }*/
        }
    });
//0.09381591630267129, -0.4675207063025343, 0.04998006037269623, 0.8775676364769904
    client.on('update rotation', (rot, id) => {
        if(ready) {
            const player = playerList.find(id);
            let yaw = getYawRotation(rot);
            let pitch = getPitchRotation(rot);
            player.model.quaternion.set(yaw.x, yaw.y, yaw.z, yaw.w);
            player.modelHead.quaternion.set(pitch.x, pitch.y, pitch.z, pitch.w);
        }
    });

    client.on('update jump', (id) => {
        if(ready) {
            const player = playerList.find(id);
            /*player.mixer.clipAction(animations[10]).stop();
            player.mixer.clipAction(animations[2]).stop();
            player.mixer.clipAction(animations[3]).play();*/
        }
    })


    client.on('removePlayer', (id) => {
        playerList.remove(id);
    });
}
