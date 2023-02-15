import { useEffect, useState } from 'react';
import { dealsCall } from '../utils/apiCalls';
import DashboardContext from '../contexts/DashboardContext';
import Deals from './Deals';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [deals, setDeals] = useState([]);
  const [apiMsg, setApiMsg] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [msgColor, setMsgColor] = useState('');
  useEffect(() => {
    dealsCall(setDeals, setApiMsg, setShowMessage, setMsgColor);
  }, []);

  return (
    <div className="dashboard-container">
      {
        showMessage && apiMsg !== '' && <p className={`dashboard-msg ${msgColor}`}>{apiMsg}</p>
      }
      <DashboardContext.Provider value={{
        deals, setDeals, apiMsg, setApiMsg,
      }}
      >
        <Deals />
      </DashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
