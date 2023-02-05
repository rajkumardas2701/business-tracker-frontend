import { useState } from 'react';
import axios from 'axios';
// import axios

const Login = () => {
  // const [name, setName] = useState('');
  const [phone, setPhone] = useState(1234567890);
  const [password, setPassword] = useState('abc@123');
  // const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    axios.post('http://127.0.0.1:3000/auth/login', { phone, password }, { withCredentials: true })
      .then((response) => {
        console.log(response);
      });
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
          Name:
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
