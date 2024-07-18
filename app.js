require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./router/post.router");
const fileUpload = require("express-fileupload")

const PORT = 3000;
const DATABASE_URL =
  "mongodb+srv://muxadev001:muxammedyar1@cluster0.zzp9qem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(express.json());
app.use(express.static("static"))
app.use(fileUpload({}))

//routes
app.use("/api/post", postRoute);

app.get("/post", (req, res) => {
  res.send("hello Express Post page");
});

const connectDataBase = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL, {})
      .then(() => console.log("connected to database: "));
    app.listen(PORT, () => {
      console.log("listening on port: hhtp://localhost:" + PORT);
    });
  } catch (error) {
    console.log(`error connecting to DataBase: ${error}`);
  }
};

connectDataBase();
