import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config({path:"./config/config.env"})

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.KEY, {
    expiresIn: "30d",
    });

  // Set JWT as an HTTP-Only Cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "None",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return token;
};

export default generateToken;
