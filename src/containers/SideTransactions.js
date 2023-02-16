import { useEffect, useState } from 'react';
import '../styles/SideTransactions.css';
import Transaction from '../components/Transaction';
import { fetchSideTxs } from '../utils/apiCalls';

const SideTransactions = () => {
  const [sTxs, setSTxs] = useState([]);
  useEffect(() => {
    fetchSideTxs(setSTxs);
  }, []);
  return (
    <div className="side-transactions-container">
      <div className="side-transactions-list">
        <h3 style={{ marginTop: '10px' }}>Side Transactions</h3>
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
              <td style={{ width: '50%' }}>
                Remark
              </td>
            </tr>
          </thead>
          <tbody>
            {(sTxs && sTxs.length)
              ? sTxs.map((sTx) => (
                <Transaction
                  key={sTx.id}
                  sTx={sTx}
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

      </div>
    </div>
  );
};

export default SideTransactions;
