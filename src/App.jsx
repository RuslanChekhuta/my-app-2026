import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <>
      <h1>Панель управления</h1>
      <UserProfile
        name="Алексей"
        age={25}
        isAdmin={true}
        tags={["React", "Vite", "Frontend"]}
      />
      <UserProfile
        name="Руслан"
        age={23}
        isAdmin={false}
        tags={["Next", "Node", "Backend"]}
      />
    </>
  );
}

export default App;
