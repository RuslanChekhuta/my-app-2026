import React from "react";

const CryptoCard = ({ name, price, icon }) => {
  return (
    <div className="crypto-card">
      <span className="card-icon">{icon}</span>
      <h3>{name}</h3>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default CryptoCard;
