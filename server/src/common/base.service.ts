import BaseRepository from "./base.repository";
import mongoose from "mongoose";


export default class BaseService<R extends BaseRepository<T>, T extends mongoose.Document> {

  protected _respository: R;

  async create (item: T) {
    await this._respository.create(item);
  }

  async findAll () {
    return await this._respository.findAll();
  }

  async update (_id: string, item: T, callback: (error: any, result: any) => void) {
    const res = await this.get(_id);
    this._respository.update(res._id, item, callback);
  }

  delete (_id: string, callback: (error: any, result: any) => void) {
    this._respository.delete(_id , callback);
  }

  async get (_id: string) {
    return await this._respository.findById(_id);
  }

}