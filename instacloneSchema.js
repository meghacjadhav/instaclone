const mongoose = require("mongoose");

const instaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  likes: { type: Number, required: true },
  description: { type: String, required: true },
  PostImage: { type: String, required: true },
  date: { type: String, default: Date.now },
});

const instacloneSchema = mongoose.model("instacloneSchema", instaSchema);

module.exports = instacloneSchema;
