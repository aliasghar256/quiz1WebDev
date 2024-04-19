// Blog.jsx
import React, { useState, useCallback } from "react";
import RecentCard from "./RecentCard";
import axios from "axios";

// import { list } from "../data/Data"; // Assuming this is where your data comes from

// Define the GET request
axios
  .get("http://localhost:5000/recipe/view-all-recipes")
  .then((response) => {

    })
  .catch((error) => {
    // Handle errors
  });

  return (
    <>
      <section className="blog-out mb">
        <div className="container recent">
          <RecentCard cards={filteredList} />
        </div>
      </section>
    </>
  );
};

export default Recipes;
