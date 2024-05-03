const mongoose = require("mongoose");
const signinHandler = async (req, res) => {
  const User = mongoose.model("user");
  const { email, password } = req.body;

  try {
    const response = await User.findOne({
      email: email,
    });
    if (!response) throw "Email doesn't match";

    //comparing password
    const actualPassword = response.password;
    const check = actualPassword === password;
    if (!check) throw "Email or Password doesn't match!";
  } catch (error) {
    res.status(400).json({
      message: error,
    });
    return;
  }

  res.status(200).json({
    message: "Sucessfully logedIn",
  });
};
module.exports = signinHandler;
