const getBalance = (sTxs, setBalance) => {
  const val = sTxs.reduce((acc, tx) => {
    let newacc;
    if (tx.send_receive === 'Sent') {
      newacc = acc - parseFloat(tx.amount);
    } else {
      newacc = acc + parseFloat(tx.amount);
    }
    return newacc;
  }, 0);
  setBalance(val);
};

const filterDealTransactions = (txs, id) => txs.filter((tx) => tx.deal_id === id);
const fetchDealName = (dealID, deals) => {
  const deal = deals.filter((d) => d.id === dealID);
  return deal.length === 0 ? 'No Deal selected' : (deal[0] && deal[0].vehicle_date);
};

export { getBalance, filterDealTransactions, fetchDealName };
