import express from "express";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome to Career Connect API",
  })
});

export default app;