# React Hook Form — план работы

Коротко: вы завершили ручное управление формами и перешли на библиотеку react-hook-form, чтобы упростить регистрацию полей, валидацию и уменьшить количество перерисовок.

## Что уже сделано (Урок 1.16.2)

1. Пакеты: добавлены `react-hook-form`, `antd`, `react-select`.
2. Удален самописный `RegForm` и `validators.js`, так как рутину берет на себя библиотека.
3. Два примера форм:
   - `src/pages/SignupForm.jsx` — простая форма на `useForm`.
   - `src/pages/CustomForm.jsx` — форма с кастомными обертками (`Input`, `Select`, `Checkbox`, `Textarea`).
4. Для кастомных компонентов используется `forwardRef`, чтобы `register` мог привязаться к реальному DOM-элементу.
5. Валидация задается через `register` и отображается через `formState.errors`.

## План для закрепления темы

Цель: научиться управлять формами через библиотеку, применять валидацию и подключать кастомные компоненты.

### Задача 1: Email в простой форме

Файл: `src/pages/SignupForm.jsx`

1. Добавьте поле `email`.
2. Зарегистрируйте поле через `register`.
3. Добавьте валидацию:
   - обязательное поле: `required: "Email обязателен"`
   - паттерн email, например:

```js
pattern: {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Некорректный email"
}
```

4. Покажите ошибку под полем через `errors.email`.

Ожидаемый результат: при пустом или неверном email появляется текст ошибки.

### Задача 2: Работа с `watch`

Файл: `src/pages/SignupForm.jsx`

1. Используйте `watch("example")`.
2. Выведите текст `Вы вводите: ...`, который обновляется во время ввода.

### Задача 3: Компонент RadioButton

Файлы: `src/components/CustomForms/RadioButton.jsx`, `src/pages/CustomForm.jsx`

1. Создайте компонент радио-кнопки на базе `forwardRef`.
2. Пропсы: `label`, `name`, `value`, плюс стандартные `onChange`, `onBlur`.
3. Добавьте в `CustomForm.jsx` группу радио для пола (например, "Мужской", "Женский").
4. Зарегистрируйте группу через `register` с правилом `required`.

Скелет компонента:

```jsx
import { forwardRef } from "react";

export const RadioButton = forwardRef(({ label, value, name, ...rest }, ref) => (
  <label>
    <input type="radio" name={name} value={value} ref={ref} {...rest} />
    {label}
  </label>
));

RadioButton.displayName = "RadioButton";
```

### Задача 4: Стилизация ошибок

Файл: `src/pages/SignupForm.css` (или `src/pages/CustomForm.css`)

1. Добавьте класс:

```css
.input-error {
  border: 1px solid red;
}
```

2. Добавляйте класс по условию, если есть ошибка:

```jsx
className={errors.exampleRequired ? "input-error" : ""}
```

## Что должно получиться

Форма не перезагружает страницу при отправке, мгновенно показывает ошибки валидации и корректно собирает данные в JSON, который можно вывести через `alert`.
