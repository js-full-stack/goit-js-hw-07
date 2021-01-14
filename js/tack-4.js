const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");
console.dir(counterValue);

decrementBtnRef.addEventListener("click", decrementCounterOnClick);
incrementBtnRef.addEventListener("click", incrementCounterOnClick);

function decrementCounterOnClick(event) {
  counterValue.textContent += event.target.textContent;
}

function incrementCounterOnClick(event) {
  counterValue.textContent += event.target.textContent;
}
