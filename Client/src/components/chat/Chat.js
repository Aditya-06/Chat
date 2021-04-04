import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../../UserContext';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { io } from 'socket.io-client';
let socket;

const Chat = () => {
  const ENDPOINT = 'http://localhost:5000';

  const { user } = useContext(UserContext);
  let { room_id, room_name } = useParams();

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', { name: user.name, room_id });

    return () => {};
  }, [ENDPOINT]);

  return (
    <div>
      <div>
        {room_id} {room_name}
      </div>
      <Container>
        <h1>Chat {JSON.stringify(user)}</h1>
        <Link to={'/'}>
          <button>Go to Home</button>
        </Link>
      </Container>
    </div>
  );
};

export default Chat;
