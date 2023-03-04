import { useContext, useEffect, useState } from 'react';
// import { TailSpin } from 'react-loader-spinner';
import DashboardContext from '../contexts/DashboardContext';
import Deal from '../components/Deal';
import CreateDeal from '../components/CreateDeal';
import DealTransactions from './DealTransactions';
import CreateTransaction from '../components/CreateTransaction';
import EditTransaction from '../components/EditTransaction';
import { filterDealTransactions, fetchDealName } from '../helper_functions/helperMethods';
import DeleteWarning from '../layouts/DeleteWarning';
import '../styles/Deals.css';
import ExcelExport from '../components/ExportExcel';

const Deals = () => {
  const { deals, showEditTransactionForm, txs } = useContext(DashboardContext);
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const [showCreateTransaction, setShowCreateTransaction] = useState(false);
  const [dealTransacts, setDealTransacts] = useState([]);
  const [dealName, setDealName] = useState('');
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
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
      <h3 className="deal-transactions-header">Deals related Transactions</h3>
      <div className="deal-transact">
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
        <DealTransactions dealTransacts={dealTransacts} dealName={dealName} />
      </div>

      <button type="submit" onClick={handleCreateDeal} className="create-deal">Create Deal</button>
      <button type="submit" onClick={handleCreateTransaction} className="create-transaction">Enter Transaction</button>
      <div className="excel-export">
        <ExcelExport excelData={txs} fileName={(new Date()).toISOString()} />
      </div>
      {showCreateDeal && <CreateDeal setShowCreateDeal={setShowCreateDeal} />}
      {showCreateTransaction && (
      <CreateTransaction
        setShowCreateTransaction={setShowCreateTransaction}
      />
      )}
      { showEditTransactionForm && <EditTransaction /> }
      {showDeleteWarning && <DeleteWarning fn={setShowDeleteWarning} dealID={dealID} />}
    </div>
  );
};

export default Deals;
