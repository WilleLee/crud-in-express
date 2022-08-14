import express from "express";

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`listening to the port ${PORT}`);
});
