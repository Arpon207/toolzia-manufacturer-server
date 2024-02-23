import Review from "../models/Review.model.js";

export const createReview = async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const result = await newReview.save();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (req, res) => {
  const result = await Review.find();
  res.status(200).send(result);
};

export const getReview = async (req, res) => {
  const email = req.body.email;
  try {
    const result = await Review.find({ email: email });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async (req, res) => {
  const id = req.params.id;
  const email = req.body.email;
  try {
    const result = await Review.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteReviewByAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Review.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
