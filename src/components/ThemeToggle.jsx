import React from "react";

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <div className="card" style={{ color: "black" }}>
      <p>Текущая тема: {isDark ? "Темная 🌙" : "Светлая ☀️"}</p>
      <button className="btn" onClick={toggleTheme}>
        Переключить тему
      </button>
    </div>
  );
};

export default ThemeToggle;
