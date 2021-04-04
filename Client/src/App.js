import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContext from './UserContext';
import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import { Container } from '@material-ui/core';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Container maxWidth="md" m={2} p={2} style={{ marginTop: '2rem' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/chat/:room_id/:room_name" component={Chat} />
            </Switch>
          </Container>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
