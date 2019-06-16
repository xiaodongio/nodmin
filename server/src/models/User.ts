import BaseSchema from "../common/BaseSchema";
import mongoose from "mongoose";
import crypto from "crypto";

export type UserDocument = mongoose.Document & {

};


const userSchema = new BaseSchema({
  login_name: { type: String, unique: true },
  password: String,
  sex: {
    type: Number,
    default: 0
  },
  profile: {
    name: String,
    email: String,
    gender: String,
    phone: String,
    avatar: String
  }
});

userSchema.methods.gravatar = function (size: number) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash("md5").update(this.email).digest("hex");
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};


export const User = mongoose.model<UserDocument>("User", userSchema);