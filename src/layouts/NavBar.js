import { useContext } from 'react';
import SessionContext from '../contexts/SessionContext';

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
    <div>
      <p>
        Hi!&nbsp;
      </p>
      {sessionDetails.user.name ? sessionDetails.user.name.split(' ')[0] : 'there'}
      {
      sessionDetails.logged_in && <button type="submit" onClick={handleSignOut}>SignOut</button>
    }
    </div>
  );
};

export default NavBar;
