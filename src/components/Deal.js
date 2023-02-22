import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Deal.css';
import { useState } from 'react';
import EditDeal from './EditDeal';

const Deal = ({
  deal, setDealID, showDeleteWarning, setShowDeleteWarning,
}) => {
  const [showEditDeal, setShowEditDeal] = useState(false);
  const handleDealClick = (e) => {
    setDealID(deal.id);
    e.preventDefault();
  };
  const handleEditForm = (e) => {
    setShowEditDeal(!showEditDeal);
    e.preventDefault();
  };
  const handleDeleteForm = (e) => {
    setShowDeleteWarning(!showDeleteWarning);
    setDealID(deal.id);
    e.preventDefault();
  };

  return (
    <div type="submit" className="deal-container">
      {showEditDeal && <EditDeal deal={deal} setShowEditDeal={setShowEditDeal} />}
      <button type="submit" onClick={handleDealClick}>
        <table>
          <thead style={{ textAlign: 'center', margin: 'auto' }}>
            <tr>
              <td>
                {deal.vehicle_date}
              </td>
              <td>
                <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', cursor: 'pointer', margin: '10px' }} onClick={handleEditForm} />
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', cursor: 'pointer', margin: '10px' }} onClick={handleDeleteForm} />
              </td>
            </tr>

          </thead>
          <tbody>
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
          </tbody>
        </table>
      </button>
    </div>
  );
};
Deal.propTypes = {
  deal: PropTypes.oneOfType([PropTypes.object]).isRequired,
  setDealID: PropTypes.func.isRequired,
  setShowDeleteWarning: PropTypes.func.isRequired,
  showDeleteWarning: PropTypes.bool.isRequired,
};

export default Deal;
