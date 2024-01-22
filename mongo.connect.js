import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/testdb");
  } catch (error) {
    console.log("error :>> ", error);
  }
};
