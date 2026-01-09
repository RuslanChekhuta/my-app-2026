import "./App.css";

function App() {
  const userData = {
    name: "Ruslan",
    avatar:
      "https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495273.png",
  };

  const avatarStyle = {
    borderRadius: "50%",
    width: "100px",
  };

  const isLoggedIn = true;

  return (
    <>
      <h1>{userData.name}</h1>
      <img src={userData.avatar} alt="Программист" style={avatarStyle} />
      <hr />
      <div className="card">
        <label htmlFor="email">Введите email</label>
        <input type="email" id="email" className="input-field" />
      </div>
      <div style={{ marginTop: 20 }}>
        {isLoggedIn ? <button>Выйти</button> : <button>Войти</button>}
        {isLoggedIn && <p>Добро пожаловать!</p>}
      </div>
    </>
  );
}

export default App;
