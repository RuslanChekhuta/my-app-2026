import { useState } from "react";
import {
  validatePassword,
  checkPasswordMatch,
  checkRequiredFields,
} from "./validators";

import "./RegForm.css";

function RegForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedYear, setSelectedYear] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [passwordMatch, setPasswordMatch] = useState(true);

  const [requiredFieldsError, setRequiredFieldsError] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(checkPasswordMatch(password, newConfirmPassword));
  };

  const years = Array.from({ length: 40 }, (_, index) => {
    const currentYear = new Date().getFullYear();
    return currentYear - index;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = [name, email, password, confirmPassword, selectedYear];
    const allFilled = checkRequiredFields(fields);
    setRequiredFieldsError(!allFilled);

    if (!allFilled || !isPasswordValid || !passwordMatch) {
      setShowSuccessMessage(false);
      return;
    }

    const data = { name, email, password, confirmPassword, selectedYear };
    alert(JSON.stringify(data, null, 2));

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setSelectedYear("");
    setIsPasswordValid(true);
    setPasswordMatch(true);
    setRequiredFieldsError(false);
    setShowSuccessMessage(false);
  };

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
          className={isPasswordValid ? "" : "password-invalid"}
        />
        {!isPasswordValid && (
          <p className="error-message">
            Пароль должен быть не короче 8 символов и содержать буквы и цифры.
          </p>
        )}
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordMatch && (
          <p className="error-message">Пароли не совпадают.</p>
        )}
        <select onChange={handleYearChange} value={selectedYear}>
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button type="submit">Отправить</button>
        <button type="reset" onClick={handleReset}>
          Очистить форму
        </button>
        {requiredFieldsError && (
          <p className="error-message">Заполните все поля.</p>
        )}
        {showSuccessMessage && (
          <p className="success-message">Форма успешно отправлена!</p>
        )}
      </form>
    </div>
  );
}

export default RegForm;
