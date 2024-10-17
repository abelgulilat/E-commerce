import express from "express";
import {createUser,loginUser,logoutCurrentUser,getAllUsers,getCurrentUserProfile,updateCurrentUserProfile,deleteUserById,getUserById,updateUserById} from "../controller/userController.js"
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js"
const router = express.Router();


router.post("/",createUser);
router.get("/",authenticate, authorizeAdmin, getAllUsers);
router.post("/login",loginUser);
router.post("/logout",logoutCurrentUser);


router.get("/profile", authenticate, getCurrentUserProfile);
router.put("/updateprofile", authenticate, updateCurrentUserProfile);

router.delete("/:id",authenticate,authorizeAdmin,deleteUserById);
router.get("/:id",authenticate,authorizeAdmin,getUserById);
router.put("/:id",authenticate, authorizeAdmin, updateUserById);

export default router