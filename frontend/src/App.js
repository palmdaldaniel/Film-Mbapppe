import { BrowserRouter, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <h1>Mbappe</h1>
          <LoginPage />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
