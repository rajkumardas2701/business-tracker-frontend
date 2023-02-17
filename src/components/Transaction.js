import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import DashboardContext from '../contexts/DashboardContext';

const Transaction = ({ sTx }) => {
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
    });
    setShowEditTransactionForm(!showEditTransactionForm);
    e.preventDefault();
  };
  return (
    <tr style={{ textAlign: 'center' }}>
      <td>
        {sTx.date}
      </td>
      <td>
        {sTx.amount}
      </td>
      <td style={{ color: (sTx.send_receive === 'Sent') ? 'red' : 'green' }}>
        {sTx.send_receive}
      </td>
      <td>
        {sTx.action_by}
      </td>
      <td>
        {sTx.remark}
      </td>

      <td>
        <FontAwesomeIcon icon={faEdit} style={{ color: 'blue' }} onClick={handleEditForm} />
      </td>
      <td>
        <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
      </td>
    </tr>
  );
};

Transaction.propTypes = {
  sTx: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // setShowEditTransactionForm: PropTypes.func.isRequired,
};

export default Transaction;
