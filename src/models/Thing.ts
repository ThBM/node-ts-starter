import Mongoose from "../services/Mongoose";

export interface IThing extends Mongoose.Document {
  name: string
  //fields: Mongoose.Types.DocumentArray<IField>
}

export const ThingSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  //fields: [FieldSchema],
});

const Thing = Mongoose.model<IThing>('Thing', ThingSchema);
export default Thing;
