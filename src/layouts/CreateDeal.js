import { useState } from 'react';
import '../styles/AuthForm.css';
import '../styles/CreateDeal.css';

const CreateDeal = () => {
  const [vehicle, setVehicle] = useState('');
  const [date, setDate] = useState('');
  const [fName, setFName] = useState('');
  const [fQuantity, setFQuantity] = useState(0);
  const [fDiscount, setFDiscount] = useState(0.0);
  const [fRate, setFRate] = useState(0.0);
  const [dName, setDName] = useState('');
  const [dQuantity, setDQuantity] = useState(0);
  const [dDiscount, setDDiscount] = useState(0.0);
  const [dRate, setDRate] = useState(0.0);
  const [fActualAmount, setFActualAmount] = useState(0.0);
  const [dActualAmount, setDActualAmount] = useState(0.0);

  const handleSubmit = () => {};
  return (
    <div className="form-container create-deal-container">
      <h2>Create a new Deal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elements">
          <p>
            Vehicle:
          </p>
          <input
            placeholder="Enter Vehicle No."
            type="text"
            name="vehicle"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            required
          />
        </div>

        <div className="form-elements">
          <p>
            Date:
          </p>
          <input
            placeholder="Enter valid email"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-elements">
          <p>
            Farmer Name:
          </p>
          <input
            placeholder="Indian Phone number"
            type="text"
            name="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>

        <div className="form-elements">
          <p>
            Farmer Quantity (in KG):
          </p>
          <input
            placeholder="Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
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
            placeholder="Re-enter Password"
            type="number"
            name="dActualAmount"
            value={dActualAmount}
            onChange={(e) => setDActualAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreateDeal;
