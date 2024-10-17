import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/config.js";

dotenv.config({path:"./config/config.env"})

const port = process.env.PORT || 5000;






const start=()=>{
  try {
        connectDB();

        app.listen(port, () => console.log(`Servers running on port: http://localhost:${port}`));
    
  } catch (error) {
    console.log("something went wrong")
    
  }
}

start();