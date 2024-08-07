const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  picture: { type: String}
},{ Timestamp: true});

module.exports = model("Post", postSchema);
