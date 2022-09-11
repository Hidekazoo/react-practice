import "./App.css";
import { UserInfoContainer } from "./components/user/UserContainer";
import { UserProvider } from "./components/user/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserInfoContainer />
      </UserProvider>
    </div>
  );
}

export default App;
