import express from "express";
import formidable from "express-formidable";
const router = express.Router();

// controllers
import {addProduct,updateProductDetails,removeProduct,fetchProducts,fetchProductById,fetchAllProducts,addProductReview,fetchTopProducts,fetchNewProducts,filterProducts,} from "../controller/productController.js";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";
import checkId from "../middleware/checkId.js";

router.get("/",fetchProducts)
router.post("/",authenticate, authorizeAdmin, formidable(), addProduct);

router.get("/allproducts",fetchAllProducts);
router.post("/:id/reviews",authenticate, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router.get("/:id",fetchProductById)
router.put("/:id",authenticate, authorizeAdmin, formidable(), updateProductDetails)
router.delete("/:id",authenticate, authorizeAdmin, removeProduct);

router.post("/filtered-products",filterProducts);

export default router;
