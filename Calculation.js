document.getElementById('button-player').addEventListener('click', function () {
    const depositField = document.getElementById('cost');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Provide a Valid Number')
        return;
    }
    if ((cart.length < 5)) {
        alert('Please Enter Five Players')
        return;
    }
    depositTotalElement = document.getElementById('price-field');
    const currentDepositTotal = 5 * newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

})
const price = [0];

