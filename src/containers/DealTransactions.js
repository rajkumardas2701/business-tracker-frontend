import PropTypes from 'prop-types';
import { useState } from 'react';
import Transaction from '../components/Transaction';
import DeleteWarning from '../layouts/DeleteWarning';

const DealTransactions = ({ dealTransacts, dealName }) => {
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [deleteTxID, setDeleteTxID] = useState(0);
  return (
    <div className="deals-transactions-container">
      <div className="side-transactions-list">
        <h4 style={{ marginTop: '10px', color: 'blue' }}>
          {(dealName === 'No Deal selected') ? 'Select one of the deal to see Transactions'
            : `Vehicle: ${dealName.slice(0, -6).toUpperCase()} & Date: ${dealName.slice(-8, -4)}-${dealName.slice(-4, -2)}-${dealName.slice(-2)}`}
        </h4>
        <table>
          <thead style={{ textAlign: 'center', margin: 'auto' }}>
            <tr>
              <td style={{ width: '15%' }}>
                Date
              </td>
              <td>
                Amount
              </td>
              <td>
                Sent/Received
              </td>
              <td style={{ width: '15%' }}>
                Action by
              </td>
              <td style={{ width: '30%' }}>
                Remark
              </td>
              <td>
                Edit
              </td>
              <td>
                Delete
              </td>
            </tr>
          </thead>
          <tbody>
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
                <tr>
                  <td colSpan="7">
                    There&apos;s no transactions under this deal
                  </td>
                </tr>
              )}
          </tbody>
        </table>
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
