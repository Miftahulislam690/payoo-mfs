document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('oi mama na pls');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    if(phoneNumber === '01726741150' && pinNumber === '5555'){
        console.log('you are logged in successfully');
        window.location.href = './home.html'
    }else{
        alert('incorrect phone number or pin number');
    }
})