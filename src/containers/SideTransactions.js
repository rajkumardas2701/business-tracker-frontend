import { useContext, useEffect, useState } from 'react';
import '../styles/SideTransactions.css';
import Transaction from '../components/Transaction';
import { fetchSideTxs } from '../utils/apiCalls';
import DashboardContext from '../contexts/DashboardContext';
import DeleteWarning from '../layouts/DeleteWarning';

const SideTransactions = () => {
  const { sTxs, setSTxs } = useContext(DashboardContext);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [deleteTxID, setDeleteTxID] = useState(0);
  useEffect(() => {
    fetchSideTxs(setSTxs);
  }, []);
  return (
    <div className="side-transactions-container">
      <div className="side-transactions-list">
        <h3 style={{ marginTop: '10px' }}>Other Transactions</h3>
        <table>
          <thead style={{ textAlign: 'center', margin: 'auto' }}>
            <tr>
              <td>
                Date
              </td>
              <td>
                Amount
              </td>
              <td>
                Sent/Received
              </td>
              <td>
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
                <tr>
                  <td colSpan="4">
                    There&apos;s no side transactions to show now
                  </td>
                </tr>
              )}
          </tbody>
        </table>
        {showDeleteWarning && <DeleteWarning fn={setShowDeleteWarning} deleteTxID={deleteTxID} />}
      </div>
    </div>
  );
};

export default SideTransactions;
