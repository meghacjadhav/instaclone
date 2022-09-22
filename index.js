const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
mongoose.connect(
  "mongodb+srv://Megha:Megha@cluster0.7cktj2k.mongodb.net/instaclone?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to mongodb");
    }
  }
);
const instaSchema = require("./instacloneSchema");
const bodyparser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(bodyparser.json());
app.use(cors());
app.use(fileUpload());

app.get("/all", async (req, res) => {
  try {
    const data = await instaSchema.find();
    res.json({
      status: "success",
      result: data,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});
app.get("/Images/:name", async (req, res) => {
  try {
    res.sendFile(__dirname + `/Images/${req.params.name}`);
  } catch (e) {
    res.json({
      message: "failed",
      error: e.message,
    });
  }
});
app.post("/add", async (req, res) => {
  try {
    const file = req.files.PostImage;
    file.mv("./Images/" + file.name, (err) => {
      if (err) {
        res.send(JSON.stringify(err));
      } else {
        console.log("Image Uploaded Successfully");
      }
    });
    const data = await instaSchema.create({
      location: req.body.location,
      name: req.body.name,
      description: req.body.description,
      likes: req.body.likes,
      date: req.body.date,
      PostImage: req.files.PostImage.name,
    });
    console.log(req);
    res.json({
      message: "success",
    });
  } catch (e) {
    res.json({
      message: "failed",
      error: e.message,
    });
  }
});
app.delete("/:id", async (req, res) => {
  try {
    const data = await instaSchema.deleteOne({ _id: req.params.id });
    res.json({
      status: "deleted",
    });
  } catch (e) {
    res.json({
      message: "failed",
      error: e.message,
    });
  }
});
app.listen(PORT, () => {
  console.log("Server connected");
});
