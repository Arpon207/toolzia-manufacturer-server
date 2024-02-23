import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../Controllers/order.controller.js";
import verifyToken from "./../utils/verifyToken.js";
import verifyAdmin from "./../utils/verifyAdmin.js";

const router = express.Router();

//create order
router.post("/add", verifyToken, createOrder);

//get all orders (admin)
router.get("/all", verifyToken, verifyAdmin, getOrders);

//get orders by email (user)
router.get("/:email", verifyToken, getOrder);

//update order by id
router.put("/:id", verifyToken, verifyAdmin, updateOrder);

//delete order by id
router.delete("/:id", verifyToken, verifyAdmin, deleteOrder);

export default router;
