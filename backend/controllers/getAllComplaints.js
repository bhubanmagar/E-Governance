const mongoose = require("mongoose");

const getAllComplaints = async (req, res) => {
  const complaints = mongoose.model("report");
  try {
    const response = await complaints.find().sort({ _id: -1 });
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
module.exports = getAllComplaints;
