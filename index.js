const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const User = require("./models/User.js");

app.use(express.json());

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDb"))
  .catch((error) => console.error(error));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.get("/", async (req, res) => {
  try {
    const user = await User.find({});

    return res.status(404).json(user);
  } catch (error) {
    return res.status(404).json(error);
  }
});

app.listen("5000", () => {
  console.log("app listen to 5000");
});
