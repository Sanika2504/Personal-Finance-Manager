import { Router } from "express";
import passport from "passport";
import * as UserController from "../controller/userController.js";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UserController.index
);

export default router;