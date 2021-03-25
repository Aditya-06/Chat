import React from 'react';
import { useContext } from 'react';
import UserContext from '../../UserContext';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

const Chat = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
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
