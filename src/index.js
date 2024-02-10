import './css/styles.css';
import ExchangeRateService from './exchange-rate-service.js';

// business logic






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



function handleInputChange() {
  if(!document.getElementById("amountUSD").value) {
    document.getElementById("currency").disabled = true;
    document.getElementById("submit").disabled = true;
  } else if(isValid(document.getElementById("amountUSD").value)) {
    document.getElementById("currency").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById("error1").setAttribute("class", "hidden");
  } else {
    document.getElementById("currency").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("error1").removeAttribute("class");
  }
}

function handleExchange(e) {
  e.preventDefault();
  alert("asdf");
}


document.getElementById("amountUSD").addEventListener("input", handleInputChange);
document.getElementById("exchange").addEventListener("submit", handleExchange);


