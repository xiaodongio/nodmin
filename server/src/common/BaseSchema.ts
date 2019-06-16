import mongoose from "mongoose";


export default class BaseSchema extends mongoose.Schema {

  public constructor(definition?: mongoose.SchemaDefinition, options?: mongoose.SchemaOptions) {
    super(definition, options);
    this.add({
      create_time: {
        type: Number
      },
      create_by: {
        type: mongoose.Schema.Types.ObjectId
      },
      update_time: {
        type: Number
      },
      update_by: {
        type: mongoose.Schema.Types.ObjectId
      },
      del_flag: {
        type: Boolean
      },
      remark: {
        type: String
      }
    });
  }

}