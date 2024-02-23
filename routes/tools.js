import express from "express";
import {
  createTool,
  deleteTool,
  getCategory,
  getTool,
  getTools,
  updateAllTool,
  updateTool,
} from "../Controllers/tool.controller.js";
import verifyAdmin from "../utils/verifyAdmin.js";
import verifyToken from "./../utils/verifyToken.js";

const router = express.Router();

//create tool (admin)
router.post("/add", verifyToken, verifyAdmin, createTool);

//get all tool
router.get("/all", getTools);

//get tool by id (admin)
// router.get("/:id", verifyToken, getTool);
router.get("/:id", getTool);

router.get("/all/categories", getCategory);

//update tool by id (admin)
router.put("/:id", verifyToken, verifyAdmin, updateTool);

router.put("/updateMany", updateAllTool);

//delete tool by id (admin)
router.delete("/:id", verifyToken, verifyAdmin, deleteTool);

export default router;
