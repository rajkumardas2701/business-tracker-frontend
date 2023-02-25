import axios from 'axios';
import apiURL from '../constants/constant';

const authCall = async (user, setSessionDetails, type) => {
  try {
    const result = await axios.post(`${apiURL}/auth/${type}`, { user }, { withCredentials: true });
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
    const result = await axios.get(`${apiURL}/deals`, {
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
    const result = await axios.post(`${apiURL}/deals`, { formData }, {
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

const updateDeal = async (formData, setDeals, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.patch(`${apiURL}/deals/${formData.id}`, { formData }, {
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

const deleteDealCall = async (setDeals, deleteDealID, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.delete(`${apiURL}/deals/${deleteDealID}`, {
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

const fetchTxs = async (setTxs, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.get(`${apiURL}/financial_transactions`, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setTxs(result.data.fts);
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

const postTx = async (setTxs, formData, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.post(`${apiURL}/financial_transactions`, { formData }, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setTxs(result.data.fts);
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

const updateTx = async (formData, setTxs, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.patch(`${apiURL}/financial_transactions/${formData.id}`, { formData }, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setTxs(result.data.fts);
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

const deleteTxCall = async (setTxs, deleteTxID, setApiMsg, setShowMessage, setMsgColor) => {
  try {
    const result = await axios.delete(`${apiURL}/financial_transactions/${deleteTxID}`, {
      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('authToken')).token}`,
      },
    }, { withCredentials: true });
    setTxs(result.data.fts);
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

export {
  authCall, fetchDeals, postDeal, updateDeal,
  deleteDealCall, fetchTxs, postTx, updateTx, deleteTxCall,
};
