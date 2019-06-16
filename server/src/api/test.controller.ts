
import express from "express";

const router = express.Router();

router.get("/test", (req, res, next) => {
  try {
    let name = req.query.name;
    if (!name) {
      name = "nodmin";
    }
    res.json({"result": `hello ${name}`});
  } catch (err) {
    next(err);
  }
});

export default router;