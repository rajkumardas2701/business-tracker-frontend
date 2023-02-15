import axios from 'axios';

const authCall = async (user, setSessionDetails, type) => {
  try {
    const result = await axios.post(`http://127.0.0.1:3000/auth/${type}`, { user }, { withCredentials: true });
    localStorage.setItem('authToken', JSON.stringify({
      logged_in: result.data.logged_in,
      token: result.data.token,
      user: result.data.user,
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

const dealsCall = async (setDeals, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.get('http://127.0.0.1:3000/deals', {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setDeals(result.data.deals);
    setApiMsg(result.data.message);
    setShowMessage(true);
    setMsgColor('msg-ok');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  } catch (error) {
    setDeals(error.response ? error.response.data.deals : []);
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }
};

export { authCall, dealsCall };
