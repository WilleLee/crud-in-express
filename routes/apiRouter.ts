import express from "express";
import posts from "../database/posts";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  return res.send("this is apiRouter");
});

export default apiRouter;
