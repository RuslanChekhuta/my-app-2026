import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Добро пожаловать на курс!</h2>
        <p>Мы изучаем файловую структуру React.</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
