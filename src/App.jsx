import { useState } from "react";
import "./App.css";
import UserStatus from "./components/UserStatus";
import NotificationArea from "./components/NotificationArea";

function App() {
  const [isOnline, setIsOnline] = useState(false);
  const [messages, setMessages] = useState(0);

  return (
    <div className="app-container">
      <h1>Условный рендеринг</h1>
      <section>
        <h2>Задача 1: Статус</h2>
        <UserStatus isOnline={isOnline} />

        <button onClick={() => setIsOnline(!isOnline)}>
          Переключить статус (Toggle)
        </button>
      </section>
      <hr />

      <section>
        <h2>Задача 2: Уведомления</h2>
        {/* Рендери NotificationArea, передай messages как newMessagesCount */}
        <NotificationArea newMessagesCount={messages} />

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setMessages(messages + 1)}>
            Добавить сообщение
          </button>
          <button onClick={() => setMessages(0)}>Очистить</button>
        </div>
      </section>
    </div>
  );
}

export default App;
