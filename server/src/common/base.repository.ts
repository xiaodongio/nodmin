import mongoose from "mongoose";

export default class BaseRepository< T extends mongoose.Document> {

  private _model: mongoose.Model<mongoose.Document>;

  constructor (schemaModel: mongoose.Model<mongoose.Document>) {
      this._model = schemaModel;
  }

  async create (item: T) {
      console.log(123);
      console.log(this._model);
      const result =  await this._model.create(item);
      return result;
  }

  async findAll () {
      return await this._model.find({}).exec();
  }

  update (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
      this._model.update({_id: _id}, item, callback);
  }

  delete (_id: string, callback: (error: any, result: any) => void) {
      this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, undefined));
  }

  async findById (_id: string) {
      return await this._model.findById( _id).exec();
  }

  private toObjectId (_id: string): mongoose.Types.ObjectId {
      return mongoose.Types.ObjectId.createFromHexString(_id);
  }

}
