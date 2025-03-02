import express from "express";

const router = express.Router();

// Temporary storage (Replace with database logic)
const users = [];

// 🚀 Signup Route
router.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
    }

    // Save user
    users.push({ username, email, password });

    res.status(201).json({ message: "Signup successful!" });
});

// 🚀 Login Route
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and Password are required" });
    }

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ token: "dummy-jwt-token", message: "Login successful!" });
});

export default router;
