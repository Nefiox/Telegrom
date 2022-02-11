const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const router = require('./network/routes');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

router(app);

// app.use(publicRoute, express.static('public'));

server.listen(config.port, function () {
    console.log('La aplicación está escuchando en '+ config.host +':' + config.port);
});