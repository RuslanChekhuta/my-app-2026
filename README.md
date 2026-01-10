Привет! Я твой ментор по React. Изучив предоставленные тобой материалы, я вижу, что мы переходим к теме, которая, возможно, не была запланирована в стандартном модуле 1, но критически важна для профессионального роста и работы с легаси-кодом — **Классовые компоненты и управление состоянием через `this.setState`**.

Хотя сейчас миром правят хуки, на собеседованиях (особенно на Middle) и в старых проектах классовые компоненты встречаются постоянно.

Ниже представлена теория и практические задачи на основе транскрипта видео.

---

### ТЕОРИЯ: Классовые компоненты и State

#### 1. Что это и зачем?

Классовые компоненты были основным способом работы с React до появления хуков. Они важны для понимания глубинных процессов библиотеки (например, жизненного цикла) и поддержки старого кода.

#### 2. Синтаксис и Структура

Чтобы создать классовый компонент:

1.  Импортируем `Component` из `react`.
2.  Создаем класс, который наследуется (`extends`) от `Component`.
3.  Обязательно реализуем метод `render()`, который возвращает JSX.

```javascript
import { Component } from "react";

class MyComponent extends Component {
  render() {
    return <h1>Привет из класса!</h1>;
  }
}
```

#### 3. State (Состояние)

В отличие от `useState`, здесь состояние — это **всегда объект** `this.state`.
Инициализация происходит в `constructor`. Мы обязаны вызвать `super(props)`, чтобы передать пропсы в родительский класс `Component`.

```javascript
constructor(props) {
  super(props); // Обязательно!
  this.state = {
    count: 0,
    name: 'Вася'
  };
}
```

#### 4. Изменение состояния (`this.setState`)

Мы **никогда** не меняем `this.state` напрямую (например, `this.state.count = 5`). React не узнает об этом и не перерисует интерфейс. Мы используем метод `this.setState`.

У `this.setState` есть две формы:

- **Объектная форма:**
  Используется для простых обновлений. React «сливает» новые данные со старыми.

  ```javascript
  this.setState({ name: "Маша" }); // count останется 0, name станет 'Маша'
  ```

- **Функциональная форма (Callback):**
  Используется, если новое состояние зависит от предыдущего (например, счетчик). Это важно, так как `setState` работает асинхронно, и React может группировать обновления.
  ```javascript
  // prevState — это актуальное состояние на момент обновления
  this.setState((prevState) => ({
    count: prevState.count + 1,
  }));
  ```

#### 5. События и `this`

Методы класса, которые мы передаем в `onClick`, должны иметь доступ к контексту `this`. В современном JS проще всего использовать стрелочные функции при объявлении метода, они автоматически привязывают контекст.

```javascript
handleClick = () => {
   // this доступен здесь
   this.setState({ ... });
}
```

#### 6. Пропсы

В классовых компонентах пропсы доступны через `this.props` в любом методе класса.

---

### ПРАКТИКА

**Текущая тема:** Урок 1.11 (Альтернативный). Классовые компоненты.

#### Задача 1: Классовый счетчик (ClassCounter)

Создай простой счетчик, используя классовый подход.

1.  **Создай файл:** `src/components/ClassCounter.jsx`
2.  **JS/JSX Скелет:**

```javascript
import { Component } from 'react';
import './ClassCounter.css'; // Создай этот файл (код ниже)

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    // 1. Инициализируй this.state с полем count: 0
    // [ТВОЙ КОД ЗДЕСЬ]
  }

  // 2. Напиши метод increment (стрелочная функция)
  // Используй this.setState с callback-функцией (prevState), чтобы увеличить count на 1
  increment = () => {
     // [ТВОЙ КОД ЗДЕСЬ]
  };

  // 3. Напиши метод decrement (стрелочная функция)
  // Уменьшает count на 1
  decrement = () => {
      // [ТВОЙ КОД ЗДЕСЬ]
  };

  render() {
    // Деструктуризация для удобства (не обязательно, но хороший тон)
    const { count } = this.state;

    return (
      <div className="counter-card">
        <h2>Классовый счетчик</h2>
        <div className="display">{count}</div>
        <div className="controls">
          {/* 4. Привяжи методы к кнопкам */}
          <button onClick={/* ??? */}>-</button>
          <button onClick={/* ??? */}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
```

3.  **CSS (Скопируй полностью в `src/components/ClassCounter.css`):**

