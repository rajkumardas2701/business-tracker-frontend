import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authCall from '../utils/apiCalls';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const user = { phone, password };
    authCall(user, navigate, 'login');
    e.preventDefault();
  };

  const signupNavigate = () => navigate('/signup');

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem('authState'));
    if (authState != null && authState.logged_in) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
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

      <div>
        <p>
          Don&apos;t have an account?
          <button type="submit" onClick={signupNavigate}>Sign Up</button>
        </p>
      </div>

    </form>
  );
};

export default Login;
