import express from "express";
import dotenv from "dotenv";
import connectDB from "./services/mongodb.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});