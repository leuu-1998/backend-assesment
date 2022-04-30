import express from "express";
import {
  createOneListFavs,
  deleteOneListFavs,
  getAllListFavs,
  getOneListFavs,
} from "../controllers/user.controller.js";
//import controllers

import { isAuthenticated } from "../utils/middlerwares/authverify.js";

const router = express.Router();

//define routes with controllers
router.route("/api/favs").get(isAuthenticated, getAllListFavs);
router.route("/api/favs").post(isAuthenticated, createOneListFavs);
router.route("/api/favs/:id").get(isAuthenticated, getOneListFavs);
router.route("/api/favs/:id").delete(isAuthenticated, deleteOneListFavs);
export default router;
