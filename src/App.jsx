import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
