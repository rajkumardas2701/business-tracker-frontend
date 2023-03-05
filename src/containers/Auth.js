import { useContext, useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import SessionContext from '../contexts/SessionContext';
import '../styles/Auth.css';

const Auth = () => {
  const [loginType, setLoginType] = useState(true);
  const { setSessionDetails } = useContext(SessionContext);
  const switchAuthType = (e) => {
    setSessionDetails({
      logged_in: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')).logged_in : false,
      user: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')).user : {},
      message: '',
    });
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
            <button type="submit" className="form-btn form-btn-small" onClick={switchAuthType}>Sign Up</button>
          </div>
        )
        : (
          <div className="switch-auth">
            <p>
              Already have an account?
            </p>
            <button type="submit" className="form-btn form-btn-small" onClick={switchAuthType}>Login</button>
          </div>
        )
    }
    </div>
  );
};

export default Auth;
