'use strict'
/****************************** INIT DEPENDENCIES ******************************/
// npm dependencies
const express = require('express');
const bodyparser = require('body-parser');
const http = require('http');
const request = require('request');

// init server application using express
const app = express();

/***************************** INIT CUSTOM MODULES *****************************/
const router = require('./routes');

/******************************* INIT MIDDLEWARE *******************************/
// Should allow us to use the assets inside the public folder in the client side codes
app.use(express.static(__dirname + '/../client/public'));

app.use(bodyparser.json());

/********************************* INIT SERVER *********************************/

router(app);
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Listening on port', port);
});