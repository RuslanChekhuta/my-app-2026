import Header from "./components/Header";
import MyButton from "./components/MyButton";

function App() {
  const handleClick = () => {
    alert("Меня нажали!");
  };

  const handleLogout = () => {
    console.log("Пользователь вышел");
  };

  return (
    <div className="container">
      <Header onHeaderAction={handleLogout} />
      <main>
        <h2>Главная страница</h2>
      </main>
      <section>
        <h1>Урок 1.8: Props</h1>
        <MyButton text="Войти" onClick={handleClick} />
        <MyButton text="Регистрация" onClick={handleClick} />
      </section>
    </div>
  );
}

export default App;
