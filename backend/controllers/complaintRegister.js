const mongoose = require("mongoose");

const complaintRegister = async (req, res) => {
  const { tittle, description, name, adress, number } = req.body;
  const Complaint = mongoose.model("report");
  console.log(req.body);
  try {
    if (!tittle || !description || !name || !adress || !number)
      throw "field can't be empty";
    const response = await Complaint.create({
      tittle: tittle,
      description: description,
      name: name,
      adress: adress,
      number: number,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }

  res.status(200).json({
    message: "sucessfully registered complaint",
  });
};
module.exports = complaintRegister;
