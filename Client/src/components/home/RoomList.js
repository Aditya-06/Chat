import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: '25vh',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const RoomList = ({ rooms }) => {
  const [secondary] = React.useState(false);
  const classes = useStyles();

  return (
    <Grid item md={6}>
      <Box container={true} m={3}>
        <Typography variant="h5" className={classes.title}>
          Chat Rooms
        </Typography>
        <Divider />
        <div className={classes.demo}>
          <Box overflow="visible">
            <List>
              {rooms &&
                rooms.map((room) => (
                  <div key={room._id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar style={{ backgroundColor: 'white' }}>
                          <ForumIcon
                            style={{
                              color: '#f50057',
                              backgroundColor: 'white',
                            }}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={room.name}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>
                    <Divider />
                  </div>
                ))}
            </List>
          </Box>
        </div>
      </Box>
    </Grid>
  );
};

export default RoomList;
