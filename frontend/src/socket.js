// frontend/src/socket.js
import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL, {
  transports: ['websocket'],
  autoConnect: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});
socket.on('connect', () => {
  console.log('Connected to socket server');
});
socket.on('disconnect', () => {
  console.log('Disconnected from socket server');
});
socket.on('connect_error', (error) => {
  console.error('Socket connection error:', error);
});
socket.on('reconnect_attempt', (attempt) => {
  console.log(`Reconnection attempt #${attempt}`);
});

export default socket;
