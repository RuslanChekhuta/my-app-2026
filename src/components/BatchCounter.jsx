import { useState } from "react";

const BatchCounter = () => {
  const [score, setScore] = useState(0);

  const handleTripleClick = () => {
    // setScore(score + 1);
    // setScore(score + 1);
    // setScore(score + 1);

    setScore((prev) => prev + 1);
    setScore((prev) => prev + 1);
    setScore((prev) => prev + 1);
  };

  return (
    <div className="card">
      <h3>Супер-счетчик: {score}</h3>
      <button className="btn" onClick={handleTripleClick}>
        +3 Очка
      </button>
    </div>
  );
};

export default BatchCounter;
