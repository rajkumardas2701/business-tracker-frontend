import axios from 'axios';
import apiURL from '../constants/constant';
// import consumer from './cable';

const authCall = async (user, setSessionDetails, type, setShowAuthLoader) => {
  setShowAuthLoader(true);
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
    setShowAuthLoader(false);
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
    setShowAuthLoader(false);
  }
};

const fetchDeals = async (setDeals, setApiMsg, setShowMessage,
  setMsgColor, setSessionDetails, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Fetching Deals..!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
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
    setShowApiMsgLoader(false);
  }
};

const postDeal = async (setDeals, setApiMsg, setShowMessage,
  setMsgColor, formData, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Posting Deal...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

const updateDeal = async (formData, setDeals, setApiMsg,
  setShowMessage, setMsgColor, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Updating Deal...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

const deleteDealCall = async (setDeals, deleteDealID, setApiMsg, setShowMessage,
  setMsgColor, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Deleting Deal...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

const fetchTxs = async (setTxs, setApiMsg, setShowMessage, setMsgColor, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Fetching Transactions...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

const postTx = async (setTxs, formData, setApiMsg, setShowMessage,
  setMsgColor, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Posting Transaction...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

const updateTx = async (formData, setTxs, setApiMsg,
  setShowMessage, setMsgColor, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Updating Transaction...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

const deleteTxCall = async (setTxs, deleteTxID, setApiMsg,
  setShowMessage, setMsgColor, setShowApiMsgLoader) => {
  setMsgColor('msg-load');
  setApiMsg('Deleting Transaction...!!!');
  setShowApiMsgLoader(true);
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
    setShowApiMsgLoader(false);
  } catch (error) {
    setApiMsg(error.response ? error.response.data.message : error.message);
    setShowMessage(true);
    setMsgColor('msg-err');
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
    setShowApiMsgLoader(false);
  }
};

// const dealsChannel = async (setDeals, setApiMsg, setShowMessage, sessionDetails) => {
//   consumer.subscriptions.create({ channel: 'DealChannel', user_id: sessionDetails.user.id }, {
//     received(data) {
//       setDeals(data.deals);
//       setApiMsg(data.message);
//       setShowMessage(true);
//       setTimeout(() => {
//         setShowMessage(false);
//       }, 5000);
//     },
//   });
// };

export {
  authCall, fetchDeals, postDeal, updateDeal,
  deleteDealCall, fetchTxs, postTx, updateTx, deleteTxCall,
};
