import { Injectable } from "injection-js";

import BaseService from "../../../common/base.service";
import { UserDocument } from "../models/user";
import { UserRepository } from "../repository/user.repository";
import bcrypt from "bcrypt-nodejs";

@Injectable()
export class UserService extends BaseService<UserRepository, UserDocument> {
    constructor() {
        super();
        this._respository = new UserRepository();
    }

    add(user: UserDocument) {
        console.log(user);
        user.password = bcrypt.hashSync(user.password);
        console.log(user);
        this.create(user);
    }

}