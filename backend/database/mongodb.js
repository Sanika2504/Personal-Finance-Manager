import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("MongoDB URI is missing in .env file");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true, // This is no longer needed
            useUnifiedTopology: true, // This is no longer needed
        });
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    }
};

export default connectDB;
