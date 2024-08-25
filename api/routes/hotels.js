import express from "express";
import Hotel from "../models/Hotel.js";
import {verifiedAdmin } from './../utils/veryfiedToken.js';
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "./../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", verifiedAdmin, createHotel);

//UPDATE
router.put("/:id", verifiedAdmin, updateHotel);

//DELETE
router.delete("/:id/:hotelid", verifiedAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export default router;
