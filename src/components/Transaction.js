import PropTypes from 'prop-types';

const Transaction = ({ sTx }) => (
  <tr style={{ textAlign: 'center' }}>
    <td>
      {sTx.date}
    </td>
    <td>
      {sTx.amount}
    </td>
    <td style={{ color: (sTx.send_receive === 'sent') ? 'red' : 'green' }}>
      {sTx.send_receive}
    </td>
    <td>
      {sTx.remark}
    </td>
  </tr>
);

Transaction.propTypes = {
  sTx: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Transaction;
