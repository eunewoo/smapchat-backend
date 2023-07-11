import { Router } from "express";
import { userHandle } from "../services/userService.js";
import console_logger from "../middlewares/console_logger.js";

const userRouter = Router();

userRouter.post("/user/create", async (req, res, next) => {
  try {
    const { name } = req.body;
    const NEW_USER = await userHandle.addUser({ name });

    res.status(201).send({ NEW_USER });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

userRouter.post("/user/count", async (req, res, next) => {
  try {
    const { oid } = req.body;
    const count = await userHandle.getCount({ oid });

    if (!count) throw Error("There is no count field in that user data");

    res.status(201).send({ count });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

userRouter.post("/user/update", async (req, res, next) => {
  try {
    const { oid, count } = req.body;
    const updated = await userHandle.updateCount({ oid, count });

    res.status(201).send({ updated });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

export { userRouter };
