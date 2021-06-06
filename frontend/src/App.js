import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import HomePage from "./pages/HomePage";
import AllMovies from "./pages/AllMovies";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfoPage from './pages/MovieInfoPage'
import Footer from "./components/Footer";
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Navbar />
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/profile">
              <UserPage />
            </Route>
            <Route exact path="/showing/:showingId" component={Showing} />
            <ProtectedRoute exact path="/profile"  component={UserPage}/>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" />
            <Route exact path="/allmovies">
              <AllMovies />
            </Route>
            <Route exact path="/movie-info/:movieId" component={MovieInfoPage}/>
            <Route exact path="/notfound" component={NotFoundPage}/>
            <Footer />  
          </BrowserRouter>
        </UserContextProvider>
      </MovieContextProvider>
      
    </div>
  );
}

export default App;
