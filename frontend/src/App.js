import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import NavbarComponent from "./components/Navbar";
import SignUp from "./components/SignUp";
import HomePage from "./pages/HomePage";
import AllMovies from "./pages/AllMovies";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import UserContextProvider from "./contexts/UserContext";
import MovieContextProvider from "./contexts/MovieContext";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieInfoPage from "./pages/MovieInfoPage";
import Footer from "./components/Footer";
import BookingContextProvider from "./contexts/BookingContext";
import RedirectToTop from "./components/RedirectToTop";
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <UserContextProvider>
          <BookingContextProvider>
            <BrowserRouter>
              <NavbarComponent />
              <RedirectToTop />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/showing/:showingId" component={Showing} />
                <ProtectedRoute exact path="/profile" component={UserPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/login" />
                <Route exact path="/allmovies">
                  <AllMovies />
                </Route>
                <Route exact path="/movie-info/:movieId" component={MovieInfoPage} />
                <Route exact path="/notfound" component={NotFoundPage} />
                {/* <Route exact path="/confirmation" component={Confirmation} />  */}
                <ProtectedRoute exact path="/confirmation" component={Confirmation} />
                <Route render={() => <NotFoundPage />} />
              </Switch> 
              <Footer />
            </BrowserRouter>
          </BookingContextProvider>
        </UserContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
