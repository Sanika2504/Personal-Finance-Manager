import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  date: Date,
  type: String,
  user_id: mongoose.Types.ObjectId,
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);