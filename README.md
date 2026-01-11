Изучил материалы урока 1.12. Тема: Обработка событий в React (onClick, onChange, onSubmit). Поехали!

---

### II. Глубокая Теория

В React события - это не то же самое, что в ванильном JS. Это <Синтетические события> (Synthetic Events), обертка над нативными событиями браузера для кроссбраузерности.

**Главные отличия:**

1.  **CamelCase:** Пишем `onClick`, а не `onclick`.
2.  **Передача функции:** Мы передаем _ссылку_ на функцию, а не вызываем её сразу.
    - ? `onClick={handleClick}` - сработает при клике.
    - ? `onClick={handleClick()}` - вызовется сразу при рендере (частая ошибка новичков).
3.  **Аргументы:** Если нужно передать параметры, используем стрелочную функцию-обертку: `onClick={() => handleDelete(id)}`.

**Пример архитектуры (Музыкальный плеер):**
_(В уроке был счетчик и форма, поэтому здесь разбираем плеер, чтобы не спойлерить задачи)_

```jsx
// src/components/AudioPlayer.jsx
import { useState } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. Стандартный хендлер (naming convention: handle + EventName/Action)
  const handleTogglePlay = () => {
    // ТУТ ЛОГИКА: инвертируем булево значение isPlaying
  };

  // 2. Хендлер с аргументом (громкость)
  const handleVolumeChange = (level) => {
    console.log("Громкость:", level);
  };

  return (
    <div className="player-card">
      {/* Передача ссылки на функцию */}
      <button onClick={handleTogglePlay}>
        {isPlaying ? "Pause ?" : "Play ??"}
      </button>

      {/* Передача аргументов через замыкание/стрелку */}
      <button onClick={() => handleVolumeChange(100)}>Max Vol</button>
    </div>
  );
}
```

---

### III. Практические Задачи (База)

#### Задача 1: Карточка товара с выбором количества

**Цель:** Отработать `onClick` и передачу аргументов, чтобы не вызывать функцию мгновенно.

**Файл:** `src/components/ProductCard.jsx`

**JS (Скелет):**

```jsx
import { useState } from "react";
import "./ProductCard.css"; // Не забудь создать этот файл

function ProductCard({ productName, price }) {
  const [count, setCount] = useState(0);

  // Напиши функцию handleUpdateCount
  // Она должна принимать аргумент amount (число: +1 или -1)
  // Внутри логика: новое количество не может быть меньше 0
  const handleUpdateCount = (amount) => {
    // ТВОЙ КОД ЗДЕСЬ
  };

  return (
    <div className="product-card">
      <h3>{productName}</h3>
      <p>Цена: {price} $</p>

      <div className="controls">
        {/* Добавь onClick, который вызывает handleUpdateCount с аргументом -1 */}
        <button>-</button>

        <span>{count}</span>

        {/* Добавь onClick, который вызывает handleUpdateCount с аргументом +1 */}
        <button>+</button>
      </div>

      <p>Итого: {/* Посчитай общую сумму */} $</p>
    </div>
  );
}

export default ProductCard;
```

**CSS (Полный код) - добавь в `src/components/ProductCard.css`:**

```css
.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
}

.controls button {
  padding: 5px 12px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.controls button:hover {
  background-color: #0056b3;
}
```

**Вопросы на подумать:**

1. Почему мы пишем `onClick={() => handleUpdateCount(1)}`, а не `onClick={handleUpdateCount(1)}`? Что произойдет во втором случае?
2. Как ты предотвратил уменьшение счетчика ниже нуля?

---

#### Задача 2: Форма входа (Login Form)

**Цель:** Отработать `onChange` для инпутов и `onSubmit` для форм. Важно предотвратить перезагрузку страницы.

**Файл:** `src/components/LoginForm.jsx`

**JS (Скелет):**

