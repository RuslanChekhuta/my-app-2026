import { useState } from "react";

export default function SecretInput() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [password, setPassword] = useState("");

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleHide = () => {
    setIsRevealed(false);
  };

  const handleBlur = () => {
    console.log("Пользователь закончил ввод");
  };

  return (
    <div className="secret-container">
      <label>Введите пароль:</label>
      <div className="input-wrapper">
        <input
          type={isRevealed ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur}
          className="secret-field"
        />
        <button
          type="button"
          className="reveal-btn"
          onMouseDown={handleReveal}
          onMouseUp={handleHide}
          onMouseLeave={handleHide}
        >
          {isRevealed ? "Hide" : "Show"}
        </button>
      </div>
      <p className="status-text">
        {isRevealed ? "Внимание: пароль виден!" : ""}
      </p>
    </div>
  );
}
