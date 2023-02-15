import { useContext } from 'react';
import DealContext from '../contexts/DealsContext';
import Deal from '../components/Deal';

const Deals = () => {
  const { deals } = useContext(DealContext);
  return (
    <div>
      {
        (deals && deals.length)
          ? deals.map((deal) => (
            <Deal
              key={deal.id}
              deal={deal}
            />
          ))
          : <p>Fetching Deals</p>
      }
    </div>
  );
};

export default Deals;
