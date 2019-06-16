import { User } from "../models/User";
import express from "express";

const router = express.Router();

router.get("/userList", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json({users});
  } catch (err) {
    next(err);
  }
});

export default router;