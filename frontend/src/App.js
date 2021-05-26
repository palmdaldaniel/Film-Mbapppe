//import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
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
        </BrowserRouter>
      </UserContextProvider>

    </div>
  );
}

export default App;
