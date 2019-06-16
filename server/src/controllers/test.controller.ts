import { Request, Response } from "express";

/**
 * test
 * @param req
 * @param res
 */
export let test = (req: Request, res: Response) => {
  let name = req.params["name"];
  if (!name) {
    name = "nodmin";
  }
  res.json({"result": `hello ${name}`});
};
