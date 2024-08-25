import express from "express";
import { veryfiedToken, verifiedUser, verifiedAdmin } from './../utils/veryfiedToken.js'; 
import { createUser, updateUser, deleteUser, getUser, getUsers } from './../controllers/user.js';
 
const router = express.Router();

router.get("/checkauthentication", veryfiedToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})
router.get("/checkuser/:id", verifiedUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})
router.get("/checkadmin/:id", verifiedAdmin, (req, res, next) => {
    res.send("hello Admin, you are logged in and you can delete all account")
})

//CREATE
router.post("/", verifiedUser, createUser);

//UPDATE
router.put("/:id", verifiedUser,  updateUser);

//DELETE
router.delete("/:id", verifiedUser, deleteUser);

//GET
router.get("/:id", verifiedUser, getUser);
 
// GET ALL
router.get("/",verifiedAdmin, getUsers);

export default router