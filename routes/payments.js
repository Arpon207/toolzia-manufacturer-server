import express from "express";
import Payment from "../models/payment.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const payment = new Payment(req.body);
  try {
    const result = await payment.save();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

export default router;
