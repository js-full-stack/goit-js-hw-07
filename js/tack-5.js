const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", outputTextOnline);

function outputTextOnline(event) {
  const stringContent = event.target.value;
  spanRef.textContent = stringContent;
  if (stringContent === "") {
    spanRef.textContent = "незнакомец";
  }
}
