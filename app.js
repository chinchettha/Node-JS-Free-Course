const express = require('express');
const app = express();
const PORT = process.env.PORT;
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    debug("Listening on PORT : " + chalk.green(PORT));
});