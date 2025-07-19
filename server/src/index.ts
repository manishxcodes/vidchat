import express from "express";
import { Server } from "socket.io";
import dotenv from 'dotenv';
import http from 'http';
import 'dotenv/config'

dotenv.config();
const port = Number(process.env.PORT) || 8000;

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log('Socket connected: ', socket.id);
})

server.listen(port,() => {
    console.log(`server is listening on port:${port}`);
})