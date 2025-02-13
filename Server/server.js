const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const mime = require("mime");
const { randomInt } = require("crypto");

const allowedOrigins = [
  "https://interactivearchitecture.onrender.com",
  "http://localhost:5173",
  //"http://localhost:5174",
]; // For dev and production
const io = require("socket.io")(server, {
  cors: {
    origin: allowedOrigins, // Accept an array of allowed origins
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("<h1>What are you doing here?</h1>");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
class Player {
  constructor(id) {
    this.id = id;
    this.next = null;
    this.pos = { x: randomInt(0, 5), y: 0.01, z: randomInt(0, 5) };
    this.rot = { x: 0, y: 0, z: 0, w: 0 };
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(id) {
    const player = new Player(id);
    let current;
    if (this.head == null) {
      this.head = player;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = player;
      current.next.next = null;
    }
    this.size++;
  }

  remove(id) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.id === id) {
        if (prev == null) {
          // Node to be removed is the head
          this.head = current.next;
        } else {
          // Node to be removed is not the head
          prev.next = current.next;
        }
        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }
  find(id) {
    let current = this.head;
    while (current != null) {
      if (current.id === id) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.id);
      current = current.next;
    }
  }
}

let Players = new LinkedList();
io.on("connection", (socket) => {
  c(socket.id + " has connected");

  socket.on("player ready", () => {
    Players.add(socket.id);
    socket.emit("transfer list", Players);
    const newPlayer = Players.find(socket.id);
    socket.broadcast.emit(
      "new player",
      socket.id,
      newPlayer.pos,
      newPlayer.rot
    );
    c("There are now " + Players.size + " players in the game");
  });

  socket.on("give state", (pos, rot, sender) => {
    socket.to(sender).emit("set state", pos, rot, socket.id);
  });

  socket.on("player position", (pos) => {
    socket.broadcast.emit("update position", pos, socket.id);
  });

  socket.on("position animation", () => {
    socket.broadcast.emit("update position animation", socket.id);
  });

  socket.on("player rotation", (rot) => {
    socket.broadcast.emit("update rotation", rot, socket.id);
  });

  socket.on("player jump", () => {
    socket.broadcast.emit("update jump", socket.id);
  });

  socket.on("player roll", () => {
    socket.broadcast.emit("update roll", socket.id);
  });

  socket.on("attacking", (attackerID) => {
    socket.broadcast.emit("attack animation", attackerID);
  });

  socket.on("check hit", (attackerID, targetID) => {
    io.to(targetID).emit("verify hit", attackerID);
  });

  socket.on("targetable", (targetID) => {
    socket.broadcast.emit("switch targetable", targetID);
  });

  socket.on("player dead", () => {
    socket.broadcast.emit("remove player", socket.id);
  });

  socket.on("disconnect", () => {
    Players.remove(socket.id);
    socket.broadcast.emit("remove player", socket.id);
    c(socket.id + " has disconnected");
    c("There are now " + Players.size + " players in the game");
  });
});

function c(x) {
  //console.log(x)
}
