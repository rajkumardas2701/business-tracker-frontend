import { useContext, useEffect, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import getBalance from '../helper_functions/balanceCal';
import '../styles/Balance.css';

const Balance = () => {
  const { sTxs } = useContext(DashboardContext);
  const [balance, setBalance] = useState(0.0);
  useEffect(() => {
    getBalance(sTxs, setBalance);
  }, [sTxs]);
  return (
    <div className="balance-container" style={((balance < 0) ? { backgroundColor: 'red' } : { backgroundColor: 'green' })}>
      <p>
        Overall Balance:
      </p>
      <p>
        {balance}
      </p>
    </div>
  );
};

export default Balance;
