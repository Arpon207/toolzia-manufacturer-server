import Order from "../models/Order.model.js";

export const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const result = await newOrder.save();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (req, res) => {
  const result = await Order.find();
  res.status(200).send(result);
};

export const getOrder = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await Order.find({ email: email });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (req, res) => {
  const updateDoc = req.body;
  try {
    const result = await Order.updateOne(
      { _id: req.params.id },
      { $set: updateDoc }
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (req, res) => {
  const result = await Order.findByIdAndDelete(req.params.id);
  res.status(200).send(result);
};
