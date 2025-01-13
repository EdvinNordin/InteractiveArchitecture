import {camera} from "./setup.js";
import * as constant from "./constants.js";
import {getPitchRotation, getYawRotation} from "./utils.js";
import {io} from "socket.io-client";

//export const client = io.connect('https://interactivearchitecturebackend.onrender.com');
export const client = io.connect('localhost:3000');

export function socketFunctions(client, playerList, ready){


}
