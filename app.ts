import express from "express";
//routes
import apiRouter from "./routes/apiRouter";

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`listening to the port ${PORT}`);
});
