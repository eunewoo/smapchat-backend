import is from "@sindresorhus/is";
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

walkLogRouter.get("/walkLog/:phoneNumber", async (req, res, next) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const walkLog = await validateWalkLog.findByPhoneNumber({ phoneNumber });
    if (!walkLog) {
      return res.status(404).send({ error: "Walk logs not found" });
    }
    return res.status(200).send({ walkLog });
  } catch (err) {
    next(err);
  }
});

walkLogRouter.get("/walkLog/:phoneNumber/:date", async (req, res, next) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const date = req.params.date;
    const LOGS = await validateWalkLog.findByPhoneNumberwithDate({
      phoneNumber,
      date,
    });
    if (!LOGS || LOGS.length === 0) {
      return res.status(404).send({ error: "Walk logs not found" });
    }
    return res.status(200).send({ walkLogs: LOGS });
  } catch (err) {
    next(err);
  }
});

walkLogRouter.post("/walkLog/update", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) throw new Error("invalid body data");

    const { phoneNumber, steps, date } = req.body;

    console.log("req.body", req.body);

    const NEW_OPINION = await validateWalkLog.addWalkLog({
      phoneNumber,
      steps,
      date,
    });

    console.log("NEW_OPINION : ", NEW_OPINION);

    if (!NEW_OPINION) throw new Error("Failed to write a new opinion");
    return res.status(200).send({ result: "A new Opinion has been saved" });
  } catch (err) {
    next(err);
  }
});

export { walkLogRouter };
