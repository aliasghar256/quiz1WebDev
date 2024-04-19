// CardComponent.jsx
import React from "react";
// import { list } from "../../data/Data"; // Ensure this points to the correct data source
import "./RecentCard.css"; // Ensure CSS is properly set up

const CardComponent = ({ recipes }) => {
  return (
    <div className="content">
      {recipes.map((recipe, index) => {
        const { name, description } = recipe; // destructure each recipe
        return (
          <div className="card" key={index}>
            <div className="card-content">
              <h5 className="card-title">{name}</h5>
              <p className="card-info">
                <i className="fa fa-location-dot"></i> {description}
              </p>
              <div className="card-action">
                <button className="btn">View Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardComponent;
