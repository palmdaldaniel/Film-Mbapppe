import { BrowserRouter, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
        <Navbar />
          <h1>Mbappe</h1>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          {/* add /:showingid for showing page */}
          <Route exact path="/showing">
          <Route exact path="/allmovies"  />
              <Route exact path="/about" />
              <Route exact path="/profile"  />
              <Route exact path="/login"  />
            <Showing />
          </Route>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
