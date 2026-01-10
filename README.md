Я изучил предоставленные источники. Как твой ментор по React, я готов начать занятие.

Судя по транскрипции видео и структуре курса, мы находимся на **Уроке 1.8: Props: передача данных**.

Мы будем работать в проекте `my-app-2026`. Твоя задача - сделать компоненты универсальными, передавая в них данные от родителя к ребенку.

---

### ТЕОРИЯ: Props (Свойства)

**1. Что такое пропсы?**
Props (сокращение от properties) позволяют передавать данные от родительского компонента к дочерним. Это делает компоненты гибкими и переиспользуемыми. Вместо того чтобы хардкодить текст "Нажми меня" внутри кнопки, мы передаем его снаружи, и кнопку можно использовать везде с разным текстом.

**2. Как передавать и принимать:**

- **Передача (Родитель):** Выглядит как HTML-атрибут: `<Button label="Click me" />`.
- **Прием (Ребенок):** React собирает все атрибуты в один объект `props`.
- **Деструктуризация:** Рекомендуется сразу извлекать нужные свойства: `function Button({ label }) { ... }`. Это улучшает читаемость.

**3. Что можно передавать?**
Всё: строки, числа, объекты, массивы, функции и даже другие React-компоненты. Можно передавать даже стили объектом.

**4. Важное правило:**
**Props доступны только для чтения (Read-only).** Их нельзя менять внутри дочернего компонента. Если нужно изменить данные в ответ на действие пользователя (например, клик), мы должны использовать состояние (но это тема будущих уроков) или передать функцию-колбэк от родителя.

**5. Техническая настройка:**
Так как мы пока не изучали `PropTypes` (Урок 1.9), чтобы линтер не ругался, в файле `eslint.config.js` (если он есть в Vite проекте) нужно добавить правило `react/prop-types: "off"` или просто игнорировать предупреждения в консоли редактора.

---

### ПРАКТИЧЕСКИЕ ЗАДАЧИ

Ниже представлен план работы. Выполняй их по порядку.

#### Задача 1: Создание универсальной кнопки

Мы создадим кнопку, которая принимает текст и функцию для клика через пропсы.

**1. Создай файл `src/components/MyButton.jsx`**
(Если папки `components` нет - создай её).

```javascript
// src/components/MyButton.jsx

// 1. Прими пропсы text и onClick через деструктуризацию
// function MyButton( ... ) {

    return (
        // 2. Верни button.
        // - Внутри тега button выведи переменную text
        // - На событие onClick повесь функцию, пришедшую в пропсах
        // - Добавь className="my-btn"
        <button ... >
            {/* Текст кнопки */}
        </button>
    );
// }

// Не забудь экспорт
```

**2. Добавь стили в `src/index.css`** (Я даю полный код, как прописано в правилах).

```css
/* src/index.css */
body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background-color: #f0f0f0;
}

.container {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

.my-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background 0.3s;
}

.my-btn:hover {
  background-color: #0056b3;
}
```

**3. Обнови `src/App.jsx`**

```javascript
// src/App.jsx
// Импортируй компонент MyButton

function App() {
  // Создай функцию-обработчик, например handleClick
  const handleClick = () => {
    alert("Меня нажали!"); //
  };

  return (
    <div className="container">
      <h1>Урок 1.8: Props</h1>

      {/* 
            Вызови MyButton дважды:
            1. С текстом "Войти" и передай handleClick в пропс onClick
            2. С текстом "Регистрация" и той же функцией
        */}
    </div>
  );
}

export default App;
```

**Результат в браузере:**
Ты должен увидеть две синие кнопки "Войти" и "Регистрация". При клике на любую из них всплывает `alert` с текстом "Меня нажали!".

---

#### Задача 2: Передача стилей и "Prop Drilling"

Теперь попробуем передать стили напрямую и прокинуть пропсы через промежуточный компонент (Header).

**1. Создай файл `src/components/Header.jsx`**

```javascript
// src/components/Header.jsx
// Импортируй MyButton

// Этот компонент принимает пропс onHeaderAction (функция)
function Header({ onHeaderAction }) {
  // Создадим объект стилей для красной кнопки
  // Обрати внимание: ключи camelCase (backgroundColor)
  const redButtonStyle = {
    backgroundColor: "red",
    color: "white",
  };

  return (
    <header
      style={{ borderBottom: "1px solid #ccc", padding: "10px", width: "100%" }}
    >
      <span>Логотип</span>

      {/* 
         Вставь MyButton.
         - text="Выход"
         - onClick={onHeaderAction}  <-- Мы передаем функцию дальше вниз (Prop Drilling)
         - style={redButtonStyle}    <-- Передаем объект стилей (нужно будет доработать кнопку)
      */}
    </header>
  );
}

export default Header;
```

**2. Доработай `src/components/MyButton.jsx`**
Кнопка должна уметь принимать пропс `style`.

```javascript
// src/components/MyButton.jsx

// Добавь style в деструктуризацию: ({ text, onClick, style })
// Примени его к кнопке: <button style={style} ... >
```

**3. Обнови `src/App.jsx`**

```javascript
// src/App.jsx
import Header from "./components/Header";
// MyButton можно убрать или оставить для тестов

function App() {
  const handleLogout = () => {
    console.log("Пользователь вышел");
  };

  return (
    <div className="container">
      {/* 
          Вставь Header.
          Передай ему функцию handleLogout через пропс onHeaderAction
      */}

      <main>
        <h2>Главная страница</h2>
      </main>
    </div>
  );
}

export default App;
```

**Результат в браузере:**
Вверху появится Header с кнопкой "Выход". Эта кнопка должна быть **красной** (стили применились через пропс `style`). При нажатии в консоли браузера (F12) должно появиться сообщение "Пользователь вышел".

Мы реализовали **Prop Drilling** (сверление пропсов): `App` -> передал функцию в `Header` -> `Header` передал её в `MyButton`.

Жду выполнения! Напиши, когда будешь готов или если возникнут вопросы.
