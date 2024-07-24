const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set a default port if PORT is not set in the environment
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const adminRouter = express.Router();

app.set("views", path.join(__dirname, "./src/views")); // Use "views" instead of "view"
app.set("view engine", "ejs");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

adminRouter.route("/").get((req, res) => {
    res.send("Hello World !! I'm Admin.");
});

app.use("/admin", adminRouter)

app.get("/", (req, res) => {
    res.render('index', { username : 'Chinchettha' , customer : ["น้องเอก", "คนนี้", "ดีที่หนึ่ง"] });
});

app.listen(PORT, () => {
    debug("Listening on PORT : " + chalk.green(PORT));
});