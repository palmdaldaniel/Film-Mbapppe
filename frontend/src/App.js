//import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Route } from "react-router-dom";
import UserContextProvider from './contexts/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <UserContextProvider>
        <BrowserRouter>
          <h1>Mbappe</h1>
          <Route exact path="/profile">
            <UserPage />
          </Route>
        </BrowserRouter>
      </UserContextProvider>

    </div>
  );
}

export default App;
