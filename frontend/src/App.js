import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Showing from "./pages/ShowingPage";
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
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
      </MovieContextProvider>
    </div>
  );
}

export default App;
