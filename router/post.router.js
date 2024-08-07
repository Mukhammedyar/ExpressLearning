const express = require("express");
const postController = require("../controllers/postController");
const logger = require("../middlewares/logger");

const router = express.Router();
//get method
router.get("/get-all", postController.getAll);
router.post("/create", logger, postController.create);
router.delete("/delete/:id", postController.delete);
router.put("/update/:id", postController.update);
router.put("/get-one/:id", postController.getOne);

module.exports = router;
