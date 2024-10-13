import express from "express";
const router = express.Router();

import {
    createOrder,
    getAllOrders,
    getUserOrders,
    countTotalOrders,
    calculateTotalSales,
    calcualteTotalSalesByDate,
    findOrderById,
    markOrderAsPaid,
    markOrderAsDelivered,
} from "../controller/orderController.js";

import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";

router.post("/",authenticate, createOrder)
router.get("/",authenticate, authorizeAdmin, getAllOrders);

router.get("/mine",authenticate, getUserOrders);
router.get("/total-orders",countTotalOrders);
router.get("/total-sales",calculateTotalSales);
router.get("/total-sales-by-date",calcualteTotalSalesByDate);
router.get("/:id",authenticate, findOrderById);
router.put("/:id/pay",authenticate, markOrderAsPaid);
router.put("/:id/deliver",authenticate, authorizeAdmin, markOrderAsDelivered);

export default router;
