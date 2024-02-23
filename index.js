import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import toolsRoute from "./routes/tools.js";
import usersRoute from "./routes/users.js";
import ordersRoute from "./routes/orders.js";
import reviewsRouter from "./routes/reviews.js";
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

//connection

const connection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(cors());
app.use(express.json());
app.use("/toolzia/api/tools/", toolsRoute);
app.use("/toolzia/api/users/", usersRoute);
app.use("/toolzia/api/orders/", ordersRoute);
app.use("/toolzia/api/reviews/", reviewsRouter);

//api

app.get("/", async (req, res) => {
  res.send("Toolzia server.");
});

app.listen(port, () => {
  connection();
});
