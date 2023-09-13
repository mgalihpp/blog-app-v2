const router = require("express").Router();
const Post = require("../models/Post.js");

//create
router.post("/", async (req, res) => {
    const { username, title, desc } = req.body
  try {
    const newPost = new Post({
        username: username,
        title: title,
        desc: desc
    });
    await newPost.save()
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//update
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const post = await Post.findById(id);
  if (post.username === username) {
    try {
      const updatePost = await Post.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatePost);
    } catch (error) {
      return res.status(500).json({ message: "error to update post" });
    }
  } else {
    return res.status(400).json({ message: "error username is not matched" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const post = await Post.findById(id);
  if (post.username === username) {
    try {
      await Post.findByIdAndDelete(id);
      return res.status(200).json({ message: "post has been deleted" });
    } catch (error) {
      return res.status(500).json({ message: "error to delete post" });
    }
  } else {
    return res.status(400).json({ message: "error username is not matched" });
  }
});

//get
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    return res.status(200).json({ post });
  } catch (error) {
    return res.status(401).json({ message: "post not found" });
  }
});

//get all post
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  let posts;
  try {
    if (username) {
      posts = await Post.find({ username: username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(401).json({ message: "post not found" });
  }
});

module.exports = router;
