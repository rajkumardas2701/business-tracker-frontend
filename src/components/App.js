import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem('authState'));
    if (authState == null || !authState.logged_in) {
      navigate('/');
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Dashboard</p>
      </header>
    </div>
  );
};

export default App;

// const [auth, setAuth] = useState()
