import express from "express";
import posts from "../database/posts";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  return res.send("this is apiRouter");
});

apiRouter.post("/posts", (req, res) => {
  try {
    const id = Date.now();
    const { title, text } = req.body;
    const postToPost = { id, title, text };
    posts.push(postToPost);
    return res.status(200).send("successfully posted");
  } catch (error) {
    console.log(error);
    return res.status(400).send("unable to post");
  }
});

apiRouter.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postToGet = posts.find((post) => String(post.id) === id);
  return res.send(postToGet);
});

export default apiRouter;
