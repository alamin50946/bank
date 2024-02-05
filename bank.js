document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositString = depositField.value;
  const newDeposit = parseFloat(newDepositString);
  depositField.value = newDeposit;
  if (isNaN(newDeposit)) {
    alert("please provie a numner");
    return;
  }
  depositField.value = "";
  // deposit calculation
  const depositToltalElement = document.getElementById("total-deposit-field");
  const depositTotalString = depositToltalElement.innerText;
  const previousDepositTotal = parseFloat(depositTotalString);
  const newDepositTotal = previousDepositTotal + newDeposit;
  depositToltalElement.innerText = newDepositTotal;
  // connection with balance total
  const balanceTotal = document.getElementById("total-balance");
  const previousBalanceString = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceString);
  const newBalance = previousBalance + newDeposit;
  balanceTotal.innerText = newBalance;
});

//calculation total withdraw total
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawString = withdrawField.value;
  const newWithdrawTotal = parseFloat(newWithdrawString);
  withdrawField.value = newWithdrawTotal;
  if (isNaN(newWithdrawTotal)) {
    alert("please provie a numner");
    return;
  }
  withdrawField.value = "";
  // calculation adjusted to the total withdraw
  const withdrawTotalElement = document.getElementById("total-withdraw-amount");
  const previousWithdrawString = withdrawTotalElement.innerText;
  const previousWithdraw = parseFloat(previousWithdrawString);

  // connection with balance total
  const balanceTotal = document.getElementById("total-balance");
  const previousBalanceString = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceString);

  if (newWithdrawTotal > previousBalance) {
    alert("don't have enough balance");
    return;
  }
  // add withdraw with main balance

  const currentWithdraw = previousWithdraw + newWithdrawTotal;
  withdrawTotalElement.innerText = currentWithdraw;
  // minus
  const newBalance = previousBalance - newWithdrawTotal;
  balanceTotal.innerText = newBalance;
});
