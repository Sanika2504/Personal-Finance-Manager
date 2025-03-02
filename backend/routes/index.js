import { Router } from "express";
import passport from "passport";
import TransactionsApi from "./transactionapi.js";
import AuthApi from "./authapi.js";
import UserApi from "./userapi.js";

const router = Router();

// Define routes
router.use("/transaction", TransactionsApi);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

// Error handling for routes
router.use((err, req, res, next) => {
  console.error('Route Error:', err);
  res.status(500).json({ message: err.message || "Route error occurred" });
});

export default router;