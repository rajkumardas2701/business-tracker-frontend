import { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/SignUp';

const Auth = () => {
  const [loginType, setLoginType] = useState(true);

  const switchAuthType = (e) => {
    setLoginType(!loginType);
    e.preventDefault();
  };

  return (
    <div>
      {loginType ? <Login />
        : <Signup />}
      {
      loginType
        ? (
          <div>
            <p>
              Don&apos;t have an account?
              <button type="submit" onClick={switchAuthType}>Sign Up</button>
            </p>
          </div>
        )
        : (
          <div>
            <p>
              Already have an account?
              <button type="submit" onClick={switchAuthType}>Login</button>
            </p>
          </div>
        )
    }
    </div>
  );
};

export default Auth;
