
document.getElementById('button-calculate').addEventListener('click', function () {
    const depositField = document.getElementById('manager-cost');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Provide a Valid Number')
        return;
    }
    const coachField = document.getElementById('coach-cost');
    const newcoachAmountString = coachField.value;
    const newcoachAmount = parseFloat(newcoachAmountString);

    coachField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Provide a Valid Number')
        return;
    }
    const playerField = document.getElementById('price-field');
    const newPlayerAmountString = playerField.innerText;
    const newPlayerAmount = parseFloat(newPlayerAmountString);
    playerField.value = '';

    const balanceTotalElement = document.getElementById('total-cost');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotals = newDepositAmount + newcoachAmount + newPlayerAmount;
    balanceTotalElement.innerText = currentBalanceTotals;
})

