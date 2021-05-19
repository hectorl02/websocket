const express = require('express');
const app = express();
const server = require('http').Server(app);// inicializar servidor node
const io = require('socket.io')(server);//inicializa socket

// ruta
app.use(express.static('public'));

// cuando alguien se conecte
io.on('connection', function(socket){
    console.log('Nuevo cliente conectado');
    socket.emit('msj','Bienvenido');
})

setInterval(function(){
    io.emit('msj','hola a todos')
},3000);

//levantar puerto
server.listen(8080, function(){
    console.log('servidor iniciado en http://localhost:8080');
});