const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const accountClient = require('./routers/client/account.router')

// express-handlebars
app.engine("handlebars", exphbs.engine({ extname: 'handlebars', defaultLayout: null }));
app.set("view engine", "handlebars");

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// public file
app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
  res.render('index');
})

app.use("/api", accountClient)

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})