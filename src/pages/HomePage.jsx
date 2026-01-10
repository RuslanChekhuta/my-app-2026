import "./HomePage.css";
import programmerImg from "../assets/programmer.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Добро пожаловать на главную!</h2>
      <div className="image-container">
        <img src={programmerImg} alt="Программист" className="home-img" />
        <img src="/laptop.jpg" alt="Ноутбук" className="home-img" />
      </div>
    </div>
  );
};

export default HomePage;