```css
.counter-card {
  border: 2px solid #646cff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
  margin: 20px auto;
  background-color: #f9f9f9;
}

.display {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin: 15px 0;
}

.controls button {
  font-size: 1.5rem;
  padding: 5px 20px;
  margin: 0 5px;
  cursor: pointer;
}
```

4.  **Результат:** Подключи компонент в `App.jsx`. В браузере должен быть счетчик, который работает корректно при нажатии кнопок.

---

#### Задача 2: Профиль пользователя (UserProfile)

Отработаем работу с объектами и множественным состоянием в классе. Вспомним пример из видео про Васю и Машу.

1.  **Создай файл:** `src/components/UserProfile.jsx`
2.  **JS/JSX Скелет:**

```javascript
import { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    // 1. Задай начальное состояние: name: 'Alex', age: 25
    this.state = {
      // [ТВОЙ КОД ЗДЕСЬ]
    };
  }

  // 2. Метод updateName: меняет имя на 'Alice' (или любое другое)
  updateName = () => {
    // Здесь можно использовать объектную форму this.setState, так как не зависим от прошлого
    // [ТВОЙ КОД ЗДЕСЬ]
  };

  // 3. Метод birthday: увеличивает age на 1
  birthday = () => {
    // Используй функциональную форму (prevState), так как возраст зависит от текущего
    // [ТВОЙ КОД ЗДЕСЬ]
  };

  render() {
    return (
      <div
        style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}
      >
        <h3>Профиль пользователя (Class)</h3>
        {/* Выведи имя и возраст из this.state */}
        <p>Имя: {/* ??? */}</p>
        <p>Возраст: {/* ??? */}</p>

        <button onClick={this.updateName}>Сменить имя</button>
        <button onClick={this.birthday}>День рождения</button>
      </div>
    );
  }
}

export default UserProfile;
```

3.  **Результат:** В браузере карточка. Кнопка "Сменить имя" меняет имя. Кнопка "День рождения" увеличивает цифру.

---

#### Задача 3: Подъем состояния (Lifting State Up)

Реализуем паттерн, где родитель (Class) управляет состоянием, а ребенок (Functional) только отображает его. Это комбинированный подход, о котором говорилось в конце видео.

1.  **Создай файл:** `src/components/SmartParent.jsx` (Родитель)
2.  **Создай файл:** `src/components/SimpleChild.jsx` (Ребенок)

**`src/components/SimpleChild.jsx` (Функциональный компонент):**

```javascript
// Этот компонент глупый (stateless). Он получает props и показывает их.
const SimpleChild = ({ value, onIncrement }) => {
  return (
    <div style={{ background: "#e0e0e0", padding: "10px", margin: "10px 0" }}>
      <h4>Дочерний компонент</h4>
      <span>Значение: {value} </span>
      {/* При клике вызываем функцию, переданную от родителя */}
      <button onClick={onIncrement}>+1</button>
    </div>
  );
};

export default SimpleChild;
```

**`src/components/SmartParent.jsx` (Классовый компонент):**

```javascript
import { Component } from 'react';
import SimpleChild from './SimpleChild';

class SmartParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedCount: 0
    };
  }

  // Метод, который будет менять состояние РОДИТЕЛЯ
  handleIncrement = () => {
    // Увеличь sharedCount на 1, используя prevState
    // [ТВОЙ КОД ЗДЕСЬ]
  };

  render() {
    return (
      <div style={{ border: '2px dashed orange', padding: '20px' }}>
        <h2>Родитель (Class)</h2>
        <p>Баланс в родителе: {this.state.sharedCount}</p>

        {/* Передай состояние (sharedCount) как проп value */}
        {/* Передай метод (handleIncrement) как проп onIncrement */}
        <SimpleChild
           value={/* ??? */}
           onIncrement={/* ??? */}
        />

        {/* Попробуй добавить второго SimpleChild с теми же пропсами.
            Они должны синхронно обновляться, так как зависят от одного источника истины.
        */}
         <SimpleChild
           value={/* ??? */}
           onIncrement={/* ??? */}
        />
      </div>
    );
  }
}

export default SmartParent;
```

3.  **Результат:** В `App.jsx` добавь `<SmartParent />`. При клике на кнопку **любого** из дочерних компонентов, обновляться должны цифры везде (и в родителе, и в обоих детях).

Жду выполнения задач! Начинай с `ClassCounter`.
