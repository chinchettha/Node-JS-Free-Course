const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    debug("Listening on port:3000" + chalk.green(port));
});