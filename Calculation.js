document.getElementById('button-player').addEventListener('click', function () {
    const costField = document.getElementById('cost');
    const newCostAmountString = costField.value;
    const newCostAmount = parseFloat(newCostAmountString);
    costField.value = '';
    if (isNaN(newCostAmount)) {
        alert('Please Provide a Valid Number')
        return;
    }
    if ((cart.length < 5)) {
        alert('Please Enter Five Players')
        return;
    }
    CostTotalElement = document.getElementById('price-field');
    const currentCostTotal = 5 * newCostAmount;
    CostTotalElement.innerText = currentCostTotal;

})
const price = [0];

