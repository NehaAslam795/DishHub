import Recipe from "../models/Recipe.js";
import { generateRecipe } from "../services/geminiService.js";

export const createRecipe = async (req, res) => {

  try {

    const { ingredients, category } = req.body;

    if (!ingredients || ingredients.length === 0) {

      return res.status(400).json({
        success: false,
        message: "Ingredients are required",
      });

    }

    const recipe = await generateRecipe(
      ingredients,
      category
    );

    const newRecipe = await Recipe.create({

      ingredients,
      recipe,

    });

    res.status(201).json({

      success: true,
      recipe: newRecipe,

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,
      message: "Failed to generate recipe",

    });

  }

};