import './css/styles.css';
import ExchangeRateService from './exchange-rate-service.js';

// business logic

async function getRates() {
  const response = await ExchangeRateService.getCurrentRates();
  if(response.conversion_rates) {
    return response;
  } else {
    printError(response);
  }
}

function isValid(input) {
  let status = true;
  let counter = 0;
  input.split("").forEach((digit) => {
    if(digit === ".") {
        counter++;
        if(counter >= 2) {
          status = false;
        }
    } else if(/\D/.test(digit)) {
      status = false;
    }
  });
  return status;
}

// UI logic

function printError(apiErrorMessage) {
  document.getElementById("error2").innerText = `${apiErrorMessage}
  Please resolve error and refresh the page.
  `;
  document.getElementById("amountUSD").disabled = true;
}

function handleInputChange() {
  if(!document.getElementById("amountUSD").value) {
    document.getElementById("currency1").disabled = true;
    document.getElementById("currency2").disabled = true;
    document.getElementById("submit").disabled = true;
  } else if(isValid(document.getElementById("amountUSD").value)) {
    document.getElementById("currency1").disabled = false;
    document.getElementById("currency2").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById("error1").setAttribute("class", "hidden");
  } else {
    document.getElementById("currency1").disabled = true;
    document.getElementById("currency2").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("error1").removeAttribute("class");
  }
}

async function handleExchange(event, currentRates) {
  event.preventDefault();
  const rates = await currentRates;
  const amount = parseFloat(document.getElementById("amountUSD").value);
  const newCurrency1 = document.getElementById("currency1").value;
  const newCurrency2 = document.getElementById("currency2").value;
  
  document.getElementById("result1").innerText = `Current Exchange Rate for ${newCurrency1}:${newCurrency2} is 1:${(rates.conversion_rates[newCurrency2]/rates.conversion_rates[newCurrency1]).toFixed(2)}`;
  document.getElementById("result2").innerText = `${amount.toFixed(2)} ${newCurrency1} is equal to ${(amount*rates.conversion_rates[newCurrency2]/rates.conversion_rates[newCurrency1]).toFixed(2)} ${newCurrency2}`;
}

async function fillCurrencies(currentRates) {
  const rates = await currentRates;
  Object.keys(rates.conversion_rates).forEach((currency) => {
    let option1 = document.createElement("option");
    option1.innerText = currency;
    option1.setAttribute("value", currency);
    let option2 = document.createElement("option");
    option2.innerText = currency;
    option2.setAttribute("value", currency);
    document.getElementById("currency1").append(option1);
    document.getElementById("currency2").append(option2);
  });
}


const currentRates = getRates();
fillCurrencies(currentRates);
document.getElementById("amountUSD").addEventListener("input", handleInputChange);
document.getElementById("exchange").addEventListener("submit", (event) => handleExchange(event, currentRates));



