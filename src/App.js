import './App.css';
import User from './User/User';
import Nav from './Nav/Nav';
import useWebSocket from 'react-use-websocket';
import { useState } from 'react';
import { WS_URL } from './const'

// const WS_URL = 'ws://localhost:8080/ws';
export default function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    }
  });

  return <>
    <Nav />
    <User />
  </>
}

// client.js
const socket = new WebSocket(WS_URL);

socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
  console.log('Message from server: ', event.data);
});

// socket.on('open', function open() {
//   socket.send(JSON.stringify({
//     "type": "new user going in",
//     "uid": "<String>",
//     "goInTimestamp": "<String>"
//   }));

//   socket.send(JSON.stringify({
//     "type": "slot-update",
//     "slotId": true,
//     "status": "<String>"
//   }));

//   socket.send(JSON.stringify({
//     "type": "user leaving",
//     "uid": "<String>"
//   }));
// });

// socket.on('message', function incoming(data) {
//   console.log(data);
// });
