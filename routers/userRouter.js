import { Router } from "express";
import { userAuthService } from "../services/userService.js";

const userRouter = Router();

userRouter.get("/user/:email", async (req, res) => {
  try {
    const user = await userAuthService.getUserByEmail(
      req.params.email,
      req.body.password
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.post("/user/signup", async (req, res) => {
  try {
    const { email, username, password, avatar } = req.body;
    const user = await userAuthService.createUser(
      email,
      username,
      password,
      avatar
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.put("/user/activate/:userId", async (req, res) => {
  try {
    const user = await userAuthService.updateActivationStatus(
      req.params.userId,
      req.body.isActive
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.delete("/user/:userId", async (req, res) => {
  try {
    await userAuthService.deleteUserById(req.params.userId);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.put("/user/profile/:userId", async (req, res) => {
  try {
    const updatedUser = await userAuthService.updateProfile(
      req.params.userId,
      req.body
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.post("/user/verify-code/:userId", async (req, res) => {
  try {
    const isSuccess = await userAuthService.verifyCode(
      req.params.userId,
      req.body.code
    );
    res.json({ success: isSuccess });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { userRouter };
