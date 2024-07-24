const express = require('express');
const app = express(); // Call express to create an instance
const port = 3000;
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    debug("Listening on port" + chalk.green(port));
});