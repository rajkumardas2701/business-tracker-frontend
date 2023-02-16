import { useContext, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import Deal from '../components/Deal';
import CreateDeal from '../components/CreateDeal';
import '../styles/Deals.css';
import DealTransactions from './DealTransactions';

const Deals = () => {
  const { deals } = useContext(DashboardContext);
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const handleCreateDeal = (e) => {
    setShowCreateDeal(!showCreateDeal);
    e.preventDefault();
  };
  return (
    <div className="deals-container">
      <div className="deal-transact">
        <div className="deals-list">
          {
            (deals && deals.length)
              ? deals.map((deal) => (
                <Deal
                  key={deal.id}
                  deal={deal}
                />
              ))
              : <p>Fetching Deals</p>
          }
        </div>
        <DealTransactions />
      </div>

      <button type="submit" onClick={handleCreateDeal} className="create-deal">Create Deal</button>
      {showCreateDeal && <CreateDeal setShowCreateDeal={setShowCreateDeal} />}
    </div>
  );
};

export default Deals;
