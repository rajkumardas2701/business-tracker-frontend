import { useEffect, useState } from 'react';
import DealContext from '../contexts/DealsContext';
import { dealsCall } from '../utils/apiCalls';
import Deals from './Deals';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    dealsCall(setDeals);
  }, []);

  return (
    <div className="dashboard-container">
      <DealContext.Provider value={{ deals, setDeals }}>
        <Deals />
      </DealContext.Provider>
    </div>
  );
};

export default Dashboard;
