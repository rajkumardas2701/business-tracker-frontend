import PropTypes from 'prop-types';
import { useContext } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import { deleteTxCall } from '../utils/apiCalls';

const DeleteWarning = ({ fn, deleteTxID }) => {
  const { setSTxs } = useContext(DashboardContext);
  const handleFormCancel = (e) => {
    fn(false);
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    deleteTxCall(setSTxs, deleteTxID);
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
  deleteTxID: PropTypes.number.isRequired,
  // setShowEditTransactionForm: PropTypes.func.isRequired,
};

export default DeleteWarning;
