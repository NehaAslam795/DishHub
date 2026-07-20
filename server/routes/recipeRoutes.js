import express from "express";
import { createRecipe } from "../controllers/recipeController.js";

const router = express.Router();

// Generate Recipe
router.post("/", createRecipe);

export default router;