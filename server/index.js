const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app); 
const io = socketio(server, {
  cors: {
    origin: true,
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

// ФУНКЦИИ ДЛЯ РЕАЛИЗАЦИИ ИНТЕРФЕЙСА С ЮЗЕРАМИ

let players = [];

function addUser(user) {
  const {name, room, role} = user;

  let isValidRole = true;
  players.filter(player => player.room === room)
    .forEach(player => {
      if (player.role === role) isValidRole = false;
    });
  
  if (!isValidRole) return {error: 'Вы хотите войти в комнату с ролью, что уже есть в игре (игра расчитанна на двух игроков!)'}
  players.push(user);
  return {success: true};
}

function getAllUsers() {
  return players;
}

function getUser(id) {
  return players.find(player => player.id === id) || {errorFinding: 'This user wasn\'t found!'}; 
}


// КОНЕЦ ФУНКЦИЙ

io.on("connection", (socket) => {
  console.log('!!We have a new connection!')
  const player = {
    id: socket.id,
    name: '',
    role: '',
    gameStatus: '',
    room: ''
  }

  socket.on('disconnect', () => {
    players = players.filter(player => player.id !== socket.id);
    console.log('--User has disconnected!')
  });

  socket.on('game', ({name, room, game, role}, callback) => {
    player.name = name;
    player.room = room;
    player.gameStatus = game;
    player.role = role;

    let statusAdding = addUser(player);

    if (statusAdding.hasOwnProperty('error')) {
      return callback(statusAdding);
    }

    socket.join(player.room);
  }); 

  socket.on('playerWaiting', ({room, status}) => {
    if (status === 'WAITING_ANSWER') {
      socket.broadcast.to(room).emit('MASTER_WAITING', {isQuestion: true})
    }
    else if (status === 'WAITING_ACTION') {
      socket.broadcast.to(room).emit('MASTER_WAITING', {isQuestion: false})
    }
  })     
 
  socket.on('masterWaiting', ({room, status, payload}) => {
    if (status === 'SENDING_QUESTION') {
      socket.broadcast.to(room).emit('RECEIVED_QUESTION', {success:true, payload: payload})
    }  
    else if (status === 'SENDING_ACTION') {
      socket.broadcast.to(room).emit('RECEIVED_ACTION', {success:true, payload: payload})
    }
  });  

  socket.on('givingAnswer', ({room, payload}) => {
    socket.broadcast.to(room).emit('SHOW_ANSWER', {success:true, payload: payload})
  });

  socket.on('givingAction', ({room, payload}) => {
    socket.broadcast.to(room).emit('SHOW_ACTION', {success:true, payload: payload})
  });

  socket.on('leaveRoom', ({name, room}) => {
    players = players.filter(player => player.id !== socket.id);
    console.log(`Игрок (${name}) был убран из комнаты (${room})...`);
  });
});

app.use(require('./router'));