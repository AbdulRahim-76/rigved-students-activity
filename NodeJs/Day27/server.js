const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('Server is running...');
});

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('send-message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('recieve-message', msg);
    });
});

