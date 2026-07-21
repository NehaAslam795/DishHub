import { useState } from "react";
import axios from "axios";

const defaultIngredients = [
  { id: 1, name: "Tomato", emoji: "🍅" },
  { id: 2, name: "Onion", emoji: "🧅" },
  { id: 3, name: "Garlic", emoji: "🧄" },
  { id: 4, name: "Potato", emoji: "🥔" },
  { id: 5, name: "Carrot", emoji: "🥕" },
  { id: 6, name: "Capsicum", emoji: "🫑" },
  { id: 7, name: "Chicken", emoji: "🍗" },
  { id: 8, name: "Egg", emoji: "🥚" },
  { id: 9, name: "Rice", emoji: "🍚" },
  { id: 10, name: "Cheese", emoji: "🧀" },
  { id: 11, name: "Milk", emoji: "🥛" },
  { id: 12, name: "Mushroom", emoji: "🍄" },
  { id: 13, name: "Corn", emoji: "🌽" },
  { id: 14, name: "Broccoli", emoji: "🥦" },
  { id: 15, name: "Fish", emoji: "🐟" },
  { id: 16, name: "Beef", emoji: "🥩" },
];

function RecipeForm({
  setRecipe,
  category,
}) {

  const [ingredients, setIngredients] = useState(defaultIngredients);
  const [selected, setSelected] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleIngredient = (name) => {

    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }

  };

  const addIngredient = () => {

    if (newIngredient.trim() === "") return;

    const item = {
      id: Date.now(),
      emoji: "🥣",
      name: newIngredient.trim(),
    };

    setIngredients([...ingredients, item]);
    setSelected([...selected, newIngredient.trim()]);
    setNewIngredient("");

  };

  const removeIngredient = (name) => {

    setSelected(selected.filter((item) => item !== name));

  };

  const handleGenerate = async () => {

    if (selected.length === 0) {
      alert("Please select at least one ingredient.");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/recipes`,
  {
    ingredients: selected,
    category,
  }
);
      

      setRecipe(response.data.recipe);

      setTimeout(() => {

        const recipeSection =
          document.getElementById("recipe-result");

        if (recipeSection) {

          recipeSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 300);

    } catch (error) {

      console.error(error);

      alert("Failed to generate recipe.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      className="recipe-generator"
      id="generator"
    >

      <div className="ingredient-card">

        <div className="ingredient-top">

          <div>

            <h2>Your Ingredients</h2>

            <p>
              Select ingredients already available in your kitchen.
            </p>

          </div>

        </div>

        <h3 className="ingredient-heading">
          ✨ Popular Ingredients
        </h3>

        <div className="ingredient-grid">

        

                      {ingredients.map((item) => (

            <div
              key={item.id}
              className={`ingredient-box ${
                selected.includes(item.name) ? "active" : ""
              }`}
              onClick={() => toggleIngredient(item.name)}
            >

              <span>{item.emoji}</span>

              <p>{item.name}</p>

            </div>

          ))}

        </div>

        <h3 className="selected-heading">
          🛒 Selected Ingredients
        </h3>

        <div className="selected-container">

          {selected.length === 0 ? (

            <p className="empty-text">
              No ingredients selected yet.
            </p>

          ) : (

            selected.map((item) => (

              <div
                className="selected-chip"
                key={item}
              >

                <span>{item}</span>

                <button
                  type="button"
                  onClick={() => removeIngredient(item)}
                >
                  ✕
                </button>

              </div>

            ))

          )}

        </div>

        <div className="add-ingredient">

          <input
            type="text"
            placeholder="Ingredient not found? Add it..."
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addIngredient();
              }
            }}
          />

          <button
            type="button"
            className="add-btn"
            onClick={addIngredient}
          >
            + Add
          </button>

        </div>

        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={selected.length === 0 || loading}
        >

          {loading
            ? "⏳ Generating Recipe..."
            : "🍽️ Generate Recipe"}

        </button>

      </div>

    </section>

  );

}

export default RecipeForm;