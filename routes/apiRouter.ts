import express from "express";
import posts from "../database/posts";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  return res.send("this is apiRouter");
});

apiRouter.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postToGet = posts.find((post) => String(post.id) === id);
  return res.send(postToGet);
});

export default apiRouter;
