import { useState } from "react";

function RecipeCard({ recipe }) {

  const [copied, setCopied] = useState(false);

  const copyRecipe = () => {

    if (!recipe) return;

    navigator.clipboard.writeText(recipe.recipe);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

  };

  if (!recipe) {
    return (
      <section
        className="recipe-result"
        id="recipe-result"
      >

        <span className="section-tag">
          YOUR RECIPE
        </span>

        <h2>AI Generated Recipe</h2>

        <div className="recipe-box">

          <p>
            🍽️ Your delicious recipe will appear here after you click the{" "}
            <strong>Generate Recipe</strong> button.
          </p>

        </div>

      </section>
    );
  }

  return (

    <section
      className="recipe-result"
      id="recipe-result"
    >

      <span className="section-tag">
        YOUR RECIPE
      </span>

      <h2>🍽️ AI Generated Recipe</h2>

      <div className="recipe-box">

        <h3>🥕 Ingredients Used</h3>

        <div className="recipe-tags">

          {recipe.ingredients.map((item, index) => (

            <span
              key={index}
              className="recipe-tag"
            >

              {item}

            </span>

          ))}

        </div>

        <hr />

        <h3>👨‍🍳 Recipe</h3>

        <p className="recipe-text">

          {recipe.recipe}

        </p>

        <div className="recipe-actions">

          <button
            className="copy-btn"
            onClick={copyRecipe}
          >

            {copied ? "✅ Copied!" : "📋 Copy Recipe"}

          </button>

        </div>

      </div>

    </section>

  );

}

export default RecipeCard;