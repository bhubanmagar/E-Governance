const mongoose = require("mongoose");

const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected sucessfully to Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = Connect;
