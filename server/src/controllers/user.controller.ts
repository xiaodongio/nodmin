import { Request, Response } from "express";
import { User } from "../models/User";
import { WriteError } from "mongodb";

/**
 * userList
 * @param req
 * @param res
 */
export let userList = (req: Request, res: Response) => {
  User.create({
    login_name: "admin",
    password:"123"
  });
  console.log("created !")
  res.json({"result": "users"});
};
