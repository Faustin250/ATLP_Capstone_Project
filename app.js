 const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const morgan = require("morgan");
 const bodyParser = require("body-Parser");
 const blogsRouter = require("./routes/blogs");
 const contactRouter = require("./routes/contact");
 const userAuthRoutes = require("./routes/userAuth")

 mongoose.set("useCreateIndex", true);
 require("dotenv/config");
 mongoose.connect(
   process.env.DB_CONNECTION, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   },
   () => console.log("connected to DB!")
 );
 app.listen(2000);
 app.use(morgan("dev"));
 app.use(bodyParser.urlencoded({
   extended: false
 }));
 app.use(bodyParser.json());
 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");
   if (req.method === 'OPTIONS') {
     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
     return res.status(200).json({});
   }
   next();
 });

 app.use("/blogs", blogsRouter);
 app.use("/questions", contactRouter);
 app.use("/user", userAuthRoutes);

 app.use((req, res, next) => {
   const error = new Error(" Not found");
   error.status = 404;
   return;
 });

 app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
     error: {
       message: error.message,
     },
   });
 });
 module.exports = app;