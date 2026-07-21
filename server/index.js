import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Dish Hub API Running...");
});

const PORT = process.env.PORT || 5000;

// Start Server
const startServer = async () => {
  try {
    console.log("MONGO =", process.env.MONGO_URI ? "Loaded" : "Missing");
    console.log("GROQ =", process.env.GROQ_API_KEY ? "Loaded" : "Missing");

    await mongoose.connect(process.env.MONGO_URI, {
      family: 4,
    });

    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
};

startServer();