import express from 'express';
import socketio from 'socket.io';
import http from'http';
import router from './router';


const app = express();
app.use(express.json());
app.use(router);
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('User connected', (data) => {
        console.log(data.name);
    })

    socket.on('disconnect', () => {
        console.log('User has left :(');
    })
})


httpServer.listen(5200, () => console.log('Server is running on port: 5200'))

