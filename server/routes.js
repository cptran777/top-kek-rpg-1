'use strict'

const path = require('path');
const request = require('request');

module.exports = (app) => {
  const sendFile = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  };

  app.get('/', sendFile);
}