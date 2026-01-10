import { useState } from "react";
import BatchCounter from "./components/BatchCounter";
import SimpleCounter from "./components/SimpleCounter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <h1>Управление состоянием</h1>
      <ThemeToggle toggleTheme={handleToggle} isDark={isDark} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <SimpleCounter />
        <SimpleCounter />
        <BatchCounter />
      </div>
    </div>
  );
}

export default App;
