const http = require("http");
const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

//get method
app.get("/", (req, res) => {
  res.status(200).json({ message: "hell Express" });
});

//post method
app.post("/", (req, res) => {
  //   res.status(200).json({ message: "hello Express" });
  const { lastName, firstName } = req.body;
  res.send("My firstName is " + firstName + " and my lastName is " + lastName);
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

app.listen(PORT, () => {
  console.log("listening on port: hhtp://localhost:" + PORT);
});
