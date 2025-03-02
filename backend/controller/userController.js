import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const { Username, Email, Password } = req.body;

    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = new User({ Username, Email, Password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const index = (req, res) => {
  res.json({ message: "User Index Route" });
};
