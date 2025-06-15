import { io } from "socket.io-client";
const socket = io("https://tic-tac-toe-api-0who.onrender.com"); // Your backend address
export default socket;
