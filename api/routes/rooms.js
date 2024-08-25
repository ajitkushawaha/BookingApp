import express from "express";
import { verifiedAdmin } from "./../utils/veryfiedToken.js";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "./../controllers/room.js";
const router = express.Router();

//CREATE
router.post("/:hotelid", verifiedAdmin, createRoom);

//UPDATE
router.put("/:id", verifiedAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifiedAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

export default router;
