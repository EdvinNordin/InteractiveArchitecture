const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",//"http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const path = require('path');
// Serve static files from the "dist" folder
app.use('/Client', express.static(path.join(__dirname, 'dist')));

// Optional: fallback for single-page apps
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
/*
// Route handler
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
 */

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

var Players = new LinkedList();

io.on('connection', (socket) => {

    Players.add(socket.id, 0, -0, 0);
    console.log('a user connected');
    socket.broadcast.emit('newPlayer', socket.id);
    
    socket.emit('playerList', Players);

    socket.on('player position', (pos, rot) => {
      //console.log('playerPos', pos, rot, socket.id);
        socket.broadcast.emit('update position', pos, socket.id);
    });

    socket.on('player rotation', (rot) => {
      socket.broadcast.emit('update rotation', rot, socket.id);
    });

    socket.on('disconnect', () => {
      Players.remove(socket.id);
      socket.broadcast.emit('removePlayer', socket.id);
    });
  });
//'0.0.0.0'
server.listen(3000, () => {
  console.log('listening on *:3000');
});
