
import UserContextProvider from './contexts/UserContext';
//import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <h1>Mbappe</h1>
        {/* <LoginPage /> */}
        <UserPage />
      </UserContextProvider>
    </div>
  );
}

export default App;
