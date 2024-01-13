import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import db_connect from './Db_con.js'

const app = express();
//Database connection establishment
db_connect()
const httpServer = createServer(app);
const io = new Server(httpServer, { cors:{origin:"*"} });

io.on("connection", (socket) => {
  console.log('Client '+socket.id+' connected')
  socket.broadcast.emit('broadcast_connectivity_status',{status:'success',message:'Client '+socket.id+' connected',sid:socket.id})

  socket.on('disconnect',(reason)=>{
    console.log("Client "+socket.id+" Disconnected")
    io.emit('broadcast_connectivity_status',{status:'success',message:'Client '+socket.id+' disconnected',sid:socket.id})
  })

  socket.on('greeting',(data)=>{
    console.log('Client '+socket.id+' said hi')
  })

  socket.on('get_users_count',(data)=>{
    socket.emit('receive_user_count',io.engine.clientsCount)
  })

  socket.on('relay_2_group',(message)=>{
    socket.broadcast.emit("message_from_group", socket.id+": "+message);
  })

  socket.on('relay_2_individual',(message)=>{
    io.to(message.id).emit('message_from_individual', message.body)
  })

  

});

io.on('greeting',(socket)=>{
  console.log('Server said hi')
})



httpServer.listen(5001);