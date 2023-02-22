import PropTypes from 'prop-types';
import { useContext } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import { deleteDealCall, deleteTxCall } from '../utils/apiCalls';

const DeleteWarning = ({ fn, deleteTxID, dealID }) => {
  const {
    setTxs, setApiMsg, setShowMessage, setMsgColor, setDeals,
  } = useContext(DashboardContext);
  const handleFormCancel = (e) => {
    fn(false);
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    if (deleteTxID) {
      deleteTxCall(setTxs, deleteTxID, setApiMsg, setShowMessage, setMsgColor);
    }
    if (dealID) {
      deleteDealCall(setDeals, dealID, setApiMsg, setShowMessage, setMsgColor);
    }
    fn(false);
    e.preventDefault();
  };
  return (
    <div className="form-container create-deal-container">
      <form onSubmit={handleSubmit}>
        <p>Are you sure you want to delete?</p>
        <div className="btn-container">
          <button type="submit" className="form-btn">Submit</button>
          <button type="submit" className="form-btn" onClick={handleFormCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

DeleteWarning.propTypes = {
  fn: PropTypes.func.isRequired,
  deleteTxID: PropTypes.number,
  dealID: PropTypes.number,
  // setShowEditTransactionForm: PropTypes.func.isRequired,
};

DeleteWarning.defaultProps = {
  deleteTxID: null,
  dealID: null,
};

export default DeleteWarning;
