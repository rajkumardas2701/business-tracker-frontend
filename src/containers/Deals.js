import { useContext, useEffect, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import Deal from '../components/Deal';
import CreateDeal from '../components/CreateDeal';
import DealTransactions from './DealTransactions';
import CreateTransaction from '../components/CreateTransaction';
import EditTransaction from '../components/EditTransaction';
import { filterDealTransactions, fetchDealName } from '../helper_functions/helperMethods';
import '../styles/Deals.css';

const Deals = () => {
  const { deals, showEditTransactionForm, txs } = useContext(DashboardContext);
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const [showCreateTransaction, setShowCreateTransaction] = useState(false);
  const [dealTransacts, setDealTransacts] = useState([]);
  const [dealName, setDealName] = useState('');
  // const [initialDealID, setInitialDealID] = useState(0);
  const [dealID, setDealID] = useState(0);
  useEffect(() => {
    // setInitialDealID((deals.length > 0) ? deals[0].id : 0);
    setDealTransacts(filterDealTransactions(txs, dealID));
    setDealName(fetchDealName(dealID, deals));
  }, [txs, dealID, deals]);
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
      <h3 style={{ marginRight: '20%', textAlign: 'end' }}>Deals related Transactions</h3>
      <div className="deal-transact">
        <div className="deals-list">
          <h4 style={{ textAlign: 'center' }}>Deals</h4>
          {
            (deals && deals.length)
              ? deals.map((deal) => (
                <Deal
                  key={deal.id}
                  deal={deal}
                  setDealID={setDealID}
                />
              ))
              : <p>Fetching Deals</p>
          }
        </div>
        <DealTransactions dealTransacts={dealTransacts} dealName={dealName} />
      </div>

      <button type="submit" onClick={handleCreateDeal} className="create-deal">Create Deal</button>
      <button type="submit" onClick={handleCreateTransaction} className="create-transaction">Enter Transaction</button>
      {showCreateDeal && <CreateDeal setShowCreateDeal={setShowCreateDeal} />}
      {showCreateTransaction && (
      <CreateTransaction
        setShowCreateTransaction={setShowCreateTransaction}
      />
      )}
      { showEditTransactionForm && <EditTransaction /> }
    </div>
  );
};

export default Deals;
