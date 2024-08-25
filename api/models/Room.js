import mongoose from "mongoose";
// // const { Schema } = mongoose;

const RoomsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeaple: {
      type: Number,
    },
    roomNumber: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomsSchema);
