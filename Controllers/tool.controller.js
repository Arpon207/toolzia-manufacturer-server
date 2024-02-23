import Tool from "../models/Tool.model.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const createTool = async (req, res) => {
  const newTool = new Tool(req.body);
  try {
    const result = await newTool.save();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const getTools = async (req, res) => {
  const toolPerPage = 16;
  const page = req.query.currentPage;
  const query = req.query;
  const filter = {
    ...(query.category && { category: query.category }),
    ...(query.featured && { featured: JSON.parse(query.featured) }),
    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };

  console.log(filter);

  const tools = await Tool.find(filter)
    .skip((page - 1) * toolPerPage)
    .limit(toolPerPage);

  const categorizedTools = Tool.find(filter);
  const count = await categorizedTools.count();
  res.status(200).send({ tools, count });
};

export const getCategory = async (req, res) => {
  try {
    const result = await Tool.find();
    const categories = result.map((tool) => tool.category);
    const unique_categories = [...new Set(categories)];
    res.status(200).send(unique_categories);
  } catch (error) {
    console.log(error);
  }
};

export const getTool = async (req, res) => {
  try {
    const result = await Tool.findById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateTool = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const result = await Tool.updateOne(
      { _id: id },
      {
        $set: body,
      }
    );
    res.status(200).send(result);
  } catch (error) {}
};
export const updateAllTool = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const result = await Tool.updateMany(
      {},
      {
        $set: body,
      }
    );
    res.status(200).send(result);
  } catch (error) {}
};

export const deleteTool = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const selectedTool = await Tool.findById(id);
    const { image } = selectedTool;
    await cloudinary.uploader.destroy(image.id);
    const result = await Tool.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
