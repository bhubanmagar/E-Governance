const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./middleware/dbconnect");
const Route = require("./Routes/Routes");

const app = express();
require("dotenv").config();
app.use(express.json());

dbConnect(); //database connection
require("./models/complaintModel");
require("./models/userModel");

app.use("/", Route);

app.listen(8000, () => {
  console.log("server started at port 8000");
});
