import { useState } from "react";
import italian from "../assets/italian.png";
import burger from "../assets/burger.png";
import healthy from "../assets/healthy.png";
import dessert from "../assets/dessert.png";

function Categories({
  category,
  setCategory,
}) {



  const categories = [
    {
      id: 1,
      title: "Italian",
      image: italian,
      desc: "Pasta, Pizza & More",
    },
    {
      id: 2,
      title: "Fast Food",
      image: burger,
      desc: "Burgers & Snacks",
    },
    {
      id: 3,
      title: "Healthy",
      image: healthy,
      desc: "Fresh & Nutritious Meals",
    },
    {
      id: 4,
      title: "Desserts",
      image: dessert,
      desc: "Cakes & Sweet Treats",
    },
  ];

  const handleCategory = (category) => {

setCategory(category);
    const generator =
      document.getElementById("generator");

    if (generator) {

      generator.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <section className="categories" id="categories">

      <span className="section-tag">
        POPULAR CATEGORIES
      </span>

      <h2>Explore Delicious Recipes</h2>

      <div className="category-grid">

        {categories.map((item) => (

          <div
            key={item.id}
            className={`category-card ${
              category === item.title
                ? "active-category"
                : ""
            }`}
            onClick={() => handleCategory(item.title)}
          >

            <div className="category-image">

              <img
                src={item.image}
                alt={item.title}
              />

            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Categories;