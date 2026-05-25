const validPin = 1234;

/*Reuseable Function*/

//Function to get Input value with ParseInt()
function getInputValueNumber(id) {
  const inputValueNumber = parseInt(document.getElementById(id).value);
  return inputValueNumber;
}

//Function to get Input Value
function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

//Function to get Inner Text
function getInputInnerText(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}

//Function to set Inner Text
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

//Add Money Feature
document.getElementById("addMoney-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const selectedBank = getInputValue("select-bank");
  const accountNumber = getInputValue("account-number");
  const addedAmount = getInputValueNumber("add-amount");
  const pinNumber = getInputValueNumber("pin-number");

  const availableBalance = getInputInnerText("available-balance");
  if (accountNumber.length < 11 || accountNumber.length > 11) {
    alert("Please provide valid account number");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Please provide valid PIN number");
    return;
  }
  const newBalance = addedAmount + availableBalance;
  setInnerText(newBalance)
});

//Cash Out Feature
document
  .getElementById("withdrawMoney-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAmount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInputInnerText("available-balance");
    const newBalance = availableBalance - withdrawAmount;
    if (newBalance < 20) {
      alert("Insufficient Balance");
      return;
    }
    setInnerText(newBalance)
  });

/** Toggling Feature */
document.getElementById("addMoney").addEventListener("click", function () {
  document.getElementById("addMoney-form").style.display = "block";
});

document.getElementById("cashOut").addEventListener("click", function () {
  document.getElementById("addMoney-form").style.display = "none";
  document.getElementById("cashOut-form").style.display = "block";
});
