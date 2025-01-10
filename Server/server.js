const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require("cors");
const mime = require("mime");

const allowedOrigins = ["https://interactivearchitecture.onrender.com", "http://localhost:5173", "http://localhost:5174"]; // For dev and production
const io = require("socket.io")(server, {
    cors: {
        origin: allowedOrigins, // Accept an array of allowed origins
        methods: ["GET", "POST"],
    },
});

app.get('/', (req, res) => {
    res.send('<h1>What are you doing here?</h1>');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

class Player  {
    constructor(id) {
        this.id = id;
        this.ready = false;
        this.next = null;
    }
}

class LinkedList {
    constructor()
    {
      this.head = null;
      this.size = 0;
    }

    add(id) {
        const player = new Player(id);
        let current;
        if (this.head == null) {
            this.head = player;
        }
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
    //console.log(socket.id + ' has connected');

    socket.on('player ready', () => {
        //console.log(socket.id + ' is ready');
        socket.emit('give list', Players);
        Players.add(socket.id);
        socket.broadcast.emit('new player', socket.id);
        //console.log(Players.size);
    });

    socket.on('give state', (pos, rot, sender) => {
        //console.log('Rotation:', rot);
        socket.to(sender).emit('set state', pos, rot, socket.id);
    })

    socket.on('player position', (pos) => {
      //console.log('playerPos', pos, socket.id);
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
      //console.log(socket.id + ' has disconnected');
    });
});