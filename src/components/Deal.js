import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Deal.css';
import { useEffect, useState } from 'react';
import EditDeal from './EditDeal';
import { calulateBalance } from '../helper_functions/helperMethods';

const Deal = ({
  deal, setDealID, showDeleteWarning, setShowDeleteWarning,
}) => {
  const [showEditDeal, setShowEditDeal] = useState(false);
  const [dealBalance, setDealBalance] = useState(0.0);
  const [farmerAmount, setFarmerAmount] = useState(0.0);
  const [dealerAmount, setDealerAmount] = useState(0.0);
  useEffect(() => {
    const [a, b, c] = calulateBalance(deal);
    setDealBalance(a);
    setFarmerAmount(b);
    setDealerAmount(c);
  }, [deal]);
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
    <div className="deal-container">
      {showEditDeal && <EditDeal deal={deal} setShowEditDeal={setShowEditDeal} />}
      <button type="submit" onClick={handleDealClick} className="deal-btn">
        <div className="deal-head deal-row">
          <div>
            {`${deal.vehicle_date.slice(0, -8).toUpperCase()} | ${deal.vehicle_date.slice(-8, -4)}-${deal.vehicle_date.slice(-4, -2)}-${deal.vehicle_date.slice(-2)}`}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                color: 'blue', cursor: 'pointer', margin: '10px', fontSize: '15px',
              }}
              onClick={handleEditForm}
            />
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                color: 'red', cursor: 'pointer', margin: '10px', fontSize: '15px',
              }}
              onClick={handleDeleteForm}
            />
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content">
            <p>
              Farmer:
            </p>
            <p>
              {deal.f_name}
            </p>
          </div>
          <div className="deal-content">
            <p>
              Dealer:
            </p>
            <p>
              {deal.d_name}
            </p>
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content">
            <p>
              Qty (in KG):
            </p>
            <p>
              {deal.f_quantiy}
              {' '}
              KG
            </p>
          </div>
          <div className="deal-content">
            <p>
              Qty (in KG):
            </p>
            <p>
              {deal.d_quantity}
              {' '}
              KG
            </p>
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content">
            <p>
              Discount (in KG):
            </p>
            <p>
              {deal.f_choot}
              {' '}
              KG
            </p>
          </div>
          <div className="deal-content">
            <p>
              Discount (in KG):
            </p>
            <p>
              {deal.d_choot}
              {' '}
              KG
            </p>
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content">
            <p>
              Rate:
            </p>
            <p>
              {deal.f_rate}
            </p>
          </div>
          <div className="deal-content">
            <p>
              Rate:
            </p>
            <p>
              {deal.d_rate}
            </p>
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content">
            <p>
              Amount:
            </p>
            <p>
              {farmerAmount}
            </p>
          </div>
          <div className="deal-content">
            <p>
              Amount:
            </p>
            <p>
              {dealerAmount}
            </p>
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content">
            <p>
              Transport:
            </p>
            <p>
              {deal.vehicle_fare}
            </p>
          </div>
          <div className="deal-content">
            <p>
              Labour:
            </p>
            <p>
              {deal.labour_charge}
            </p>
          </div>
        </div>

        <div className="deal-row">
          <div className="deal-content deal-balance" style={{ backgroundColor: dealBalance < 0 ? 'red' : 'green' }}>
            <p>
              Balance:
            </p>
            <p>
              {dealBalance}
            </p>
          </div>
        </div>
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
