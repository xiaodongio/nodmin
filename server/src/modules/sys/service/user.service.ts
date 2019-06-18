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
        bcrypt.hash(user.password, "10", function(err, hash) {
            user.password = hash;
        });
        user.save();
        this.create(user);
    }

}