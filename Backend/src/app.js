import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome to Career Connect API",
  })
});

export default app;