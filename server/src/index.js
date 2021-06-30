import express from 'express';
import socketio from 'socket.io';
import http from'http';
import router from './router';
import cors from 'cors';
import userConnectedHandler from './handlers/userHandler';
import notificationHandler from './handlers/notificationHandler';


const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

const onConnection = (socket) => {
    userConnectedHandler(io, socket);
    notificationHandler(io, socket);
}

io.on('connection', onConnection);


httpServer.listen(5200, () => console.log('Server is running on port: 5200'))

