import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authCall from '../utils/apiCalls';

const Login = () => {
  const [phone, setPhone] = useState(1234567890);
  const [password, setPassword] = useState('abc@123');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const user = { phone, password };
    authCall(user, navigate);
    e.preventDefault();
  };

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem('authState'));
    if (authState != null && authState.logged_in) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          Name:
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
  );
};

export default Login;
