import { useContext, useEffect, useState } from 'react';
import { fetchDeals, fetchTxs } from '../utils/apiCalls';
import DashboardContext from '../contexts/DashboardContext';
import Deals from './Deals';
import '../styles/Dashboard.css';
import SideTransactions from './SideTransactions';
import Balance from '../layouts/Balance';
import SessionContext from '../contexts/SessionContext';

const Dashboard = () => {
  const [deals, setDeals] = useState([]);
  const [apiMsg, setApiMsg] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [msgColor, setMsgColor] = useState('');
  const [sTxs, setSTxs] = useState([]);
  const [txs, setTxs] = useState([]);
  const [showEditTransactionForm, setShowEditTransactionForm] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const { setSessionDetails } = useContext(SessionContext);
  const [showApiMsgLoader, setShowApiMsgLoader] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  useEffect(() => {
    fetchDeals(setDeals, setApiMsg, setShowMessage, setMsgColor,
      setSessionDetails, setShowApiMsgLoader);
    fetchTxs(setTxs, setApiMsg, setShowMessage, setMsgColor, setShowApiMsgLoader);
  }, [setSessionDetails]);
  const handleSwitch = (e) => {
    setShowDeals(!showDeals);
    e.preventDefault();
  };
  return (
    <div className="dashboard-container">
      {
        (showMessage || showApiMsgLoader) && apiMsg !== '' && <p className={`dashboard-msg ${msgColor}`}>{apiMsg}</p>
      }
      <DashboardContext.Provider value={{
        deals,
        setDeals,
        apiMsg,
        setApiMsg,
        setShowMessage,
        setMsgColor,
        sTxs,
        setSTxs,
        showEditTransactionForm,
        setShowEditTransactionForm,
        editFormData,
        setEditFormData,
        txs,
        setTxs,
        showApiMsgLoader,
        setShowApiMsgLoader,
        setShowDeals,
      }}
      >
        <Balance />
        <div className="deal-transactions-large">
          <Deals />
          <SideTransactions />
        </div>
        <div className="deal-transactions-switch-container-small">
          <div className="deals-transactions-switch">
            <button
              className={`showDeals-${!showDeals}`}
              type="submit"
              style={
              {
                width: '50vw', height: '6vh', border: 'none', color: 'blue', fontWeight: 'bolder',
              }
              }
              onClick={handleSwitch}
            >
              Deals and Transactions
            </button>
            <button
              className={`showDeals-${showDeals}`}
              type="submit"
              style={
              {
                width: '50vw', height: '6vh', border: 'none', color: 'blue', fontWeight: 'bolder',
              }
              }
              onClick={handleSwitch}
            >
              Other Transactions
            </button>
          </div>
          <div className="deal-transactions-container">
            {showDeals ? <Deals /> : <SideTransactions />}
          </div>
        </div>
      </DashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
