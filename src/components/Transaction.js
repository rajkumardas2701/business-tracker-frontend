import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import DashboardContext from '../contexts/DashboardContext';
import '../styles/Transaction.css';

const Transaction = ({
  sTx,
  setShowDeleteWarning, showDeleteWarning, setDeleteTxID,
}) => {
  const {
    setShowEditTransactionForm,
    showEditTransactionForm, setEditFormData,
  } = useContext(DashboardContext);
  const handleEditForm = (e) => {
    setEditFormData({
      id: sTx.id,
      date: sTx.date,
      amount: sTx.amount,
      send_receive: sTx.send_receive,
      action_by: sTx.action_by,
      remark: sTx.remark,
      deal_id: sTx.deal_id,
    });
    setShowEditTransactionForm(!showEditTransactionForm);
    e.preventDefault();
  };

  const handleDeleteForm = (e) => {
    setDeleteTxID(sTx.id);
    setShowDeleteWarning(!showDeleteWarning);
    e.preventDefault();
  };
  return (
    <div className="side-transactions-table-body-content">
      <p className="transaction-first-four">
        {sTx.date}
      </p>
      <p className="transaction-first-four">
        {sTx.amount}
      </p>
      <p style={{ color: (sTx.send_receive === 'Sent') ? 'red' : 'green' }} className="transaction-first-four-sent-receive">
        {sTx.send_receive}
      </p>
      <p className="transaction-first-four">
        {sTx.action_by}
      </p>
      <p className="transactions-remark">
        {sTx.remark}
      </p>
      <p className="edit-delete">
        <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', cursor: 'pointer' }} onClick={handleEditForm} />
      </p>
      <p className="edit-delete">
        <FontAwesomeIcon icon={faTrash} style={{ color: 'red', cursor: 'pointer' }} onClick={handleDeleteForm} />
      </p>
    </div>
  );
};

Transaction.propTypes = {
  sTx: PropTypes.oneOfType([PropTypes.object]).isRequired,
  setShowDeleteWarning: PropTypes.func.isRequired,
  showDeleteWarning: PropTypes.bool.isRequired,
  setDeleteTxID: PropTypes.func.isRequired,
};

export default Transaction;
