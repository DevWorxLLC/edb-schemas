import { Model } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type ImageDoc = MongooseDefaults & {
    exerciseId: string;
    nanoid: string;
    withWatermark: boolean;
};
export type ImageModel = Model<ImageDoc>;
export declare const Image: ImageModel;
