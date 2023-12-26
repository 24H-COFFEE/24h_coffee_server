const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const accountClient = require('./routers/client/account.router')
const bannerClient = require('./routers/client/banner.router')
const categoryClient = require('./routers/client/category.router')
const productClient = require('./routers/client/product.router')
const tableClient = require('./routers/client/table.router')
const billClient = require('./routers/client/bill.router')
// const notificationClient = require('./routers/client/notification.router')

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
app.use("/api", bannerClient)
app.use("/api", categoryClient)
app.use("/api", productClient)
app.use("/api", tableClient)
app.use("/api", billClient)
// app.use("/api", notificationClient)

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})