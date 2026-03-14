import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import catererRoutes from "./routes/catererRoutes.js";

dotenv.config();
const app = express();

// Configure CORS
app.use(cors({
  origin: [
      "http://localhost:3000",
      "https://catering-services-nine.vercel.app",                
      "https://catering-services.onrender.com"   
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/caterers", catererRoutes);

//connectDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));