```jsx
import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  // Создай два состояния: email и password

  // Функция обработки отправки формы
  const handleSubmit = (event) => {
    // 1. ОСТАНОВИ стандартное поведение браузера (перезагрузку)

    // 2. Выведи в alert введенные данные: `Email: ${email}, Password: ${password}`

    // 3. (Опционально) Очисти поля после отправки
  };

  return (
    <form className="login-form" onSubmit={/* Привяжи обработчик */}>
      <h2>Вход в систему</h2>

      <div className="input-group">
        <label>Email:</label>
        {/* Привяжи value к состоянию и onChange к функции обновления состояния */}
        <input
          type="email"
          placeholder="name@example.com"
          // value={...}
          // onChange={...}
        />
      </div>

      <div className="input-group">
        <label>Пароль:</label>
        {/* Привяжи value и onChange */}
        <input type="password" />
      </div>

      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
```

**CSS (Полный код) - добавь в `src/components/LoginForm.css`:**

```css
.login-form {
  max-width: 300px;
  margin: 20px auto;
  padding: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #fff;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 0.9rem;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #218838;
}
```

**Вопросы на подумать:**

1. Что случится с данными в консоли/alert, если убрать `event.preventDefault()`?
2. Зачем нужен `value`, если мы и так обновляем стейт через `onChange`?

---

### IV. Практические Задачи (Расширение)

#### Задача 3: Виджет "Быстрая жалоба" (User Report)

**Сценарий:** Пользователь заметил баг и хочет отправить репорт.
**Логика:**

1.  Поле `textarea` для ввода текста.
2.  `onChange` обновляет стейт.
3.  `onKeyDown` (Enter): если нажат Ctrl+Enter - отправляем форму.
4.  `onSubmit`: предотвращаем перезагрузку страницы, выводим `alert` с текстом и очищаем поле.

**Навигация:** Создай `src/components/ReportWidget.jsx`.

**JS (Скелет):**

```jsx
import { useState } from "react";
import "./App.css"; // Предполагаем, что стили там

export default function ReportWidget() {
  // 1. Создай стейт для текста (reportText)

  const handleInputChange = (e) => {
    // ТУТ: Обнови стейт значением из e.target.value
  };

  const handleSubmit = (e) => {
    // ТУТ: 1. Останови стандартное поведение браузера
    // ТУТ: 2. Выведи alert("Жалоба отправлена: " + текст)
    // ТУТ: 3. Очисти стейт
  };

  const handleKeyDown = (e) => {
    // ТУТ: Проверь, если нажата Enter И (e.ctrlKey или e.metaKey)
    // То вызывай handleSubmit(e)
  };

  return (
    <form className="report-card" onSubmit={handleSubmit}>
      <h3>Сообщить об ошибке</h3>
      <textarea
        className="report-input"
        placeholder="Опишите проблему (Ctrl+Enter для отправки)..."
        // ТУТ: свяжи value и onChange/onKeyDown
      />
      <button type="submit" className="report-btn">
        Отправить
      </button>
    </form>
  );
}
```

**CSS (Полный код):**

```css
/* App.css */
.report-card {
  background: #2a2a2a;
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-family: sans-serif;
}

.report-input {
  background: #1f1f1f;
  border: 1px solid #444;
  color: #ddd;
  padding: 10px;
  border-radius: 8px;
  resize: vertical;
  min-height: 80px;
  outline: none;
  transition: border-color 0.3s;
}

.report-input:focus {
  border-color: #646cff;
}

.report-btn {
  background: #646cff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.1s;
}

.report-btn:active {
  transform: scale(0.95);
}
```

---

#### Задача 4: "Секретный пароль" (Interaction Reveal)

**Сценарий:** Поле ввода пароля, где символы скрыты, но при наведении мыши на иконку "глаз" пароль показывается.
**Логика:**

1.  `input` типа `password` по умолчанию.
2.  Кнопка/Иконка рядом.
3.  `onMouseDown` (или `onMouseEnter`) на кнопке меняет тип инпута на `text`.
4.  `onMouseUp` (или `onMouseLeave`) возвращает тип `password`.
5.  Потеря фокуса (`onBlur`) на инпуте выводит в консоль "Пользователь закончил ввод".

**Навигация:** Создай `src/components/SecretInput.jsx`.

**JS (Скелет):**

