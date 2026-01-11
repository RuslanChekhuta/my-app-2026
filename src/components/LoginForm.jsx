import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вход выполнен: ${email}`);
  };

  return (
    <div className="card">
      <h3>Вход в систему</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="pass">Пароль:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            type="password"
          />
        </div>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
