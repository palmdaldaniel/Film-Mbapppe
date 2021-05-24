import { BrowserRouter, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage"

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <h1>Mbappe</h1>
          <LoginPage />
          <Route exact path="/showing" component={Showing} />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
