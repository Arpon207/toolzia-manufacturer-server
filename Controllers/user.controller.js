import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const getToken = async (req, res) => {
  const user = req.body;
  try {
    const result = await User.updateOne({ email: req.params.email }, user, {
      upsert: true,
    });
    const token = jwt.sign(
      { email: req.params.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).send(token);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  const result = await User.find();
  res.status(200).send(result);
};

export const getUser = async (req, res) => {
  const email = req.body.email;
  try {
    const result = await User.findOne({ email: email });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const result = await User.deleteOne({ email: email });
  res.status(200).send(result);
};

export const handleAdminReq = async (req, res) => {
  try {
    const result = await User.updateOne(
      { email: req.params.email },
      { isAdmin: true }
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
