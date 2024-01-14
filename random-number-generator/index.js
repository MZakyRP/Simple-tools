const minEl = document.getElementById("min");
const maxEl = document.getElementById("max");
const useDecimalEl = document.getElementById("useDecimal");
const generateBtn = document.getElementById("generate");
const resultEl = document.getElementById("result");

generateBtn.addEventListener("click", generateRandomNumber);

function generateRandomNumber()  {
  const min = Number(minEl.value);
  const max = Number(maxEl.value);
  let result;

  if (useDecimalEl.checked) {
    result = (Math.random() * (max - min)) + min;
  } else {
    result = Math.floor(Math.random() * (max - min)) + min;
  }
  resultEl.innerText = result;
}