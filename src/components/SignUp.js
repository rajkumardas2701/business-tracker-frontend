import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authCall from '../utils/apiCalls';

const Signup = () => {
  const [phone, setPhone] = useState('9876543210');
  const [name, setName] = useState('test 2');
  const [password, setPassword] = useState('abc@123');
  const [confirmPassword, setConfirmPassword] = useState('abc@123');
  const [email, setEmail] = useState('abc@gmail.com');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const user = {
      name, email, phone, password,
    };
    authCall(user, navigate, 'signup');
    e.preventDefault();
  };

  const loginNavigate = () => navigate('/');

  return (
    <form onSubmit={handleSubmit}>
      <div>
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

      <div>
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
      <div>
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

      <div>
        <p>
          Confirm Password:
        </p>
        <input
          placeholder="Re-enter Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Sign Up</button>

      <div>
        <p>
          Already have an account?
          <button type="submit" onClick={loginNavigate}>Login</button>
        </p>
      </div>

    </form>
  );
};

export default Signup;
