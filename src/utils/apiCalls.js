import axios from 'axios';

const authCall = async (user, setSessionDetails, type) => {
  try {
    const result = await axios.post(`http://127.0.0.1:3000/auth/${type}`, { user }, { withCredentials: true });
    localStorage.setItem('authToken', JSON.stringify({
      logged_in: result.data.logged_in,
      token: result.data.token,
    }));
    setSessionDetails({
      logged_in: result.data.logged_in,
      user: result.data.user,
      message: result.data.message,
    });
  } catch (error) {
    localStorage.setItem('authToken', JSON.stringify({
      logged_in: error.response ? error.response.data.logged_in : false,
      token: error.response ? error.response.data.token : '',
    }));
    setSessionDetails({
      logged_in: error.response ? error.response.data.logged_in : false,
      user: error.response ? error.response.data.user : {},
      message: error.response ? error.response.data.message : error.message,
    });
  }
};

const dealsCall = async (setDeals) => {
  try {
    const result = await axios.get('http://127.0.0.1:3000/deals', {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    // console.log(result.data.deals);
    setDeals(result.data.deals);
  } catch (error) {
    console.log(error);
  }
};

export { authCall, dealsCall };
