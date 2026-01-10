Привет! Я изучил предоставленные материалы. Мы находимся в контексте курса по React (модуль 1), и текущая тема посвящена **классовым компонентам**.

Хотя современный React ориентирован на функциональные компоненты и хуки, понимание классов критически важно, так как они часто встречаются в старых (Legacy) проектах, и тебе нужно уметь их читать и поддерживать.

Ниже представлен теоретический блок и практические задачи для закрепления материала.

---

### ТЕОРИЯ: Классовые компоненты

**1. Что такое классовый компонент?**
Это JavaScript-класс, который наследуется от `React.Component`. В отличие от функциональных компонентов, которые просто возвращают JSX, класс должен реализовать метод `render()`, внутри которого происходит возврат разметки.

**2. Структура и Props**

- Для создания компонента мы импортируем `Component` из пакета `react`.
- Данные, передаваемые от родителя (пропсы), доступны внутри класса через `this.props`.
- React автоматически "прокидывает" пропсы в экземпляр класса, поэтому мы можем обращаться к ним как к свойствам объекта.

**3. Состояние (State) и Конструктор**
В классовых компонентах состояние (`state`) — это объект.

- **Constructor:** Специальный метод, который вызывается при создании компонента. В нем мы должны вызвать `super(props)` для корректной работы родительского класса React.
- **Инициализация:** Именно в конструкторе мы задаем начальное состояние: `this.state = { ... }`.
- **Обновление:** Изменять состояние напрямую (например, `this.state.count = 5`) нельзя. Для этого используется метод `this.setState(...)`, который также предоставляется React.
  Пример:
  ```jsx
  // правильно
  this.setState({ currentTask: value });
  // неправильно
  this.setState.currentTask = value;
  this.setState().currentTask = value;
  ```

**4. Обработка событий и `this`**
Чтобы методы класса (например, обработчики клика) имели доступ к контексту компонента (к `this`), удобно использовать стрелочные функции. Они автоматически привязывают контекст, позволяя обращаться к `this.setState` внутри них.

---

### ПРАКТИКА

Твой проект `my-app-2026` сейчас пуст. Мы создадим папку для компонентов и реализуем несколько задач на классах.

#### Подготовка

В папке `src` создай папку `components`.

---

#### Задача 1: Основы классов и Props

Создадим простой компонент приветствия, который принимает имя через пропсы.

1.  Создай файл `src/components/WelcomeClass.jsx`.
2.  Напиши классовый компонент, используя скелет ниже.

**Код JSX (`src/components/WelcomeClass.jsx`):**

```jsx
import React, { Component } from "react";
// Не забудь импортировать стили, если они нужны (пока используем глобальные или встроенные)

// 1. Создай класс WelcomeClass, который наследуется от Component
class WelcomeClass extends Component {
  // 2. Реализуй обязательный метод render()
  render() {
    // Внутри метода render мы получаем доступ к пропсам через this.props
    // Деструктурируй name из this.props, чтобы код был чище

    return (
      <div className="welcome-card">
        {/* Выведи заголовок H2 с текстом "Привет, {name}!" */}
        {/* Добавь параграф с текстом: "Я — классовый компонент." */}
      </div>
    );
  }
}

export default WelcomeClass;
```

**CSS (`src/App.css`):**
_Добавь этот код в свой файл стилей._

```css
.welcome-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
  font-family: sans-serif;
}

.welcome-card h2 {
  color: #333;
}
```

**Интеграция (`src/App.jsx`):**

```jsx
import WelcomeClass from "./components/WelcomeClass";
import "./App.css";

function App() {
  return (
    <>
      <WelcomeClass name="Студент" />
    </>
  );
}

export default App;
```

**Ожидаемый результат:**
В браузере ты должен увидеть карточку с текстом "Привет, Студент!" и подписью, что это классовый компонент.

---

#### Задача 2: Работа со State и Событиями (Legacy Todo)

Реализуем упрощенную версию списка задач из видеоурока, чтобы понять, как работает `constructor`, `this.state` и `setState`.

1.  Создай файл `src/components/LegacyTodo.jsx`.
2.  Используй скелет ниже. Тебе нужно заполнить методы класса.

**Код JSX (`src/components/LegacyTodo.jsx`):**

```jsx
import React, { Component } from "react";

class LegacyTodo extends Component {
  // 1. Напиши конструктор (constructor)
  // Не забудь принять props и вызвать super(props)
  constructor(props) {
    super(props);

    // Инициализируй this.state
    // В state должны быть:
    // - tasks: [] (пустой массив для задач)
    // - currentTask: '' (строка для текущего ввода в инпут)
    this.state = {
      // ... напиши код здесь
    };
  }

  // 2. Метод для обновления поля ввода
  // Используй стрелочную функцию, чтобы сохранить контекст this
  handleInputChange = (event) => {
    // Получи значение из event.target.value
    // Используй this.setState, чтобы обновить currentTask
  };

  // 3. Метод для добавления задачи
  addTask = () => {
    // Проверь, что currentTask не пустая строка (trim)
    // Если есть текст:
    // Используй this.setState. Тебе нужно создать новый массив задач,
    // добавив в него новую задачу, и очистить currentTask.
    // Подсказка: tasks: [...this.state.tasks, this.state.currentTask]
  };

  render() {
    return (
      <div className="todo-container">
        <h3>Список задач (Class Version)</h3>

        <div className="input-group">
          {/* Привяжи value к this.state.currentTask */}
          {/* Повесь обработчик onChange={this.handleInputChange} */}
          <input
            type="text"
            placeholder="Новая задача..."
            // ...допиши атрибуты
          />

          {/* Повесь обработчик onClick={this.addTask} */}
          <button>Добавить</button>
        </div>

        <ul>
          {/* Используй this.state.tasks.map для рендеринга списка */}
          {/* Не забудь про key (можно использовать индекс для простоты в этом примере) */}
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LegacyTodo;
```

**CSS (Дополни `src/App.css`):**

```css
/* Стили для задачи 2 */
.todo-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #646cff;
  border-radius: 10px;
  font-family: sans-serif;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input-group input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-group button {
  padding: 8px 16px;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.input-group button:hover {
  background-color: #535bf2;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

li {
  background: #eee;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 4px;
}
```

**Интеграция (`src/App.jsx`):**
Добавь компонент в `App.jsx`.

```jsx
import WelcomeClass from "./components/WelcomeClass";
import LegacyTodo from "./components/LegacyTodo"; // Импорт
import "./App.css";

function App() {
  return (
    <>
      <WelcomeClass name="Студент" />
      <hr />
      <LegacyTodo />
    </>
  );
}

export default App;
```

**Ожидаемый результат:**

1.  Ты увидишь поле ввода и кнопку.
2.  При вводе текста он должен отображаться в инпуте (это значит, что `handleInputChange` и `setState` работают).
3.  При нажатии "Добавить" задача должна появляться в списке снизу, а поле ввода очищаться.

Выполни эти задачи, чтобы закрепить понимание того, как работает React "под капотом" в классовом подходе. Жду отчет!
