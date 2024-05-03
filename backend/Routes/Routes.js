const express = require("express");
const complaintRegister = require("../controllers/complaintRegister");
const viewComplaint = require("../controllers/viewComplaint");
const signinHandler = require("../controllers/signInHandler");
const getAllComplaints = require("../controllers/getAllComplaints");

const Route = express.Router();
Route.post("/complaints", complaintRegister);
Route.get("/get-complain", getAllComplaints);
Route.post("/signin", signinHandler);
Route.get("/view-Complaints/:id", viewComplaint);

module.exports = Route;
