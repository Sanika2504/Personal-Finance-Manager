import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    Username: { type: String, required: ["Username required"] },
    Email: { type: String, required: ["Email required"] },
    Password: { type: String, required: ["Password required"] },
  },
  { timestamps: true }
);

export default new mongoose.model("User", userSchema);