import mongoose, { Schema } from "mongoose";

const Address = new Schema({
  pincode: { type: Number, min: 4, max: 6 },
  city: { type: String },
  state: { type: String },
});

const Person = new Schema({
  firstName: { type: String, required: true, default: "First Name" },
  lastName: { type: String, required: true, default: "Last Name" },
  age: { type: Number, min: 1, max: 100 },
  friend: mongoose.Schema.ObjectId,
  address: Address,
  hobby: [String],
});

export default mongoose.model("Person", Person);
