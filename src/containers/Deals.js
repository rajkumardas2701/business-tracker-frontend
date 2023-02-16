import { useContext, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import Deal from '../components/Deal';
import CreateDeal from '../components/CreateDeal';
import DealTransactions from './DealTransactions';
import CreateTransaction from '../components/CreateTransaction';
import '../styles/Deals.css';

const Deals = () => {
  const { deals } = useContext(DashboardContext);
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const [showCreateTransaction, setShowCreateTransaction] = useState(false);
  const handleCreateDeal = (e) => {
    setShowCreateDeal(!showCreateDeal);
    e.preventDefault();
  };
  const handleCreateTransaction = (e) => {
    setShowCreateTransaction(!showCreateTransaction);
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
      <button type="submit" onClick={handleCreateTransaction} className="create-transaction">Enter Transaction</button>
      {showCreateDeal && <CreateDeal setShowCreateDeal={setShowCreateDeal} />}
      {showCreateTransaction && (
      <CreateTransaction
        setShowCreateTransaction={setShowCreateTransaction}
      />
      )}
    </div>
  );
};

export default Deals;
