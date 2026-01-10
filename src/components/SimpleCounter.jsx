import React, { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <h3>Счетчик: {count}</h3>
      <button className="btn" onClick={handleClick}>
        Нажми меня
      </button>
    </div>
  );
};

export default SimpleCounter;
