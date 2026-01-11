import React, { useState } from "react";

const EchoInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="card">
      <h3>Живой текст</h3>
      <div className="input-group">
        <label htmlFor="other">Введите что-нибудь:</label>
        <input
          type="text"
          placeholder="Печатай здесь..."
          id="other"
          onChange={handleChange}
          value={text}
        />
      </div>
      <div className="preview">Вы ввели: {text}</div>
    </div>
  );
};

export default EchoInput;
