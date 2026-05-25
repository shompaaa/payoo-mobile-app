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

//Function to Toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
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
  setInnerText(newBalance);
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
    setInnerText(newBalance);
  });

//Transfer Money Feature
document
  .getElementById("transferAmount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

/** Toggling Feature */
document.getElementById("addMoney").addEventListener("click", function () {
  handleToggle("addMoney-form");
});

document.getElementById("cashOut").addEventListener("click", function () {
  handleToggle("cashOut-form");
});

document.getElementById("transferMoney").addEventListener("click", function () {
  handleToggle("transferMoney-form");
});

document.getElementById("getBonus").addEventListener("click", function () {
  handleToggle("getBonus-form");
});

document.getElementById("payBill").addEventListener("click", function () {
  handleToggle("payBill-form");
});

document.getElementById("transactions").addEventListener("click", function () {
  handleToggle("transactions-form");
});
