require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const controllers = require('../controller');
const middlewares = require('../middlewares');

app.use('/login', controllers.login, middlewares.error);
app.use('/register', controllers.registerUser, middlewares.error);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
