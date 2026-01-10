import React from "react";

const MyButton = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} className="my-btn" style={style}>
      {text}
    </button>
  );
};

export default MyButton;
