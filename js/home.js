document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money btn is added');
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputAddMoney, inputPinNumber);
})