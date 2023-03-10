import { useContext, useEffect, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import Deal from '../components/Deal';
import DealTransactions from './DealTransactions';
import { filterDealTransactions, fetchDealName } from '../helper_functions/helperMethods';
import DeleteWarning from '../layouts/DeleteWarning';
import '../styles/Deals.css';

const Deals = () => {
  const { deals, txs } = useContext(DashboardContext);
  const [dealTransacts, setDealTransacts] = useState([]);
  const [dealName, setDealName] = useState('');
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [dealID, setDealID] = useState(0);
  useEffect(() => {
    setDealTransacts(filterDealTransactions(txs, dealID));
    setDealName(fetchDealName(dealID, deals));
  }, [txs, dealID, deals]);
  return (
    <div className="deals-container">
      <h3 className="deal-transactions-header">Deals related Transactions</h3>
      <div className="deals">
        <h4 className="deals-header">Deals</h4>
        <div className="deals-list">
          {
              (deals && deals.length)
                ? deals.map((deal) => (
                  <Deal
                    key={deal.id}
                    deal={deal}
                    setDealID={setDealID}
                    showDeleteWarning={showDeleteWarning}
                    setShowDeleteWarning={setShowDeleteWarning}
                  />
                ))
                : (
                  <div className="deal-loader">
                    <p>No Deals to show yet</p>
                  </div>
                )
            }
        </div>
      </div>
      <div className="transactions-container">
        <DealTransactions dealTransacts={dealTransacts} dealName={dealName} />
      </div>
      {showDeleteWarning && <DeleteWarning fn={setShowDeleteWarning} dealID={dealID} />}
    </div>
  );
};

export default Deals;
