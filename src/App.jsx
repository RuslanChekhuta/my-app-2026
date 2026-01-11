import EchoInput from "./components/EchoInput";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "50px",
      }}
    >
      <h1>Урок 1.15: Формы</h1>

      {/* Рендерим компоненты */}
      <EchoInput />
      <LoginForm />
    </div>
  );
}

export default App;
