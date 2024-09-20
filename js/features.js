document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-card').classList.remove('hidden');
    document.getElementById('cash-out-card').classList.add('hidden');
});

document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-card').classList.remove('hidden');
    document.getElementById('add-money-card').classList.add('hidden');
})