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

const fetchDeals = async (setDeals, setApiMsg, setShowMessage, setMsgColor, setSessionDetails) => {
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
    }, 4000);
    if (error.response.data && error.response.data.token === '') {
      setTimeout((error) => {
        const tokenErr = error.response.data;
        if (tokenErr && tokenErr.token === '') {
          localStorage.setItem('authToken', JSON.stringify({
            logged_in: error.response ? error.response.data.logged_in : false,
            token: error.response ? error.response.data.token : '',
          }));
          setSessionDetails({
            logged_in: error.response ? error.response.data.logged_in : false,
            user: error.response ? error.response.data.user : {},
            message: '',
          });
        }
      }, 5000, error);
    }
  }
};

const postDeal = async (setDeals, setApiMsg, setShowMessage, setMsgColor, formData) => {
  try {
    const result = await axios.post('http://127.0.0.1:3000/deals', { formData }, {
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
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }
};

const fetchSideTxs = async (setSTxs) => {
  try {
    const result = await axios.get('http://127.0.0.1:3000/side_transactions', {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setSTxs(result.data.fts);
  } catch (error) {
    console.log(error);
    // console.log(`inside token expire: ${error}`);
  }
};

const postTx = async (setSTxs, formData) => {
  try {
    const result = await axios.post('http://127.0.0.1:3000/financial_transactions', { formData }, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setSTxs(result.data.fts);
  } catch (error) {
    console.log(error);
  }
};

const updateTx = async (formData, setSTxs) => {
  try {
    const result = await axios.patch(`http://127.0.0.1:3000/financial_transactions/${formData.id}`, { formData }, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setSTxs(result.data.fts);
  } catch (error) {
    console.log(error);
  }
};

const deleteTxCall = async (setSTxs, deleteTxID) => {
  try {
    const result = await axios.delete(`http://127.0.0.1:3000/financial_transactions/${deleteTxID}`, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setSTxs(result.data.fts);
  } catch (error) {
    console.log(error);
  }
};

export {
  authCall, fetchDeals, postDeal, fetchSideTxs, postTx, updateTx, deleteTxCall,
};
