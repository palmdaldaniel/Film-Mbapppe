
import './App.css';
import UserContextProvider from './contexts/UserContext';
import MovieContextProvider from './contexts/MovieContext';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <UserContextProvider>
          <h1>Mbappe</h1>
          <LoginPage />
          <Home/>
        </UserContextProvider>
      </MovieContextProvider>


    </div>
  );
}

export default App;
