import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// import "./config/nodemailer.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });