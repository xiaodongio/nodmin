import * as express from "express";
import testController from "./test.controller";
import userController from "./user.controller";

export default function api(server: express.Express) {
  server.use("/api/v1/test", testController);
  server.use("/api/v1/user", userController);
}