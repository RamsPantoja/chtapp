import { io } from 'socket.io-client';

const URL = 'http://localhost:5200';
const socket = io(URL, { autoConnect: false });

export default socket;