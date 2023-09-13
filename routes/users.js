const router = require("express").Router();
const User = require("../models/User.js");
const Post = require('../models/Post.js');
const bcrypt = require("bcrypt");

//update
router.put("/:id", async (req, res) => {
  const { userId, username, password } = req.body;
  const { id } = req.params;
  if (userId === id) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashpwd = await bcrypt.hash(password, salt);
      const updateUser = await User.findByIdAndUpdate(
        id,
        {
          username,
          password: hashpwd,
        },
        { new: true }
      );

      return res.status(200).json(updateUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res
      .status(401)
      .json({ message: "you can only update your account" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findById(id);
  try {
    await Post.deleteMany({ username: user.username })
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    return res.status(401).json({ message: "can find user by this id" });
  }
});

//get 
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await User.findById(id);
    const userWithoutPassword = { ...user._doc }
    delete userWithoutPassword.password;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    return res.status(401).json({message: "user not found"})
  }
})

module.exports = router;
