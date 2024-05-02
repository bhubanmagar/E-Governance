const express = require("express");
const complaintRegister = require("../controllers/complaintRegister");

const Route = express.Router();
Route.get("/complaints", complaintRegister);

module.exports = Route;
