
import UserContextProvider from './contexts/UserContext';
//import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <h1>Mbappe</h1>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          {/* add /:showingid for showing page */}
          <Route exact path="/showing">
            <Showing />
          </Route>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
