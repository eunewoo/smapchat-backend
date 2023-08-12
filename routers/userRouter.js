import { Router } from "express";
import { userAuth } from "../services/userService.js";
import console_logger from "../middlewares/console_logger.js";

const userRouter = Router();

userRouter.get("/user", async (req, res, next) => {
  try {
    res.status(200).send({ result: "succeed to test" });
  } catch (err) {
    next(err);
  }
});

userRouter.post("/user/signup", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) throw new Error("invalid body data");

    const { phoneNumber, name, gender, bod, height, walkgoal } = req.body;
    console.log("Trying to sign up...");

    const BoD_elements = bod.split("-");
    const BoD_dateform = new Date(
      BoD_elements[0],
      BoD_elements[1],
      BoD_elements[2]
    );

    const NEW_USER = await userAuth.addUser({
      phoneNumber,
      name,
      gender,
      bod: BoD_dateform,
      height,
      walkgoal,
    });

    if (NEW_USER.errorMsg) throw new Error(NEW_USER.errorMsg);
    return res.status(201).json(NEW_USER);
  } catch (err) {
    next(err);
  }
});

userRouter.post("/user/signin", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) throw new Error("invalid body data");

    const { id, password } = req.body;
    console.log("SignIn Trying");

    const USER = await userAuth.checkUserByIdPw({ id, password });

    const TODAY = new Date();
    const BoD = new Date(USER.bod);

    const CALCULATED_AGE = TODAY.getFullYear() - BoD.getFullYear();

    const SEX_STRING = ["Male", "Female"][USER.sex + 1];

    if (!USER) throw new Error("no user");
    return res.status(200).send({
      uid: USER._id,
      phoneNumber: USER.phoneNumber,
      name: USER.name,
      gender: GENDER_STRING,
      bod: CALCULATED_AGE,
      height: USER.height,
      workgoal: USER.workgoal,
    });
  } catch (err) {
    next(err);
  }
});

export { userRouter };
