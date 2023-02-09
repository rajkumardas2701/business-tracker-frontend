import { useState, useContext } from 'react';
import authCall from '../utils/apiCalls';
import SessionContext from '../contexts/SessionContext';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { setSessionDetails } = useContext(SessionContext);
  const handleSubmit = (e) => {
    const user = { phone, password };
    authCall(user, setSessionDetails, 'login');
    e.preventDefault();
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
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

        <div>
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

        <button type="submit">Sign In</button>

      </form>
    </div>
  );
};

export default Login;
