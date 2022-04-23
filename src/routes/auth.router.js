import express from "express";
//import controllers
import { signIn,signUp } from "../controllers/auth.controller.js";

const router = express.Router();

//define routes with controllers
router.route("/auth/local/login").post(signIn);
router.route("/auth/local/register").post(signUp);

export default router;