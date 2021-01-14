const validationInputRef = document.querySelector("#validation-input");
const dataAttributeValue = Number(
  validationInputRef.getAttribute("data-length")
);

validationInputRef.addEventListener("blur", outpuCheckResult);

function outpuCheckResult(event) {
  const inputValueRef = event.target.value;

  if (inputValueRef.length === dataAttributeValue) {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
    return;
  }

  validationInputRef.classList.add("invalid");
  validationInputRef.classList.remove("valid");
}
