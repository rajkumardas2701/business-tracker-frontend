import { useContext, useState, useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import SessionContext from '../contexts/SessionContext';
import { authCall } from '../utils/apiCalls';
import '../styles/AuthForm.css';

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    sessionDetails, setSessionDetails, showAuthLoader, setShowAuthLoader,
  } = useContext(SessionContext);

  const handleSubmit = (e) => {
    const user = {
      name, email, phone, password,
    };
    authCall(user, setSessionDetails, 'signup', setShowAuthLoader);
    e.preventDefault();
  };

  const handleFormCancel = (e) => {
    setPhone('');
    setName('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    e.preventDefault();
  };

  useEffect(() => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  }, [sessionDetails]);

  function handleConfirmPassword(e) {
    e.preventDefault();
    setConfirmPassword(e.target.value);
    setIsDisabled(!(e.target.value === password));
  }

  return (
    <div className="form-container">
      <h2>Sign up to Business Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
          <p>
            Name:
          </p>
          <input
            placeholder="Firstname lastname"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-elements">
          <p>
            Email:
          </p>
          <input
            placeholder="Enter valid email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elements">
          <p>
            Phone:
          </p>
          <input
            placeholder="Indian Phone number"
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

        <div className="form-elements">
          <p>
            Confirm Password:
          </p>
          <input
            placeholder="Re-enter Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleConfirmPassword(e)}
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="form-btn" disabled={isDisabled}>Sign Up</button>
          <button type="submit" className="form-btn" onClick={handleFormCancel}>Cancel</button>
        </div>
        {isDisabled && confirmPassword !== '' && <p style={{ color: 'red' }}>Passwords don&apos;t match</p>}
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

export default Signup;
