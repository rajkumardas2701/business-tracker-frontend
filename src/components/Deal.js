import PropTypes from 'prop-types';
import '../styles/Deal.css';

const Deal = ({ deal }) => (
  <div className="deal-container">
    <table>
      <th>
        Vehicle and Date:
        {deal.vehicle_date}
      </th>

      <tr>
        <td>
          <p>
            Farmer name:
            {deal.f_name}
          </p>
        </td>
        <td>
          <p>
            Dealer Name:
            {deal.d_name}
          </p>
        </td>
      </tr>

      <tr>
        <td>
          <p>
            Farmer Quantity:
            {deal.f_quantiy}
          </p>
        </td>
        <td>
          <p>
            Dealer Quantity:
            {deal.d_quantity}
          </p>
        </td>
      </tr>

      <tr>
        <td>
          <p>
            Farmer discount in KG:
            {deal.f_choot}
          </p>
        </td>
        <td>
          <p>
            Dealer discount in KG:
            {deal.d_choot}
          </p>
        </td>
      </tr>

      <tr>
        <td>
          <p>
            Farmer Rate:
            {deal.f_rate}
          </p>
        </td>
        <td>
          <p>
            Dealer Rate:
            {deal.d_rate}
          </p>
        </td>
      </tr>

      <tr>
        <td>
          <p>
            Farmer Actual Amount:
            {deal.f_actual_amount}
          </p>
        </td>
        <td>
          <p>
            Dealer Actual Amount:
            {deal.d_actual_amount}
          </p>
        </td>
      </tr>
    </table>
  </div>
);

Deal.propTypes = {
  deal: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Deal;
