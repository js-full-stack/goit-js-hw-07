const items = [...document.querySelectorAll("li.item")];
console.log(`В списке ${items.length} категории.`);

const listItems = items.forEach((item) => {
  const getTitlesRef = item.querySelector("h2");
  const getListProductsRef = item.querySelectorAll("ul li");
  const title = getTitlesRef.textContent;
  const count = getListProductsRef.length;
  return console.log("Категория:", title, "\nКоличество элементов: ", count);
});
