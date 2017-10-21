'use strict'

const path = require('path');
const request = require('request');

module.exports = (app) => {
  const sendFile = (req, res) => {
    console.log('sending file');
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  };

  app.get('/', sendFile);

  app.get('/test', (req, res) => {
    console.log('/test received');
    res.send('ok');
  });
}