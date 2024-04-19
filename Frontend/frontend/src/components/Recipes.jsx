import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./RecentCard";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe/view-all-recipes")
      .then((response) => {
        setRecipes(response.data.recipes); // make sure the response structure is correct
      })
      .catch((error) => {
        console.error("Failed to fetch recipes:", error);
      });
  }, []); // Empty dependency array to run only once after the component mounts

  return (
    <>
      <section className="blog-out mb">
        <div className="container recent">
          <CardComponent recipes={recipes} />
        </div>
      </section>
    </>
  );
};

export default Recipes;
