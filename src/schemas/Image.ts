import { DateTime } from "luxon";
import { Model, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type ImageDoc = MongooseDefaults & {
  exerciseId: string;
  nanoid: string;
  withWatermark: boolean;
};
export type ImageModel = Model<ImageDoc>;

export const ImageSchema = new Schema<ImageDoc, ImageModel>(
  {
    exerciseId: {
      type: String,
      required: true,
      index: true,
    },
    nanoid: {
      type: String,
      required: true,
      index: true,
    },
    withWatermark: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: String,
      default: DateTime.now().toISO(),
    },
  },
  {
    timestamps: false,
  }
);

export const ImageModelName = "Image";
