import "./App.css";
import LegacyTodo from "./components/LegacyTodo";
import WelcomeClass from "./components/WelcomeClass";

function App() {
  return (
    <>
      <WelcomeClass name="Студент" />
      <hr />
      <LegacyTodo />
    </>
  );
}

export default App;
