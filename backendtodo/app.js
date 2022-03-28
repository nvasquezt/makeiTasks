'use strict'
require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();


app.use(express.json());
app.use(morgan('dev'));

routes(app);

const port= process.env.PORT || 3031;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
