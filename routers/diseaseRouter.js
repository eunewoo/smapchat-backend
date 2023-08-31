import is from "@sindresorhus/is";
import { Router } from "express";
import { validatedisease } from "../services/diseaseService.js";

const diseaseRouter = Router();

diseaseRouter.get("/disease", async (req, res, next) => {
  try {
    res.status(200).send({ result: "succeed to test" });
  } catch (err) {
    next(err);
  }
});

diseaseRouter.get("/disease/:phoneNumber", async (req, res, next) => {
  try {
    const phoneNumber = req.params.phoneNumber;
    const disease = await validatedisease.findByPhoneNumber({ phoneNumber });
    if (!disease) {
      return res.status(404).send({ error: "Walk logs not found" });
    }
    return res.status(200).send({ disease });
  } catch (err) {
    next(err);
  }
});

diseaseRouter.post("/disease/update", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) throw new Error("invalid body data");

    const { phoneNumber, diseaseId, diseaseKind } = req.body;

    console.log("req.body", req.body);

    const NEW_OPINION = await validatedisease.changeDisease({
      phoneNumber,
      diseaseId,
      diseaseKind,
    });

    console.log("NEW_OPINION : ", NEW_OPINION);

    if (!NEW_OPINION) throw new Error("Failed to write a new opinion");
    return res.status(200).send({ result: "A new Opinion has been saved" });
  } catch (err) {
    next(err);
  }
});

export { diseaseRouter };
