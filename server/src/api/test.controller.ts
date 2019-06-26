import { JsonController, QueryParam, Get } from "routing-controllers";

@JsonController()
export class TestController {

  @Get("/test")
  test(@QueryParam("name") name: string): string {
    if (!name) {
      name = "world";
    }
    return `hello ${name}`;
  }

}
