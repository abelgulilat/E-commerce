import path from "path";
import express from "express";
import cookieParser from "cookie-parser";

import userRouter from "./route/userRouter.js"
import category from "./route/categoryRoutes.js"
import productRoutes from "./route/productRoutes.js";
import uploadRoutes from "./route/uploadRoutes.js";
import orderRoutes from "./route/orderRoutes.js";

import cors from "cors"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors())

app.use("/api/v1/user",userRouter)
app.use("/api/v1/category",category)
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/orders", orderRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));


app.get("/api/config/paypal", (req, res) => {
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

export default app;