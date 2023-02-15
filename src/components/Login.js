import { useState, useContext, useEffect } from 'react';
import authCall from '../utils/apiCalls';
import SessionContext from '../contexts/SessionContext';
import '../styles/AuthForm.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const { sessionDetails, setSessionDetails } = useContext(SessionContext);
  const handleSubmit = (e) => {
    const user = { phone, password };
    authCall(user, setSessionDetails, 'login');
    e.preventDefault();
  };

  useEffect(() => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }, [sessionDetails]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
          <p>
            Phone:
          </p>
          <input
            placeholder="Phone number"
            type="tel"
            name="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-elements">
          <p>
            Password:
          </p>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="form-btn">Sign In</button>
        {showMessage && sessionDetails.message !== '' && <p style={{ color: 'red' }}>{sessionDetails.message}</p>}

      </form>
    </div>
  );
};

export default Login;
