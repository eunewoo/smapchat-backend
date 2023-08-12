import { Router } from "express";

import { validateWalkLog } from "../services/walkLogService.js";

const walkLogRouter = Router();

walkLogRouter.get("/walkLog", async (req, res, next) => {
  try {
    res.status(200).send({ result: "succeed to test" });
  } catch (err) {
    next(err);
  }
});

walkLogRouter.post("/walkLog/update", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) throw new Error("invalid body data");

    const { phoneNumber, steps, date } = req.body;
    if (!testansId) throw new Error("no author information");

    const NEW_OPINION = await validateWalkLog.addWalkLog({
      phoneNumber,
      steps,
      date,
    });

    if (!NEW_OPINION) throw new Error("Failed to write a new opinion");
    return res.status(200).send({ result: "A new Opinion has been saved" });
  } catch (err) {
    next(err);
  }
});

export { walkLogRouter };
