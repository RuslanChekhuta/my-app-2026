import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ productName, price }) {
  const [count, setCount] = useState(0);

  const handleUpdateCount = (amount) => {
    setCount((prev) => {
      const next = prev + amount;
      return next < 0 ? 0 : next;
    });
  };

  return (
    <div className="product-card">
      <h3>{productName}</h3>
      <p>Цена: {price} $</p>

      <div className="controls">
        <button onClick={() => handleUpdateCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => handleUpdateCount(1)}>+</button>
      </div>

      <p>Итого: {count * price} $</p>
    </div>
  );
}

export default ProductCard;
