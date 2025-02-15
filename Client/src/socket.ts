import { io, Socket } from "socket.io-client";

export const client: Socket = io(
  "https://interactivearchitecturebackend.onrender.com"
);
