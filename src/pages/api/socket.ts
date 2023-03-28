import { Server } from "socket.io";

export default function SocketHandler(req: any, res: any) {
    const io = new Server(res.socket.server)
    res.socket.server.io = io;

    io.on("connection", () => {
        console.log("HEELO!")
    })
}