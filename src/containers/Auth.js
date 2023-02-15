import { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import '../styles/Auth.css';

const Auth = () => {
  const [loginType, setLoginType] = useState(true);

  const switchAuthType = (e) => {
    setLoginType(!loginType);
    e.preventDefault();
  };

  return (
    <div className="Auth-body">
      {loginType ? <Login />
        : <Signup />}
      {
      loginType
        ? (
          <div className="switch-auth">
            <p>
              Don&apos;t have an account?
            </p>
            <button type="submit" className="form-btn" onClick={switchAuthType}>Sign Up</button>
          </div>
        )
        : (
          <div className="switch-auth">
            <p>
              Already have an account?
            </p>
            <button type="submit" className="form-btn" onClick={switchAuthType}>Login</button>
          </div>
        )
    }
    </div>
  );
};

export default Auth;
