import { useEffect, useState } from 'react';
import { fetchDeals } from '../utils/apiCalls';
import DashboardContext from '../contexts/DashboardContext';
import Deals from './Deals';
import '../styles/Dashboard.css';
import SideTransactions from './SideTransactions';

const Dashboard = () => {
  const [deals, setDeals] = useState([]);
  const [apiMsg, setApiMsg] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [msgColor, setMsgColor] = useState('');
  useEffect(() => {
    fetchDeals(setDeals, setApiMsg, setShowMessage, setMsgColor, 'get');
  }, []);

  return (
    <div className="dashboard-container">
      {
        showMessage && apiMsg !== '' && <p className={`dashboard-msg ${msgColor}`}>{apiMsg}</p>
      }
      <DashboardContext.Provider value={{
        deals, setDeals, apiMsg, setApiMsg, setShowMessage, setMsgColor,
      }}
      >
        <Deals />
        <SideTransactions />
      </DashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
