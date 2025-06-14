import express from "express";
import userRouter from "./routes/userRoute.js";
import dishRouter from "./routes/dishRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/dish", dishRouter);

app.get("/", (req, res) => {
  res.status(200).send("Restaurant App");
});

export default app;
