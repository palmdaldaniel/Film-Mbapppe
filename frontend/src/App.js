
import UserContextProvider from './contexts/UserContext';
//import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import HomePage from "./pages/HomePage";
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <h1>Mbappe</h1>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          {/* add /:showingid for showing page */}
          <Route exact path="/showing">
            <Showing />
          </Route>
          <Route exact path="/profile">
            <UserPage />
          </Route>
        </BrowserRouter>
      </UserContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
