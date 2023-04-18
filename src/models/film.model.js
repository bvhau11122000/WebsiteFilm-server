import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.option.js";

export default mongoose.model(
  "Film",
  mongoose.Schema({
    
    moviesname: {
      type: String,
      required: true
    },
    mediaRate: {
      type: String,
      required: true
    },
    mediaType: {
      type: String,
      enum: ["tv", "movie"],
      required: true
    },
    mediaId: {
      type: String,
      required: true
    },
    mediaTitle: {
      type: String,
      required: true
    },
    mediaPoster: {
      type: String,
      required: true
    },
  }, modelOptions)
);






