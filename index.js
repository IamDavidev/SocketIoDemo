const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 8000


app.use('/index.css', express.static(__dirname + '/index.css'))
app.use('/src/main.js', express.static(__dirname + '/src/main.js'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('a user connected');
  });


http.listen(port, () => {
    console.log(`server is running on port ${port}`)
})