import { useContext } from 'react';
import DashboardContext from '../contexts/DashboardContext';

const CollapsedST = () => {
  const { setShowSideTxs, showSideTxs } = useContext(DashboardContext);
  const handleBtnClick = (e) => {
    setShowSideTxs(!showSideTxs);
    e.preventDefault();
  };
  return (
    <button type="submit" onClick={handleBtnClick}>Show Other Transactions</button>
  );
};

export default CollapsedST;
