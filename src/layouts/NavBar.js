import { useContext } from 'react';
import SessionContext from '../contexts/SessionContext';
import '../styles/NavBar.css';

const NavBar = () => {
  const { sessionDetails, setSessionDetails } = useContext(SessionContext);
  const handleSignOut = (e) => {
    localStorage.setItem('authToken', JSON.stringify({}));
    setSessionDetails({
      logged_in: false,
      user: {},
      message: '',
    });
    e.preventDefault();
  };

  return (
    <div className="navbar-body">
      <div className="user-greet">
        <p>
          Hi!&nbsp;
        </p>
        <p className="navbar-name">
          {sessionDetails.user && sessionDetails.user.name ? sessionDetails.user.name.split(' ')[0] : 'there'}
        </p>
      </div>
      {
      sessionDetails.logged_in && <button type="submit" onClick={handleSignOut} className="signout-btn">SignOut</button>
    }
    </div>
  );
};

export default NavBar;
