import { useContext, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import Deal from '../components/Deal';
import CreateDeal from '../layouts/CreateDeal';
import '../styles/Deals.css';

const Deals = () => {
  const { deals } = useContext(DashboardContext);
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const handleCreateDeal = (e) => {
    setShowCreateDeal(!showCreateDeal);
    e.preventDefault();
  };
  return (
    <div className="deals-container">
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
        <button type="submit" onClick={handleCreateDeal} className="create-deal">Create Deal</button>
      </div>
      {showCreateDeal && <CreateDeal />}
    </div>
  );
};

export default Deals;
