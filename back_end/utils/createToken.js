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
      secure: true,
      sameSite: "None",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    // res.json({token})
    return token;
};

export default generateToken;
