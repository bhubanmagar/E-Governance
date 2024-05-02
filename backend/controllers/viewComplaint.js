const mongoose = require("mongoose");
const viewComplaint = async (req, res) => {
  const getId = req.params.id;
  const Complaints = mongoose.model("report");
  try {
    const response = await Complaints.findById({
      _id: getId,
    });
    return res.status(200).json({
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = viewComplaint;
