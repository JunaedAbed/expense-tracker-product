// import dependecies
const path = require("path");
const express = require("express");
const dotenv = require("dotenv"); //create glbl vars
const colors = require("colors"); //import colors
const morgan = require("morgan"); //import colors
const connectDB = require("./config/db"); //import db

//dot will import the config file
dotenv.config({ path: "./config/config.env" });

//call connectDB function
connectDB();

//import transactions file
const transactions = require("./routes/transactions");

//start app
const app = express();

//allow using body parser
app.use(express.json());

//use morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//route handle get requests
app.use("/api/v1/transactions", transactions);

//check for production
if (process.env.NODE_ENV === "production") {
  //client folder is static folder
  app.use(express.static("client/build"));

  //req anything except api routes, it will load this
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//access the config file for the port
const PORT = process.env.PORT || 5000;

//run server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
