const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./middleware/dbconnect");

const app = express();
require("dotenv").config();
app.use(express.json());

dbConnect(); //database connection
require("./middleware/dbconnect");
require("./models/feedbackModel");

// console.log(process.env.MONGO_URI);
app.listen(8000, () => {
  console.log("server started at port 8000");
});
