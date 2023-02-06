import { useState } from 'react';
import authCall from '../utils/apiCalls';

const Login = () => {
  const [phone, setPhone] = useState(1234567890);
  const [password, setPassword] = useState('abc@123');

  const handleSubmit = (e) => {
    const user = { phone, password };
    authCall(user);
    e.preventDefault();
  };

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
