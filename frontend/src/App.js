//import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserContextProvider from './contexts/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <UserContextProvider>
        <BrowserRouter>
        <Navbar />
          <h1>Mbappe</h1>
          <Route exact path="/profile">
            <UserPage />
          </Route>

          {/* add /:showingid for showing page */}
          <Route exact path="/allmovies"  />
              <Route exact path="/about" />
              <Route exact path="/profile"  />
              <Route exact path="/login"  />
        </BrowserRouter>
      </UserContextProvider>

    </div>
  );
}

export default App;
