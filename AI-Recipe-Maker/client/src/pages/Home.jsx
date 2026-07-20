import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Categories from "../components/Categories";
import RecipeForm from "../components/RecipeForm";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

function Home() {

  const [recipe, setRecipe] = useState(null);
  const [category, setCategory] = useState("");

  return (
    <>
      <Navbar />

      <Hero />

      <WhyChoose />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <RecipeForm
        setRecipe={setRecipe}
        category={category}
      />

      <RecipeCard recipe={recipe} />

      <Footer />
    </>
  );
}

export default Home;