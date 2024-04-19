// Blog.jsx
import React, { useState, useCallback } from "react";
import RecentCard from "./RecentCard";
import axios from "axios";

// import { list } from "../data/Data"; // Assuming this is where your data comes from

export const Recipes = () => {
  const [Recipes, setRecipes] = useState([]);

  // Define the GET request
  axios
    .get("http://localhost:5000/recipe/view-all-recipes")
    .then((response) => {
      Recipes = response.recipes;
    })
    .catch((error) => {
      // Handle errors
    });

  return (
    <>
      <section className="blog-out mb">
        <div className="container recent">
          <RecentCard cards={Recipes} />
        </div>
      </section>
    </>
  );
};

export default Recipes;
