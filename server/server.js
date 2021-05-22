const express = require('express');
const path = require('path');
const routes = require('./router.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../client/dist')));
app.use('/', routes);

module.exports = app;
