import React from 'react';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../UserContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
} from '@material-ui/core';
import { io } from 'socket.io-client';
let socket;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: '25vh',
  },
});

const CreateChat = () => {
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT, {
      withCredentials: true,
    });
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT]);

  const classes = useStyles();
  const [room, setRoom] = useState('');
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('create-room', room);
    // eslint-disable-next-line no-console
    console.log(room);
    setRoom('');
  };

  return (
    <Grid item md={6}>
      <Box
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        m={3}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + '/chatcard.jpg'}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Create Chat Room
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container>
              <Grid item md={12}>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    md={8}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Box
                      m={1}
                      p={0.5}
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                      display="flex"
                    >
                      <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                      >
                        {user && user.name ? (
                          <TextField
                            id="standard-basic"
                            label="Room Name"
                            placeholder={user.name}
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                          />
                        ) : (
                          <TextField
                            id="standard-basic"
                            label="Room Name"
                            placeholder="Name..."
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                          />
                        )}
                      </form>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Button size="medium" color="primary" variant="contained">
                      Create
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default CreateChat;
