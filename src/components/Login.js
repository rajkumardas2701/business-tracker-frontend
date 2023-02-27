import { useState, useContext, useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import { authCall } from '../utils/apiCalls';
import SessionContext from '../contexts/SessionContext';
import '../styles/AuthForm.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const {
    sessionDetails, setSessionDetails, showAuthLoader, setShowAuthLoader,
  } = useContext(SessionContext);
  const handleSubmit = (e) => {
    const user = { phone, password };
    authCall(user, setSessionDetails, 'login', setShowAuthLoader);
    e.preventDefault();
  };
  const handleFormCancel = (e) => {
    setPhone('');
    setPassword('');
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
      <h2>Login to Business Tracker</h2>
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
        <div className="btn-container">
          <button type="submit" className="form-btn">Sign In</button>
          <button type="submit" className="form-btn" onClick={handleFormCancel}>Cancel</button>
        </div>

        {showMessage && sessionDetails.message !== '' && <p style={{ color: 'red' }}>{sessionDetails.message}</p>}
        {
          showAuthLoader && (
          <div className="auth-loader-container">
            <Puff color="blueviolet" height="60px" width="60px" />
          </div>
          )
        }
      </form>
    </div>
  );
};

export default Login;
