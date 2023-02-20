import { useContext, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import { updateTx } from '../utils/apiCalls';
import '../styles/AuthForm.css';
import '../styles/CreateTransaction.css';

const EditTransaction = () => {
  const {
    setShowEditTransactionForm, editFormData, setTxs, setApiMsg, setShowMessage, setMsgColor,
  } = useContext(DashboardContext);
  const [date, setDate] = useState(editFormData.date);
  const [actionBy, setActionBy] = useState(editFormData.action_by);
  const [sentReceive, setSentReceive] = useState(editFormData.send_receive);
  const [amount, setAmount] = useState(editFormData.amount);
  const [remark, setRemark] = useState(editFormData.remark);

  const handleSubmit = (e) => {
    const formData = {
      id: editFormData.id,
      date,
      action_by: actionBy,
      send_receive: sentReceive,
      amount,
      remark,
    };
    updateTx(formData, setTxs, setApiMsg, setShowMessage, setMsgColor);
    setShowEditTransactionForm(false);
    e.preventDefault();
  };

  const handleEditFormCancel = (e) => {
    setShowEditTransactionForm(false);
    e.preventDefault();
  };

  return (
    <div className="form-container create-deal-container">
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
          <p>
            Date:
          </p>
          <input
            placeholder="Transaction Date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-elements">
          <p>
            Amount:
          </p>
          <input
            placeholder="Enter Amount"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-elements">
          <p>
            Sent/Received:
          </p>
          <label htmlFor="drop-down">
            <select
              id="drop-down"
              name="sentReceive"
              value={sentReceive}
              onChange={(e) => setSentReceive(e.target.value)}
              required
            >
              <option value="Sent">Sent</option>
              <option value="Received">Received</option>
            </select>
          </label>
        </div>
        <div className="form-elements">
          <p>
            Transacted By:
          </p>
          <input
            placeholder="Who performed transaction"
            type="text"
            name="actionBy"
            value={actionBy}
            onChange={(e) => setActionBy(e.target.value)}
            required
          />
        </div>
        <div className="form-elements">
          <p>
            Remark:
          </p>
          <input
            placeholder="like GPay'd someone"
            type="text"
            name="remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="form-btn">Submit</button>
          <button type="submit" className="form-btn" onClick={handleEditFormCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTransaction;
