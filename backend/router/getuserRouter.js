
import express from "express";
import { GetUsers } from "../controllers/getuserController.js";
const router=express.Router();
router.get("/", GetUsers);
export default router;