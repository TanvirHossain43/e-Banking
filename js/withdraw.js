document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawMoney = getInputFieldById('withdraw-field')
    if (isNaN(withdrawMoney)) {
        alert('enter valid amount')
        return;
    }
    const previousTotalBanlace = getTextElementById('balance-total')

    if (withdrawMoney > previousTotalBanlace) {
        alert('Insufficient Balance')
        return;
    }
    const previousWithdraw = getTextElementById('withdraw-total')
    const totalWithdraw = withdrawMoney + previousWithdraw;
    getTotalValue('withdraw-total', totalWithdraw)


    const afterWithdrawTotalBalance = previousTotalBanlace - withdrawMoney
    getTotalValue('balance-total', afterWithdrawTotalBalance)


})