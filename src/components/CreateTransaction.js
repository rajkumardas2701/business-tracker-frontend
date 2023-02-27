import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AuthForm.css';
import '../styles/CreateTransaction.css';
import { postTx, fetchDeals } from '../utils/apiCalls';
import DashboardContext from '../contexts/DashboardContext';

const CreateTransaction = ({ setShowCreateTransaction }) => {
  const [date, setDate] = useState('');
  const [actionBy, setActionBy] = useState('');
  const [sentReceive, setSentReceive] = useState('Sent');
  const [amount, setAmount] = useState(0);
  const [remark, setRemark] = useState('');
  const [dealID, setDealID] = useState('');
  const [selectedOption, setSelectedoption] = useState('dealNo');
  const [expandYes, setExpandYes] = useState(false);
  const {
    setTxs, setApiMsg, setShowMessage, setMsgColor, setDeals,
    setSessionDetails, deals, setShowApiMsgLoader,
  } = useContext(DashboardContext);

  const handleFormCancel = (e) => {
    setDate('');
    setActionBy('');
    setSentReceive('');
    setAmount(0);
    setRemark(0.0);
    setShowCreateTransaction(false);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const formData = {
      date,
      action_by: actionBy,
      send_receive: sentReceive,
      amount,
      remark,
      deal_id: dealID,
    };
    postTx(setTxs, formData, setApiMsg, setShowMessage, setMsgColor, setShowApiMsgLoader);
    setShowCreateTransaction(false);
    e.preventDefault();
  };

  const handleOptionChange = (e) => {
    // console.log(e.target.value);
    setSelectedoption(e.target.value);
    e.preventDefault();
  };

  // useEffect(() => {
  //   setSelectedoption(selectedOption);
  // }, [selectedOption]);

  const handleDealYesClick = (e) => {
    setExpandYes(true);
    fetchDeals(setDeals, setApiMsg, setShowMessage, setMsgColor, setSessionDetails);
    e.preventDefault();
  };

  const handleDealNoClick = (e) => {
    setExpandYes(false);
    e.preventDefault();
  };

  return (
    <div className="form-container create-deal-container">
      <h2>Enter a new Transaction</h2>
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
            expandYes
              ? (
                <label htmlFor="drop-down-deals">
                  <select
                    id="drop-down-deals"
                    name="dealID"
                    value={dealID}
                    onChange={(e) => setDealID(e.target.value)}
                    // required
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
                      : <option>No deals created</option>
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
                    onChange={handleOptionChange}
                  />
                  {/* {console.log(`Deal Yes: ${selectedOption === 'dealYes'}
                  Deal yes rendered`)} */}
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
              onChange={handleOptionChange}
              onClick={handleDealNoClick}
            />
            {/* {console.log(`Deal No: ${selectedOption === 'dealNo'}
             Deal No rendered`)} */}
          </div>
        </div>
        <div className="btn-container">
          <button type="submit" className="form-btn">Submit</button>
          <button type="submit" className="form-btn" onClick={handleFormCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

CreateTransaction.propTypes = {
  setShowCreateTransaction: PropTypes.func.isRequired,
};

export default CreateTransaction;