```jsx
import { useState } from "react";

export default function SecretInput() {
  // Стейт для видимости (isRevealed: boolean)
  // Стейт для значения инпута (password: string)

  const handleReveal = () => {
    // Установи isRevealed в true
  };

  const handleHide = () => {
    // Установи isRevealed в false
  };

  const handleBlur = () => {
    // Консоль лог
  };

  return (
    <div className="secret-container">
      <label>Введите пароль:</label>
      <div className="input-wrapper">
        <input
          // ТУТ: type зависит от isRevealed ('text' или 'password')
          // ТУТ: value, onChange, onBlur
          className="secret-field"
        />
        <button
          className="reveal-btn"
          // ТУТ: добавь события мыши для показа/скрытия
        >
          {/* ТУТ: Меняй иконку ?? / ?? */}
          ??
        </button>
      </div>
      <p className="status-text">
        {/* ТУТ: Если isRevealed true -> "Внимание: пароль виден!", иначе пусто */}
      </p>
    </div>
  );
}
```

**CSS (Полный код):**

```css
.secret-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
  font-family: "Segoe UI", sans-serif;
  color: #eee;
}

.input-wrapper {
  display: flex;
  position: relative;
}

.secret-field {
  width: 100%;
  padding: 12px;
  padding-right: 50px; /* место для кнопки */
  background: #333;
  border: 2px solid #555;
  border-radius: 8px;
  color: white;
  font-size: 16px;
}

.reveal-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
}

.status-text {
  font-size: 12px;
  color: #ff4d4d;
  min-height: 20px;
  margin: 0;
}
```

---

#### Задача 5: "Стенографист" (Множественные события)

**Сценарий:** Анализатор ввода. Отслеживает нажатие конкретных клавиш и показывает координаты мыши внутри блока.
**Логика:**

1.  `onMouseMove` на контейнере: обновлять стейт с координатами X и Y.
2.  `onKeyUp` на `input`: если нажат 'Escape', очистить поле ввода.
3.  Использовать `Switch` или `if` для обработки разных событий, если решишь объединить их в один хендлер, либо напиши разные.

**Навигация:** Создай `src/components/MouseTracker.jsx`.

**JS (Скелет):**

```jsx
import { useState } from "react";

export default function MouseTracker() {
  // Стейт для координат {x: 0, y: 0}
  // Стейт для текста

  const handleMouseMove = (e) => {
    // ТУТ: используй e.nativeEvent.offsetX/Y или e.clientX/Y
    // Обнови стейт координат
  };

  const handleKeyUp = (e) => {
    // ТУТ: Логируй e.key
    // Если e.key === 'Escape', очисти текст
  };

  return (
    <div className="tracker-area" onMouseMove={handleMouseMove}>
      <div className="info-panel">
        Mouse: {/* Выведи X */} / {/* Выведи Y */}
      </div>

      <input
        className="tracker-input"
        placeholder="Печатай тут... (Esc для очистки)"
        // ТУТ: value, onChange, onKeyUp
      />
    </div>
  );
}
```

**CSS (Полный код):**

```css
.tracker-area {
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
  border: 1px dashed #646cff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: crosshair;
  position: relative;
}

.info-panel {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 4px;
  color: #00ff88;
  font-family: monospace;
  pointer-events: none;
}

.tracker-input {
  width: 80%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  text-align: center;
}

.tracker-input:focus {
  background: rgba(255, 255, 255, 0.2);
  outline: none;
}
```

---

### V. Инструкция по запуску

1.  Создай компоненты в `src/components`.
2.  Импортируй их в `App.jsx`.
3.  Размести их друг под другом, чтобы видеть результат работы всех задач.

---

### VI. Чек-лист <На подумать>

1.  Почему в React события называются `onClick` (camelCase), а в HTML просто `onclick`? В чём фундаментальная разница механизма под капотом?
2.  В Задаче 2, если мы не напишем `event.preventDefault()` внутри `onSubmit`, что произойдет со страницей при нажатии Enter?
3.  Почему `console.log(e)` внутри асинхронной функции (например, `setTimeout`) часто показывает `null` или пустой объект в старых версиях React (Synthetic Event Pooling)? Знаешь ли ты, актуально ли это для React 18+ (наш случай)? _(Подсказка: в React 17+ пулинг убрали, но вопрос хороший для понимания истории)_.
