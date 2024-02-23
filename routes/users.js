import express from "express";
import {
  deleteUser,
  getToken,
  getUser,
  getUsers,
  handleAdminReq,
} from "./../Controllers/user.controller.js";
import verifyToken from "./../utils/verifyToken.js";
import verifyAdmin from "./../utils/verifyAdmin.js";

const router = express.Router();

router.put("/getToken/:email", getToken);

//get all users (admin)
router.get("/all", verifyToken, verifyAdmin, getUsers);

//get user by email;
router.get("/userByEmail", verifyToken, getUser);

//delete user by email;
router.delete("/delete", verifyToken, deleteUser);

//make admin (admin);
router.put("/makeAdmin/:email", verifyToken, verifyAdmin, handleAdminReq);

export default router;
