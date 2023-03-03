import PropTypes from 'prop-types';
import { useState } from 'react';
import Transaction from '../components/Transaction';
import DeleteWarning from '../layouts/DeleteWarning';
import '../styles/DealTransactions.css';

const DealTransactions = ({ dealTransacts, dealName }) => {
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [deleteTxID, setDeleteTxID] = useState(0);
  return (
    <div className="deals-transactions-container">
      <div className="deals-transactions-list">
        <h4 style={{ marginTop: '10px', textAlign: 'center' }}>
          {
            (dealName === 'No Deal selected') ? <p style={{ color: 'blue', margin: 0 }}>Select one of the deal to see Transactions</p>
              : (
                <div className="deal-transaction-vehicle-label">
                  <p>
                    Vehicle:&nbsp;
                  </p>
                  <p style={{ color: 'blue' }}>
                    {dealName.slice(0, -8).toUpperCase()}
                  </p>
                  <p>
                  &nbsp;Date:&nbsp;
                  </p>
                  <p style={{ color: 'blue' }}>
                    {dealName.slice(-8, -4)}
                    -
                    {dealName.slice(-4, -2)}
                    -
                    {dealName.slice(-2)}
                  </p>
                </div>
              )
          }
        </h4>
        <h4 className="deal-transactions-table-head">
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
        <div className="deals-transactions-body">
          {(dealTransacts && dealTransacts.length)
            ? dealTransacts.map((tx) => (
              <Transaction
                key={tx.id}
                sTx={tx}
                setShowDeleteWarning={setShowDeleteWarning}
                showDeleteWarning={showDeleteWarning}
                setDeleteTxID={setDeleteTxID}
              />
            ))
            : (
              <div>
                <p style={{ textAlign: 'center' }}>
                  There&apos;s no transactions under this deal
                </p>
              </div>
            )}
        </div>
        {showDeleteWarning
          && <DeleteWarning fn={setShowDeleteWarning} deleteTxID={deleteTxID} />}
      </div>
    </div>
  );
};

DealTransactions.propTypes = {
  dealTransacts: PropTypes.oneOfType([PropTypes.array]).isRequired,
  dealName: PropTypes.string.isRequired,
};

export default DealTransactions;
