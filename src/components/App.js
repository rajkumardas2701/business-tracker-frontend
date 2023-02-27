import { useState } from 'react';
import NavBar from '../layouts/NavBar';
import SessionContext from '../contexts/SessionContext';
import Auth from '../containers/Auth';
import Dashboard from '../containers/Dashboard';
import '../styles/App.css';

const App = () => {
  const [sessionDetails, setSessionDetails] = useState({
    logged_in: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')).logged_in : false,
    user: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')).user : {},
    message: '',
  });
  const [showAuthLoader, setShowAuthLoader] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <SessionContext.Provider value={{
          sessionDetails, setSessionDetails, showAuthLoader, setShowAuthLoader,
        }}
        >
          <NavBar />
          {sessionDetails.logged_in ? <Dashboard /> : <Auth /> }
        </SessionContext.Provider>
      </header>
    </div>
  );
};

export default App;
