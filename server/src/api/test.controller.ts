import { Request, Response } from "express";
import { JsonController, QueryParam, Get, Req, Res } from "routing-controllers";

@JsonController()
export class TestController {

  @Get("/test")
  test(@Req() request: Request, @Res() response: Response, @QueryParam("name") name: string) {
    if (!name) {
      name = "world";
    }
    return response.send(`hello ${name}`);
  }

}
