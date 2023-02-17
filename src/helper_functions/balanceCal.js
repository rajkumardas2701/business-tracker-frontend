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

export default getBalance;
