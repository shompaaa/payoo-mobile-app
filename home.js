document.getElementById('addMoney-btn').addEventListener('click',function(e){
    e.preventDefault()
    const selectedBank = document.getElementById('select-bank').value
    const accountNumber = document.getElementById('account-number').value
    const addedAmount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = document.getElementById('pin-number').value

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const NewBalance = addedAmount + availableBalance
    document.getElementById('available-balance').innerText = NewBalance
})