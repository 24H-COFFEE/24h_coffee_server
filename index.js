const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const handlebarsHelpers = require("./helpers/handlebars-helpers.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const app = express();

// Router Client
const accountClient = require('./routers/client/account.router')
const bannerClient = require('./routers/client/banner.router')
const categoryClient = require('./routers/client/category.router')
const productClient = require('./routers/client/product.router')
const tableClient = require('./routers/client/table.router')
const billClient = require('./routers/client/bill.router')
// const notificationClient = require('./routers/client/notification.router')

// Router admin
const bannerRouter = require('./routers/server/banner.router.js');
const tableRouter = require('./routers/server/table.router.js');
const categoryRouter = require('./routers/server/catgory.router.js');
const productRouter = require('./routers/server/product.router.js');
const employeeRouter = require('./routers/server/employee.router.js');
const authRouter = require('./routers/server/auth.router.js');

// express-handlebars
app.engine("handlebars", exphbs.engine({ extname: 'handlebars' }));
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "24h_coffee",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(function (req, res, next) {
  (res.locals.success = req.flash("success")),
  (res.locals.error = req.flash("error")),
  (res.locals.warning = req.flash("warning"));
  next();
});

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// public file
app.use(express.static(path.join(__dirname, "/public")));

// Hiển thị thông tin HTTP khi yêu cầu
app.use((req, res, next) => {
  console.log("🚀 ~ file: index.js: ~ app.use ~ req:", req.method + req.url);
  next();
});

app.get('/', (req, res) => {
  res.render('home');
})
// Router 
app.use("/api", accountClient)
app.use("/api", bannerClient)
app.use("/api", categoryClient)
app.use("/api", productClient)
app.use("/api", tableClient)
app.use("/api", billClient)
// app.use("/api", notificationClient)
app.use('/', bannerRouter);
app.use('/', tableRouter);
app.use('/', categoryRouter);
app.use('/', productRouter);
app.use('/', employeeRouter);
app.use('/', authRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})