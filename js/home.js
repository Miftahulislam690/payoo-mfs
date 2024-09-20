document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money btn is added');
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    if(inputPinNumber === '5555'){
        const balanceNumber = document.getElementById('account-balance').innerText;
        // console.log(balance);
        const addMoneyNumber = parseFloat(inputAddMoney);
        const balanceInputNumber = parseFloat(balanceNumber);
        const newBalance = addMoneyNumber + balanceInputNumber;
        // console.log(newBalance);
        const addMoney = document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('Failed to adding money');
    }
})