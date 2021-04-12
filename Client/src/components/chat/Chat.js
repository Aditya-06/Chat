import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../UserContext';
import { useParams } from 'react-router-dom';
import { Container, Grid, Paper, TextField, Button } from '@material-ui/core';
import { io } from 'socket.io-client';
let socket;

const Chat = () => {
  const ENDPOINT = 'http://localhost:5000';

  const { user } = useContext(UserContext);
  let { room_id, room_name } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    if (user)
      socket.emit('join', { name: user.name, room_id, user_id: user.id });

    return () => {};
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      console.log(message);
      socket.emit('sendMessage', message, room_id, () => {
        setMessage('');
      });
    }
  };

  return (
    <div>
      <div>
        {room_id} {room_name}
      </div>
      <Container>{user && user.name ? <h1>Chat</h1> : <h1>Chat</h1>}</Container>
      <pre>{JSON.stringify(messages, null, '\t')}</pre>
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <form action="" onSubmit={sendMessage}>
            <Paper style={{ padding: 16 }}>
              <Grid conatiner style={{ display: 'flex' }}>
                <Grid item md={10} style={{ margin: '0.25rem' }}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Message"
                    variant="outlined"
                    size="small"
                    style={{ margin: '0px' }}
                    fullWidth
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) =>
                      event.key === 'Enter' ? sendMessage(event) : null
                    }
                  />
                </Grid>
                <Grid
                  item
                  md={2}
                  alignItems="center"
                  alignContent="center"
                  style={{ margin: '0.25rem' }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    style={{ margin: 'auto' }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
