import express from "express";
import posts from "../database/posts";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  return res.send("this is apiRouter");
});

apiRouter
  .route("/posts")
  .get((req, res) => {
    return res.send(posts);
  })
  .post((req, res) => {
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

apiRouter
  .route("/posts/:id")
  .put((req, res) => {
    const { id } = req.params;
    const { title, text } = req.body;
    if (!posts.find((post) => String(post.id) === id))
      return res.status(400).send("no such post");
    posts.forEach((post) => {
      if (String(post.id) === id) {
        post.title = title;
        post.text = text;
        return res.status(200).send("successfully updated");
      }
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    function findIdx(): number | undefined {
      for (let i = 0; i < posts.length; i++) {
        if (String(posts[i].id) === id) return i;
      }
      return undefined;
    }
    const idx = findIdx();
    if (idx === undefined) return res.status(400).send("no such post");
    posts.splice(idx, idx + 1);
    return res.send("successfully deleted");
  })
  .get((req, res) => {
    const { id } = req.params;
    const postToGet = posts.find((post) => String(post.id) === id);
    return res.send(postToGet);
  });

export default apiRouter;
