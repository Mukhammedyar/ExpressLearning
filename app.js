require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");
const PORT = process.env.PORT || 3000;
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://muxadev001:muxammedyar1@cluster0.zzp9qem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;";
const app = express();

app.use(express.json());

//get method
app.get("/", async (req, res) => {
  try {
    const allPosts = await postModel.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//post method
app.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = await postModel.create({ title, body });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete method
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(id + "-item successfully deleted");
});

//update put method
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.send(
    id + "-item successfully edited and his body: " + JSON.stringify(body)
  );
});

app.get("/post", (req, res) => {
  res.send("hello Express Post page");
});

const connectDataBase = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("connected to database: "));
    app.listen(PORT, () => {
      console.log("listening on port: hhtp://localhost:" + PORT);
    });
  } catch (error) {
    console.log(`error connecting to DataBase: ${error}`);
  }
};

connectDataBase();
