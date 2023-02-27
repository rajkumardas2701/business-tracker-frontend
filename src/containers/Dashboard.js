import { useContext, useEffect, useState } from 'react';
import { fetchDeals, fetchTxs } from '../utils/apiCalls';
import DashboardContext from '../contexts/DashboardContext';
import Deals from './Deals';
import '../styles/Dashboard.css';
import SideTransactions from './SideTransactions';
import Balance from '../layouts/Balance';
import SessionContext from '../contexts/SessionContext';
// import CollapsedST from '../layouts/CollapsedST';

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
  // const [showSideTxs, setShowSideTxs] = useState(true);
  useEffect(() => {
    fetchDeals(setDeals, setApiMsg, setShowMessage, setMsgColor,
      setSessionDetails, setShowApiMsgLoader);
    fetchTxs(setTxs, setApiMsg, setShowMessage, setMsgColor, setShowApiMsgLoader);
  }, [setSessionDetails]);

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
      }}
      >
        <Balance />
        <Deals />
        <SideTransactions />
      </DashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
