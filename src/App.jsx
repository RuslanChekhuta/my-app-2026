import "./App.css";
import LoginForm from "./components/LoginForm";
import MouseTracker from "./components/MouseTracker";
import ProductCard from "./components/ProductCard";
import ReportWidget from "./components/ReportWidget";
import SecretInput from "./components/SecretInput";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <ProductCard productName="Coffee" price={5} />
      <LoginForm />
      <ReportWidget />
      <SecretInput />
      <MouseTracker />
    </div>
  );
}

export default App;
