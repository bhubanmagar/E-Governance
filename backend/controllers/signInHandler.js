const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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
    console.log(error);
  }

  //token making using jsonwebtoken
  const getUserToken = await User.findOne({
    email: email,
  });

  console.log(getUserToken);
  const accessToken = await jwt.sign(
    {
      _id: getUserToken._id,
      email: getUserToken.email,
      password: getUserToken.password,
    },
    process.env.JWT_SALT
  );

  res.status(200).json({
    message: "sucessfull",
    data: accessToken,
  });
};
module.exports = signinHandler;
