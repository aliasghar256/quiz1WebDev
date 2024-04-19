// CardComponent.jsx
import React from "react";
import { list } from "../../data/Data"; // Ensure this points to the correct data source
import "./RecentCard.css"; // Ensure CSS is properly set up

const CardComponent = () => {
  return (
    <div className="content">
      {list.map((val, index) => {
        const { cover, category, location, name, price, type, currency } = val;
        return (
          <div className="card" key={index}>
            <img src={cover} alt={name} className="card-img" />
            <div className="card-content">
              <div
                className="category-label"
                style={{
                  background:
                    category === "Asset Ready for Possession"
                      ? "#25b5791a"
                      : "#ff98001a",
                  color:
                    category === "Asset Ready for Possession"
                      ? "#25b579"
                      : "#ff9800",
                }}
              >
                {category}
              </div>
              <h5 className="card-title">{name}</h5>
              <p className="card-info">
                <i className="fa fa-location-dot"></i> {location}
              </p>
              <div className="card-action">
                <button className="btn">View Details</button>
                <p className="price">
                  <span className="starting-from">Starting from </span>
                  {currency} {price}
                </p>
              </div>
              <div className="card-type">{type}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
