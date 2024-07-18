const postService = require("../service/post.service");

class PostController {
  async getAll(req, res) {
    try {
      console.log(req.requestTime);
      const allPosts = await postService.getAll();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async create(req, res) {
    try {
      const newPost = await postService.create(req.body, req.files.picture);
      res.send(res.status(200).json(newPost));
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    const post = await postService.delete(req.params.id);
    res.status(200).json(post);
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const body = req.body;
      const post = await postService.update(body, id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req, res) {
    try {
      const post = await postService.getOne(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
