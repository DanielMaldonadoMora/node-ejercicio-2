const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const { usersRouter } = require('./routes/user.route');
const { repairsRouter } = require('./routes/repairs.route');

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

module.exports = { app };
