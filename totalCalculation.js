
document.getElementById('button-calculate').addEventListener('click', function () {
    const expensesField = document.getElementById('manager-cost');
    const newExpensesAmountString = expensesField.value;
    const newExpensesAmount = parseFloat(newExpensesAmountString);
    expensesField.value = '';

    if (isNaN(newExpensesAmount)) {
        alert('Please Provide a Valid Number')
        return;
    }
    const coachField = document.getElementById('coach-cost');
    const newcoachAmountString = coachField.value;
    const newcoachAmount = parseFloat(newcoachAmountString);

    coachField.value = '';

    if (isNaN(newcoachAmount)) {
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
    const currentBalanceTotals = newExpensesAmount + newcoachAmount + newPlayerAmount;
    balanceTotalElement.innerText = currentBalanceTotals;
})
