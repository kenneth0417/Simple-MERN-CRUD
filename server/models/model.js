const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  blogName: {
    type: String,
    required: true,
  },
  blogTitle: {
    type: String,
    required: true,
  },
  blogBody: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
