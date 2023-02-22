import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import DashboardContext from '../contexts/DashboardContext';
import { updateDeal } from '../utils/apiCalls';
import '../styles/AuthForm.css';
// import '../styles/CreateTransaction.css';

const EditDeal = ({ deal, setShowEditDeal }) => {
  const {
    setDeals, setApiMsg, setShowMessage, setMsgColor,
  } = useContext(DashboardContext);
  const [vehicleDate, setVehicleDate] = useState(deal.vehicle_date);
  const [fName, setFName] = useState(deal.f_name);
  const [fQuantity, setFQuantity] = useState(deal.f_quantiy);
  const [fDiscount, setFDiscount] = useState(deal.f_choot);
  const [fRate, setFRate] = useState(deal.f_rate);
  const [dName, setDName] = useState(deal.d_name);
  const [dQuantity, setDQuantity] = useState(deal.d_quantity);
  const [dDiscount, setDDiscount] = useState(deal.d_choot);
  const [dRate, setDRate] = useState(deal.d_rate);
  const [fActualAmount, setFActualAmount] = useState(deal.f_actual_amount);
  const [dActualAmount, setDActualAmount] = useState(deal.d_actual_amount);
  const handleSubmit = (e) => {
    const formData = {
      id: deal.id,
      vehicle_date: vehicleDate,
      f_name: fName,
      f_quantiy: fQuantity,
      f_choot: fDiscount,
      f_rate: fRate,
      d_name: dName,
      d_quantity: dQuantity,
      d_choot: dDiscount,
      d_rate: dRate,
      f_actual_amount: fActualAmount,
      d_actual_amount: dActualAmount,
    };
    updateDeal(formData, setDeals, setApiMsg, setShowMessage, setMsgColor);
    setShowEditDeal(false);
    e.preventDefault();
  };

  const handleEditFormCancel = (e) => {
    setShowEditDeal(false);
    e.preventDefault();
  };

  return (
    <div className="form-container create-deal-container">
      <h2>Edit Deal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
          <p>
            vehicle & Date:
          </p>
          <input
            placeholder="Vehicle Date"
            type="text"
            name="vehicleDate"
            value={vehicleDate}
            onChange={(e) => setVehicleDate(e.target.value)}
            required
          />
        </div>
        <div className="form-elements">
          <p>
            Farmer Name:
          </p>
          <input
            placeholder="Enter Amount"
            type="text"
            name="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div className="form-elements">
          <p>
            Farmer Quantity:
          </p>
          <input
            placeholder="Enter in KG"
            type="number"
            name="fQuantity"
            value={fQuantity}
            onChange={(e) => setFQuantity(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Farmer Discount:
          </p>
          <input
            placeholder="Enter in number"
            type="number"
            name="fDiscount"
            value={fDiscount}
            onChange={(e) => setFDiscount(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Farmer Rate:
          </p>
          <input
            placeholder="Rate at which purchased"
            type="number"
            name="fRate"
            value={fRate}
            onChange={(e) => setFRate(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Dealer Name:
          </p>
          <input
            placeholder="Dealer's name"
            type="text"
            name="dName"
            value={dName}
            onChange={(e) => setDName(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Dealer Quantity:
          </p>
          <input
            placeholder="Enter in KG"
            type="number"
            name="dQuantity"
            value={dQuantity}
            onChange={(e) => setDQuantity(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Dealer Discount:
          </p>
          <input
            placeholder="Enter in KG"
            type="number"
            name="dDiscount"
            value={dDiscount}
            onChange={(e) => setDDiscount(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Dealer Rate:
          </p>
          <input
            placeholder="Enter in Number"
            type="number"
            name="dRate"
            value={dRate}
            onChange={(e) => setDRate(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Farmer Actual Amount:
          </p>
          <input
            placeholder="Enter amount"
            type="number"
            name="fActualAmount"
            value={fActualAmount}
            onChange={(e) => setFActualAmount(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Dealer Actual Amount:
          </p>
          <input
            placeholder="Enter amount"
            type="number"
            name="dActualAmount"
            value={dActualAmount}
            onChange={(e) => setDActualAmount(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="form-btn">Submit</button>
          <button type="submit" className="form-btn" onClick={handleEditFormCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

EditDeal.propTypes = {
  deal: PropTypes.oneOfType([PropTypes.object]),
  setShowEditDeal: PropTypes.func.isRequired,
};

EditDeal.defaultProps = {
  deal: [],
};

export default EditDeal;
