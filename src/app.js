const express = require('express');
const app = express();

app.use(express.json());

app.use('/', require('./route/homeRoute'));
app.use('/clients', require('./route/clientsRoute'));

module.exports = app;