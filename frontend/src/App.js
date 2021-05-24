
import './App.css';
import UserContextProvider from './contexts/UserContext';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <h1>Mbappe</h1>
        <LoginPage />
      </UserContextProvider>
      
    </div>
  );
}

export default App;
