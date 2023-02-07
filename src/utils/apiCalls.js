import axios from 'axios';

const authCall = async (user, navigate, type) => {
  try {
    const result = await axios.post(`http://127.0.0.1:3000/auth/${type}`, { user }, { withCredentials: true });
    localStorage.setItem('authState', JSON.stringify({
      logged_in: result.data.logged_in,
      user: result.data.user,
      message: result.data.message,
      token: result.data.token,
    }));
    navigate('/dashboard');
  } catch (error) {
    localStorage.setItem('authState', JSON.stringify({
      logged_in: error.response ? error.response.data.logged_in : false,
      user: error.response ? error.response.data.user : {},
      message: error.response ? error.response.data.message : error.message,
      token: error.response ? error.response.data.token : '',
    }));
    navigate('/');
  }
};

export default authCall;
