import cors from "cors";
import express, { Router } from "express";
import console_logger from "../middlewares/console_logger.js";

import { userRouter } from "../routers/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rootRouter = Router();
rootRouter.get("/", async function (req, res, next) {
  try {
    res.status(200).send("Hello, Hyoro Jasik");
  } catch (err) {
    console_logger("Root Router", err.message, true);
    next(err);
  }
});

app.use(rootRouter);
app.use(userRouter);

export { app };
