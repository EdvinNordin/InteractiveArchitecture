import { io, Socket } from "socket.io-client";

//export const client: Socket = io("localhost:3000");
export const client: Socket = io(
  "https://interactivearchitecturebackend.onrender.com"
);
