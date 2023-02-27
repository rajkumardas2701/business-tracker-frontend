import { useContext, useEffect, useState } from 'react';
import '../styles/SideTransactions.css';
import Transaction from '../components/Transaction';
import DashboardContext from '../contexts/DashboardContext';
import DeleteWarning from '../layouts/DeleteWarning';
import { filterSideTxs } from '../helper_functions/helperMethods';

const SideTransactions = () => {
  const { txs } = useContext(DashboardContext);
  const [sTxs, setSTxs] = useState([]);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [deleteTxID, setDeleteTxID] = useState(0);
  useEffect(() => {
    setSTxs(filterSideTxs(txs));
  }, [txs]);
  return (
    <div className="side-transactions-container">
      <div className="side-transactions-list">
        <h3 className="side-transactions-header">Other Transactions</h3>
        <h4 className="side-transactions-table-head">
          <div className="side-transactions-table-head-content">
            <p className="transaction-first-four">
              Date
            </p>
            <p className="transaction-first-four">
              Amount
            </p>
            <p className="transaction-first-four-sent-receive">
              Sent/Received
            </p>
            <p className="transaction-first-four">
              Action by
            </p>
            <p className="transactions-remark">
              Remark
            </p>
            <p className="edit-delete">
              Edit
            </p>
            <p className="edit-delete">
              Delete
            </p>
          </div>
        </h4>
        <div className="side-transactions-table-body">
          {(sTxs && sTxs.length)
            ? sTxs.map((sTx) => (
              <Transaction
                key={sTx.id}
                sTx={sTx}
                setShowDeleteWarning={setShowDeleteWarning}
                showDeleteWarning={showDeleteWarning}
                setDeleteTxID={setDeleteTxID}
              />
            ))
            : (
              <div>
                <p style={{ textAlign: 'center' }}>
                  There&apos;s no other transactions to show now
                </p>
              </div>
            )}
        </div>
        {/* </div> */}
        {showDeleteWarning && <DeleteWarning fn={setShowDeleteWarning} deleteTxID={deleteTxID} />}
      </div>
    </div>
  );
};

export default SideTransactions;
