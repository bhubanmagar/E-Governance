const signinHandler = async (req, res, next) => {
  const mongoose = require("mongoose");
  const User = mongoose.model("user");
  const { email, password } = req.body;
  try {
    const response = await User.findOne({
      email: email,
    });
    if (!response.email === email && !response.password === passwod)
      throw "UnAuthorized";
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
  next();
};

module.exports = signinHandler;
