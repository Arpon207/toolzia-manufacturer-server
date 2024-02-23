import express from "express";
import {
  createReview,
  deleteReview,
  deleteReviewByAdmin,
  getReview,
  getReviews,
} from "./../Controllers/review.controller.js";
import verifyToken from "./../utils/verifyToken.js";
import verifyAdmin from "./../utils/verifyAdmin.js";

const router = express.Router();

//create review (only users)
router.post("/add", verifyToken, createReview);

//get all reviews
router.get("/all", getReviews);

//get reviews by email
router.get("/byEmail", verifyToken, getReview);

//delete review by id
router.delete("/:id", verifyToken, deleteReview);

//delete review by id (admin)
router.delete("/:id", verifyToken, verifyAdmin, deleteReviewByAdmin);

export default router;
