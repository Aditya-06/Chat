import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';

import CreateChat from './CreateChat';

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const setAsAditya = () => {
    const Aditya = {
      name: 'Aditya',
      email: 'aditya@gmail.com',
      password: '123',
      id: '123',
    };
    setUser(Aditya);
  };

  const setAsAbhishek = () => {
    const Abhishek = {
      name: 'Abhishek',
      email: 'abhishek@gmail.com',
      password: '123',
      id: '456',
    };
    setUser(Abhishek);
  };

  return (
    <div>
      <Grid wrap="wrap">
        <Container textOverflow="hidden">
          <CreateChat />
          <Typography
            variant="h4"
            color="inherit"
            display="block"
            paragraph
            noWrap
          >
            Home {JSON.stringify(user)}
          </Typography>
          <Box flexWrap="wrap" justifyContent="center" component="div">
            <Button onClick={setAsAbhishek} variant="contained" color="primary">
              Set as Abhishek
            </Button>
            <Button onClick={setAsAditya}>Set as Aditya</Button>
            <Link to={'/chat'} style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                Go to chat
              </Button>
            </Link>
          </Box>
        </Container>
      </Grid>
    </div>
  );
};

export default Home;
