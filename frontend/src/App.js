import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllMovies from "./pages/AllMovies";
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
      <UserContextProvider>
        <BrowserRouter>
        <Navbar />
          <h1>Mbappe</h1>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/showing/:showingId" component={Showing}/>

          {/* add /:showingid for showing page */}
          <Route exact path="/allmovies"  />
              <Route exact path="/about" />
              <Route exact path="/profile"  />
              <Route exact path="/login"  />
          <Route exact path="/allmovies">
            <AllMovies />
          </Route>
        </BrowserRouter>
      </UserContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
