document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutInputNumber = document.getElementById('cash-out-input').value;
    const cashOutInputPin = document.getElementById('cash-out-input-pin').value;
    // console.log(cashOutInput);
    if(cashOutInputPin === '5555'){
        // console.log(cashOutInputNumber, cashOutInputPin);
        const accountBalance = document.getElementById('account-balance').innerText;
        const balance = parseFloat(accountBalance);
        const total = balance - cashOutInputNumber;
        document.getElementById('account-balance').innerText = total;
    }else{
        alert('Failed to add money, try again later');
    }

})