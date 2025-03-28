import { Model, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type ImageDoc = MongooseDefaults & {
    exerciseId: string;
    nanoid: string;
    withWatermark: boolean;
};
export type ImageModel = Model<ImageDoc>;
export declare const ImageSchema: Schema<ImageDoc, ImageModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ImageDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ImageDoc>> & import("mongoose").FlatRecord<ImageDoc> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const ImageModelName = "Image";
