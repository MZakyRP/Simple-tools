const inputEl = document.getElementById("input-area");
const outputEl = document.getElementById("output-area");
const translateBtn = document.getElementById("translate");
const errorEl = document.querySelector(".error-message");

translateBtn.addEventListener("click", translate);

function translate() {
  errorEl.innerText = "";
  outputEl.innerHTML = "";
  if (!inputEl.value) {
    errorEl.innerText = "Error : Textbox is Empty";
    return;
  }

  const wordsArray = inputEl.value.trimStart().split(" ");
  const wordsFreqObject = new Object();

  for (word of wordsArray) {
    let cleanWord = word
      .toLowerCase()
      .replaceAll(/[^a-z0-9]/gi, "")
      .replace(word[0], word[0].toUpperCase());

    if (!(cleanWord in wordsFreqObject)) {
      wordsFreqObject[cleanWord] = 1;
    } else {
      wordsFreqObject[cleanWord] += 1;
    }
  }

  const sortedWordsFreq = Object.entries(wordsFreqObject).sort(
    (a, b) => a[1] < b[1]
  );
  console.log(sortedWordsFreq);
  createResultTable(sortedWordsFreq);
}

function createResultTable(sortedWordsFreq) {
  const tableHeadRow = document.createElement("tr");
  const tableHeadWord = document.createElement("th");
  const tableHeadCount = document.createElement("th");

  tableHeadWord.innerText = "Word";
  tableHeadCount.innerText = "Count";

  tableHeadRow.appendChild(tableHeadWord);
  tableHeadRow.appendChild(tableHeadCount);
  outputEl.appendChild(tableHeadRow);

  for (entries of sortedWordsFreq) {
    if (entries[0]) {
      const tableRow = document.createElement("tr");
      const tableDataWord = document.createElement("td");
      const tableDataCount = document.createElement("td");

      tableDataWord.innerText = entries[0];
      tableDataCount.innerText = entries[1];

      tableRow.appendChild(tableDataWord);
      tableRow.appendChild(tableDataCount);
      outputEl.appendChild(tableRow);
    }
  }
}
