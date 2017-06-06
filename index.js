const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const router = require('./router');

//DB setup
mongoose.connect('mongodb://localhost:auth/auth');

//App setup
app.use(morgan('combined'));//middleware in express  ->use to log incoming requests
app.use(bodyParser.json({ type: '*/*'})); //middleware in express  -> used to parse incoming requests as JSON

router(app);



//Server setup

const port = process.env.PORT || 3090;

const server = http.createServer(app);

server.listen(port);

console.log("server listening on :", port);
