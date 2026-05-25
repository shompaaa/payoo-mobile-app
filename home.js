const validPin = 12345;

//Add Money Feature
document.getElementById("addMoney-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const selectedBank = document.getElementById("select-bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addedAmount = parseInt(document.getElementById("add-amount").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText,
  );
  if (accountNumber.length < 11 || accountNumber.length > 11) {
    alert("Please provide valid account number");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Please provide valid PIN number");
    return;
  }
  const newBalance = addedAmount + availableBalance;
  document.getElementById("available-balance").innerText = newBalance;
});


//Cash Out Feature
document.getElementById('withdrawMoney-btn').addEventListener('click',function(e){
  e.preventDefault()
  const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value)
  const availableBalance = parseInt(document.getElementById('available-balance').innerText)
  const newBalance = availableBalance - withdrawAmount

  document.getElementById('available-balance').innerText = newBalance
  
})

/** Toggling Feature */
document.getElementById('addMoney').addEventListener('click',function(){
  document.getElementById('addMoney-form').style.display = 'block'
})

document.getElementById('cashOut').addEventListener('click',function(){
  document.getElementById('addMoney-form').style.display = 'none'
  document.getElementById('cashOut-form').style.display = 'block'
})
