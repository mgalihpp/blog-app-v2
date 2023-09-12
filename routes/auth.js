const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpwd = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hashpwd,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({username: username});
    !user && res.status(400).json({message: "user not found"});

    const validated = await bcrypt.compare(password, user.password);
    !validated && res.status(400).json({message: "wrong password"});
    
    res.status(200).json(user);
 
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
