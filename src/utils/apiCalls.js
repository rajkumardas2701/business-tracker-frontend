import axios from 'axios';

const authCall = async (user, navigate) => {
  try {
    const result = await axios.post('http://127.0.0.1:3000/auth/login', { user }, { withCredentials: true });
    // console.log(result.data);
    localStorage.setItem('authState', JSON.stringify({
      logged_in: result.data.logged_in,
      user: result.data.user,
      message: result.data.message,
      token: result.data.token,
    }));
    navigate('/dashboard');
  } catch (error) {
    // console.log(error.response.data.message);
    localStorage.setItem('authState', JSON.stringify({
      logged_in: error.response.data.logged_in,
      user: error.response.data.user,
      message: error.response.data.message,
      token: error.response.data.token,
    }));
    navigate('/');
  }
};

export default authCall;
