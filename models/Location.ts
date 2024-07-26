import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// LOCATION SCHEMA
const locationSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      description: "Country of the location",
    },
    city: {
      type: String,
      description: "City of the location",
    },
    place: {
      type: String,
      description: "Specific place name of the location",
    },
    address: {
      type: String,
      description: "Address of the location",
    },
    coordinates: {
      type: new mongoose.Schema({
        lat: {
          type: Number,
          description: "Latitude coordinate",
        },
        lng: {
          type: Number,
          description: "Longitude coordinate",
        },
      }),
      description: "Coordinates of the location",
    },
    price: {
      type: String,
      description: "Price associated with the location",
    },
    activities: [
      {
        type: String,
        description: "List of activities available at the location",
      }
    ],
    miscellaneous: {
      type: new mongoose.Schema({
        details: {
          type: String,
          description: "Miscellaneous details about the location",
        },
        notes: {
          type: String,
          description: "Additional notes about the location",
        },
      }),
      description: "Miscellaneous information about the location",
    },
    video_url: {
      type: String,
      description: "URL of the video associated with the location",
    },
    gcp_image_url: {
      type: String,
      description: "Google Cloud Platform image URL associated with the location",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
locationSchema.plugin(toJSON);

export default mongoose.models.Location || mongoose.model("Location", locationSchema);