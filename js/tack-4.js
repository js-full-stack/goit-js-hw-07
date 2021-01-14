const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const counterValue = document.querySelector("#value");
console.dir(counterValue);

let leadToTheNumberCounterValue = Number(counterValue.textContent);

decrementBtnRef.addEventListener("click", decrementCounterOnClick);
incrementBtnRef.addEventListener("click", incrementCounterOnClick);

function decrementCounterOnClick(event) {
  leadToTheNumberCounterValue += Number(event.target.textContent);
  console.log(leadToTheNumberCounterValue);
  counterValue.textContent = leadToTheNumberCounterValue;
}

function incrementCounterOnClick(event) {
  leadToTheNumberCounterValue += Number(event.target.textContent);
  counterValue.textContent = leadToTheNumberCounterValue;
}
