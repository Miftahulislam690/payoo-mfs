document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('oi mama na pls');
    const number = document.getElementById('phone-number').value;
    console.log(number);
})