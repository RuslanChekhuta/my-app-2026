import React from "react";
import MyButton from "./MyButton";

const Header = ({ onHeaderAction }) => {
  const redButtonStyle = {
    backgroundColor: "red",
    color: "white",
  };

  return (
    <header
      style={{ borderBottom: "1px solid #ccc", padding: "10px", width: "100%" }}
    >
      <span>Логотип</span>
      <MyButton text="Выход" onClick={onHeaderAction} style={redButtonStyle} />
    </header>
  );
};

export default Header;
