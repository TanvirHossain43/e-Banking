document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmout = getInputFieldById('deposit-field')

    if(isNaN(newDepositAmout)){
        alert('enter valid amount')
        return;
    }

    const previousDeposit = getTextElementById('deposit-total')

    const depositTotal = newDepositAmout + previousDeposit

    getTotalValue('deposit-total', depositTotal)

    const previousBalance = getTextElementById('balance-total')
    const afterDepositTotalBalance = previousBalance + newDepositAmout

    getTotalValue('balance-total',afterDepositTotalBalance)

   


})