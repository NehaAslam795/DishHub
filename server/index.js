import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeRoutes from "./routes/recipeRoutes.js";



console.log("GROQ =", process.env.GROQ_API_KEY);
console.log("MONGO =", process.env.MONGO_URI ? "Loaded" : "Missing");
console.log("GROQ =", process.env.GROQ_API_KEY ? "Loaded" : "Missing");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipeRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Dish Hub API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);