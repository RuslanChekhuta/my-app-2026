import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Вход в систему</h2>

      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
