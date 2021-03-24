import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import { Link } from 'react-router-dom';
import { Box, Container, Grid } from '@material-ui/core';

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
        <Container>
          <h1>Home {JSON.stringify(user)}</h1>
          <Box flexWrap="wrap" justifyContent="center">
            <button onClick={setAsAbhishek}>Set as Abhishek</button>
            <button onClick={setAsAditya}>Set as Aditya</button>
            <Link to={'/chat'}>
              <button>Go to chat</button>
            </Link>
          </Box>
        </Container>
      </Grid>
    </div>
  );
};

export default Home;
