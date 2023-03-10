import { useContext } from 'react';
import SessionContext from '../contexts/SessionContext';
import '../styles/NavBar.css';

const NavBar = () => {
  const { sessionDetails, setSessionDetails } = useContext(SessionContext);
  const handleSignOut = (e) => {
    localStorage.removeItem('authToken');
    setSessionDetails({
      logged_in: false,
      user: {},
      message: '',
    });
    console.log('clicked on sign out');
    e.preventDefault();
  };

  return (
    <div className="navbar-body">
      <p className="nav-logo">BUSINESS TRACKER</p>
      <p className="nav-logo-short">
        Business
        <br />
        Tracker
      </p>
      <div className="user-greet">
        <p>
          Hi,&nbsp;
        </p>
        <p className="navbar-name">
          {sessionDetails.user && sessionDetails.user.name ? sessionDetails.user.name.split(' ')[0] : 'there'}
        </p>
      </div>
      {
      sessionDetails.logged_in && <button type="submit" onClick={handleSignOut} className="signout-btn">Sign Out</button>
    }
    </div>
  );
};

export default NavBar;
