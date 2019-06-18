import { UserService } from "../modules/sys/service/user.service";
import { Request, Response } from "express";
import { JsonController, Param, Body, Get, Post, Req, Res } from "routing-controllers";
import { UserDocument } from "../modules/sys/models/user";

@JsonController()
export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService;
  }

  @Get("/userList")
  getAll() {
      return this.userService.findAll();
  }

  @Get("/user/:id")
  getOne(@Req() request: Request,
          @Res() response: Response,
          @Param("id") id: string) {
      return response.send(this.userService.get(id));
  }

  @Post("/user")
    post(@Req() request: Request,
         @Res() response: Response,
         @Body() user: UserDocument) {
        return response.send(this.userService.add(user));
    }
}




// const router = express.Router();

// router.get("/userList", async (req, res, next) => {
//   try {
//     const users = await User.find({});
//     res.json({users});
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/user", async (req, res, next) => {
//   try {
//     const user = new User({
//       login_name: req.body.login_name,
//       password: req.body.password
//     });
//     await user.save();
//   } catch (err) {
//     next(err);
//   }
// });


// export default router;