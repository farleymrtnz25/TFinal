const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const trabajadoresRoutes = require('./routes/trabajadores');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/trabajadores', trabajadoresRoutes);

module.exports.handler = serverless(app);