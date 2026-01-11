Я изучил предоставленные материалы. Мы переходим к **Уроку 1.16.1: Валидация форм в React (практика)**.

На основе последних изменений в проекте и транскрипта урока, мы перешли от простых компонентов к созданию полноценной формы регистрации (`RegForm`) с валидацией данных, динамическими списками и управлением состоянием.

Вот план занятия и практические задачи.

---

### ТЕОРИЯ: Управляемые формы и Валидация

**1. Управляемые компоненты (Controlled Components)**
В React мы связываем состояние (`useState`) с полями ввода. Значение `input` контролируется через атрибут `value`, а изменения отслеживаются через `onChange`. Это позволяет мгновенно реагировать на ввод пользователя, например, для валидации пароля в реальном времени.

**2. Валидация и вспомогательные функции**
Чтобы не загромождать компонент логикой, функции проверки (например, проверка регулярным выражением или совпадения паролей) выносятся в отдельный файл `validators.js`. Это делает код чище и позволяет переиспользовать логику.

**3. Динамические списки (Array.from)**
Для создания выпадающего списка с годами (например, последние 40 лет) не нужно писать 40 тегов `<option>` вручную. Мы используем `Array.from({ length: 40 }, ...)` для генерации массива дат "на лету".

**4. Синхронизация UI и State при очистке**
При сбросе формы (кнопка "Очистить") недостаточно просто использовать HTML-тип `type="reset"`. Нам необходимо вручную сбросить все стейты в исходное значение (пустые строки), чтобы виртуальный DOM React соответствовал реальному DOM.

---

### ПРАКТИЧЕСКИЕ ЗАДАЧИ

Создай компонент формы регистрации, следуя инструкциям ниже.

#### Задача 1: Логика валидации

Создай файл для вспомогательных функций. Нам нужно проверять формат пароля (латиница + цифры, минимум 8 символов), совпадение паролей и заполненность полей.

**Файл:** `src/components/RegForm/validators.js`

```javascript
// Напиши функцию validatePassword(password).
// Используй регулярное выражение: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// Функция должна возвращать true/false.

export const validatePassword = (password) => {
  // Твой код здесь
};

// Напиши функцию checkPasswordMatch(password, confirmPassword).
// Возвращает true, если пароли совпадают.
export const checkPasswordMatch = (password, confirmPassword) => {
  // Твой код здесь
};

// Напиши функцию checkRequiredFields(fields).
// Принимает массив значений и проверяет, что все они заполнены (не пустые строки).
export const checkRequiredFields = (fields) => {
  // Твой код здесь, используй метод every и trim()
};
```

#### Задача 2: Стилизация

Добавь стили для формы. Используй готовый код из патча.

**Файл:** `src/components/RegForm/RegForm.css`

```css
.section {
  background-color: #0d0e66;
  padding: 30px 20px;
  margin: 0 auto;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  color: white;
}
h1 {
  font-size: 22px;
}
form {
  display: flex;
  flex-direction: column;
  width: 400px;
  row-gap: 10px;
}
input,
select,
button {
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}
select,
input::placeholder {
  font-size: 18px;
  font-family: Arial, sans-serif;
}
input[type="password"] {
  font-family: Arial, sans-serif;
  font-size: 24px;
}
select,
input {
  background-color: #9fcee2;
  outline: none;
}
select:focus,
input:focus {
  background-color: #fff;
  outline: none;
}
button {
  background-color: #5ca0ff;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
}
button:hover {
  background-color: #17488d;
}
.error-message {
  color: red;
  text-align: center;
}
.password-invalid {
  border: 2px solid red;
}
.success-message {
  color: green;
  text-align: center;
}
```

,,

#### Задача 3: Компонент формы (Скелет и Состояние)

Создай основной компонент. Подключи валидаторы и создай необходимые состояния (`useState`).

**Файл:** `src/components/RegForm/RegForm.jsx`

```javascript
import { useState } from "react";
// Импортируй функции из ./validators
import "./RegForm.css";

function RegForm() {
  // 1. Создай стейты для: name, email, password, confirmPassword, selectedYear
  // 2. Создай стейты для валидации:
  //    - isPasswordValid (по умолчанию true)
  //    - passwordMatch (по умолчанию true)
  //    - requiredFieldsError (ошибка пустых полей)
  //    - showSuccessMessage (успешная отправка)

  // 3. Напиши хендлеры для простых полей (name, email, year)

  // 4. Напиши handlePasswordChange:
  //    - Обновляет стейт пароля
  //    - Вызывает validatePassword и обновляет isPasswordValid
  //    - Вызывает checkPasswordMatch и обновляет passwordMatch

  // 5. Напиши handleConfirmPasswordChange по аналогии (обновляет стейт и проверяет совпадение)

  // 6. Сгенерируй массив years (последние 40 лет) используя Array.from

  // 7. Напиши handleSubmit(e):
  //    - e.preventDefault()
  //    - Собери все поля в массив и проверь через checkRequiredFields
  //    - Если валидация не прошла -> setRequiredFieldsError(true)
  //    - Если прошла -> выведи данные в alert и покажи showSuccessMessage (с таймером скрытия через 3 сек)

  // 8. Напиши handleReset: сбрасывает ВСЕ стейты в начальные значения ("" или true для валидаторов)

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={/* привяжи submit */}>
        {/* Input для имени */}
        <input type="text" placeholder="Имя" onChange={/* хендлер */} value={/* стейт */} />

        {/* Input для email */}
        <input type="email" placeholder="email" onChange={/* хендлер */} value={/* стейт */} />

        {/* Input для пароля */}
        <input
          type="password"
          placeholder="Пароль"
          value={/* стейт */}
          onChange={/* хендлер */}
        />
        {/* Условный рендеринг ошибки валидации пароля (!isPasswordValid) */}

        {/* Input для подтверждения пароля. Меняй цвет текста (style) если пароли совпадают/не совпадают */}
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={/* стейт */}
          onChange={/* хендлер */}
        />
        {/* Условный рендеринг ошибки совпадения (!passwordMatch) */}

        {/* Select для года. Используй map для рендеринга options из массива years */}
        <select value={/* стейт */} onChange={/* хендлер */}>
           <option value="">Дата окончания учебного заведения:</option>
           {/* map here */}
        </select>

        <button type="submit">Отправить</button>
        {/* Кнопка очистки. Обязательно добавь onClick={handleReset} */}
        <button type="reset">Очистить форму</button>

        {/* Условный рендеринг сообщений об ошибке (requiredFieldsError) или успехе (showSuccessMessage) */}
      </form>
    </div>
  );
}

export default RegForm;
```

#### Задача 4: Подключение

Обнови главную страницу, чтобы отобразить форму.

**Файл:** `src/pages/HomePage.jsx`

```javascript
import RegForm from "../components/RegForm/RegForm"; //
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <RegForm />
    </>
  );
}

export default HomePage;
```

### Навигация

1.  Создай структуру папок `src/components/RegForm`.
2.  Выполни задачи 1-4 последовательно.
3.  **В браузере:** Ты должен увидеть синюю форму регистрации. При вводе "плохого" пароля должна появляться ошибка. При несовпадении паролей — другая ошибка. Кнопка "Очистить форму" должна стирать введенные данные. Кнопка "Отправить" должна показывать `alert` с JSON-данными только если все валидно.
