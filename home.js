const validPin = 1234;
const transactionData = [];
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

//Function to Toggle Button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

  const data = {
    name: "Add Money",
    date: new Date().toLocaleDateString(),
  };
  transactionData.push(data);
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
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleDateString(),
    };
    transactionData.push(data);
  });

//Transfer Money Feature
document
  .getElementById("transferAmount-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

//Transactions Feature
document.getElementById("transactions").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText = "";
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex items-center justify-between bg-white mb-3 rounded-xl p-3">
        <div class="flex items-center">
        <div class="p-3 rounded-full bg-[#f4f5f7]">
          <img src="assets/opt-1.png" class="mx-auto" alt="">
        </div>
        <div class="ml-3">
          <h1>${data.name}</h1>
          <p>${data.date}</p>
        </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical text-[#08080880]"></i>
      </div>
    `;
    transactionContainer.appendChild(div);
  }
});

/** Toggling Feature */
document.getElementById("addMoney").addEventListener("click", function () {
  handleToggle("addMoney-form");
  handleButtonToggle("addMoney");
});

document.getElementById("cashOut").addEventListener("click", function () {
  handleToggle("cashOut-form");
  handleButtonToggle("cashOut");
});

document.getElementById("transferMoney").addEventListener("click", function () {
  handleToggle("transferMoney-form");
  handleButtonToggle("transferMoney");
});

document.getElementById("getBonus").addEventListener("click", function () {
  handleToggle("getBonus-form");
  handleButtonToggle("getBonus");
});

document.getElementById("payBill").addEventListener("click", function () {
  handleToggle("payBill-form");
  handleButtonToggle("payBill");
});

document.getElementById("transactions").addEventListener("click", function () {
  handleToggle("transactions-form");
  handleButtonToggle("transactions");
});
