import BaseRepository from "../../../common/base.repository";
import { User, UserDocument } from "../models/user";


export class UserRepository extends BaseRepository<UserDocument> {
  constructor() {
    super(User);
  }
}
