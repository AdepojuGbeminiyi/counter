const increment = () => {
  const countEl = document.getElementById("count-el");
  const countValue = countEl.textContent;
  const count = parseInt(countValue, 10);
  const incrementCount = count + 1;
  countEl.textContent = incrementCount;
};

const save = () => {
  let saveEl = document.getElementById("save-el");
  const countEl = document.getElementById("count-el");
  const countValue = countEl.textContent;
  let countStr = countValue + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
};

const decrease = () => {
  const countEl = document.getElementById("count-el");
  const countValue = countEl.textContent;
  const count = parseInt(countValue, 10);
  const incrementCount = count - 1;
  countEl.textContent = incrementCount;
};
