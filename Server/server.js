const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const allowedOrigins = ["https://interactivearchitecture.onrender.com", "http://localhost:1234"]; // For dev and production
const io = require("socket.io")(server, {
    cors: {
        origin: allowedOrigins, // Accept an array of allowed origins
        methods: ["GET", "POST"],
    },
});
/*
"dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
    */

app.get('/', (req, res) => {
    res.send('<h1>What are you doing here?</h1>');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

class Player  {
    constructor(id, x, y, z) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.z = z;
        this.next = null;
    }
}

class LinkedList {
    constructor()
    {
      this.head = null;
      this.size = 0;
    }

    add(id, x, y, z)
    {
        var player = new Player(id, x, y, z);
        var current;
        if (this.head == null)
            this.head = player;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = player;
        }
        this.size++;
    }

    remove(id)
    {
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
}

let Players = new LinkedList();

io.on('connection', (socket) => {

    Players.add(socket.id, 0, -0, 0);
    console.log(socket.id + ' has connected');
    socket.broadcast.emit('newPlayer', socket.id);
    
    socket.emit('playerList', Players);

    socket.on('player position', (pos) => {
      //console.log('playerPos', pos, rot, socket.id);
        socket.broadcast.emit('update position', pos, socket.id);
    });

    socket.on('player rotation', (rot) => {
      socket.broadcast.emit('update rotation', rot, socket.id);
    });

    socket.on('player jump', () => {
      socket.broadcast.emit('player jump', socket.id);
    });

    socket.on('disconnect', () => {
      Players.remove(socket.id);
      socket.broadcast.emit('removePlayer', socket.id);
      console.log(socket.id + ' has disconnected');
    });
  });
