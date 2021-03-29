const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(http, {
    cors: {
     origin: "http://localhost:3000",
     methods: ["GET", "POST"],
     credentials: true
    }
  });


const PORT = process.env.PORT || 5000;
app.use(cors({ 
    credentials: true
}));
app.use(cors());
  
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/', (req, res) => {
    res.json({ Msg: 'HI' });
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});