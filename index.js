const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require('./routes/auth.js');

app.use(express.json());

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDb"))
  .catch((error) => console.error(error));

  app.use("/api/auth", authRoute)

app.listen("5000", () => {
  console.log("app listen to 5000");
});
