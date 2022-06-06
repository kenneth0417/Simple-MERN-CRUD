const express = require("express");
const app = express();
const cors = require("cors");

const BlogModel = require("./models/model");

const mongoose = require("mongoose");

const URI =
  "mongodb+srv://MERN-Proj:test1234@simple-mern.0ncpd.mongodb.net/MERN-data?retryWrites=true&w=majority";

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-application.netlify.app"],
    credentials: true,
  })
);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await BlogModel.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
});

app.put("/edit", async (req, res) => {
  const id = req.body.id;
  const editName = req.body.editName;
  const editTitle = req.body.editTitle;
  const editBody = req.body.editBody;

  try {
    await BlogModel.findById(id, (err, val) => {
      val.blogName = editName;
      val.blogTitle = editTitle;
      val.blogBody = editBody;
      val.save();
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  const blogName = req.body.blogName;
  const blogTitle = req.body.blogTitle;
  const blogBody = req.body.blogBody;

  const NewBlog = new BlogModel({
    blogName: blogName,
    blogTitle: blogTitle,
    blogBody: blogBody,
  });

  try {
    await NewBlog.save();
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

app.get("/home", (req, res) => {
  BlogModel.find({}, (err, val) => {
    if (err) {
      console.log(err);
    }
    res.send(val);
  });
});

app.listen(3002, () => {
  console.log("Listening....");
});
