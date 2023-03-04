import { useContext, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import { updateTx, fetchDeals } from '../utils/apiCalls';
import '../styles/AuthForm.css';
import '../styles/CreateTransaction.css';

const EditTransaction = () => {
  const {
    setShowEditTransactionForm, editFormData, setTxs, deals,
    setApiMsg, setShowMessage, setMsgColor, setShowApiMsgLoader, setDeals, setSessionDetails,
  } = useContext(DashboardContext);
  const [date, setDate] = useState(editFormData.date);
  const [actionBy, setActionBy] = useState(editFormData.action_by);
  const [sentReceive, setSentReceive] = useState(editFormData.send_receive);
  const [amount, setAmount] = useState(editFormData.amount);
  const [remark, setRemark] = useState(editFormData.remark);
  const [dealID, setDealID] = useState(editFormData.deal_id ? editFormData.deal_id : '');
  const [expandYes, setExpandYes] = useState(false);
  const [selectedOption, setSelectedoption] = useState(editFormData.deal_id ? 'dealYes' : 'dealNo');

  const handleSubmit = (e) => {
    const formData = {
      id: editFormData.id,
      date,
      action_by: actionBy,
      send_receive: sentReceive,
      amount,
      remark,
      deal_id: dealID,
    };
    updateTx(formData, setTxs, setApiMsg, setShowMessage, setMsgColor, setShowApiMsgLoader);
    setShowEditTransactionForm(false);
    e.preventDefault();
  };

  const handleEditFormCancel = (e) => {
    setShowEditTransactionForm(false);
    e.preventDefault();
  };

  const handleDealYesClick = (e) => {
    setExpandYes(true);
    fetchDeals(setDeals, setApiMsg, setShowMessage,
      setMsgColor, setSessionDetails, setShowApiMsgLoader);
    setSelectedoption(e.target.value);
  };

  const handleDealNoClick = (e) => {
    setExpandYes(false);
    setDealID(null);
    setSelectedoption(e.target.value);
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
        <div className="form-elements">
          <p>
            Deal related?
          </p>
          {
            (expandYes || dealID)
              ? (
                <label htmlFor="drop-down-deals">
                  <select
                    id="drop-down-deals"
                    name="dealID"
                    value={dealID}
                    onChange={(e) => setDealID(e.target.value)}
                  >
                    <option value="">Select one of the deal</option>
                    {
                    (deals && deals.length)
                      ? deals.map((deal) => (
                        <option
                          key={deal.id}
                          value={deal.id}
                        >
                          {`${deal.vehicle_date.slice(0, -6).toUpperCase()} & ${deal.vehicle_date.slice(-8, -4)}-${deal.vehicle_date.slice(-4, -2)}-${deal.vehicle_date.slice(-2)}`}
                        </option>
                      ))
                      : <option>&apos;&apos;</option>
                  }
                  </select>
                </label>
              )
              : (
                <div className="form-input-choices">
                  <p>Yes</p>
                  <input
                    type="radio"
                    name="dealYesNo"
                    value="dealYes"
                    checked={selectedOption === 'dealYes'}
                    onClick={handleDealYesClick}
                  />
                </div>
              )
          }
          <div className="form-input-choices">
            <p>No</p>
            <input
              type="radio"
              name="dealYesNo"
              value="dealNo"
              checked={selectedOption === 'dealNo'}
              onClick={handleDealNoClick}
            />
          </div>
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
