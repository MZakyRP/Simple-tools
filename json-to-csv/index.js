const CSVArea = document.getElementById("csv-area");
const JSONArea = document.getElementById("json-area");
const fileUpload = document.getElementById("file-upload-json");
const fileNameInput = document.getElementById("file-save-name");
const downloadBtn = document.getElementById("save");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");
let filename = "";

clearBtn.addEventListener("click", () => {
  JSONArea.value = "";
  CSVArea.value = "";
});
convertBtn.addEventListener("click", convertJSONToCSV);
fileUpload.addEventListener("change", fileUploadHandler);
downloadBtn.addEventListener("click", fileDownloadHandler);

function convertJSONToCSV() {
  const jsonArray = JSONArea.value
    .trim()
    .replaceAll(/\n|\/\*.*\//g, "")
    .replaceAll(/},|}/g, "}|")
    .split("|")
    .filter((n) => Boolean(n));

    let csv = "";

    try {
      CSVArea.classList.remove("error");
      const csvLabels = getCSVLabelsFromJSON(jsonArray);
      const csvValues = getCSVValuesFromJSON(jsonArray);
      CSVArea.value = csv.concat(csvLabels, csvValues);
    } catch (error) {
      CSVArea.classList.add("error");

      if (error.name === "EvalError") {
        CSVArea.value = error.message;
      } else if (jsonArray[jsonArray.length - 1] === "}") {
        CSVArea.value = "Nested JSON is not supported";
      } else {
        CSVArea.value = "The entered value is not a valid JSON";
      };
    }
}

function getCSVLabelsFromJSON(jsonArr) {
  if (jsonArr.length === 0) throw new EvalError("JSON is empty, please fill the field");

  let csvLabels = [];
  let uniqueLabels = new Set();

  jsonArr.forEach((el) => {
    Object.keys(JSON.parse(el)).forEach(key => uniqueLabels.add(key));
  });
  uniqueLabels.forEach(key => csvLabels.push(key));

  return csvLabels.join(",").concat("\n");
}

function getCSVValuesFromJSON(jsonArr) {
  let csvValues = [];

  jsonArr.forEach((el) => {
    const valueArr = Object.values(JSON.parse(el));
    csvValues.push(valueArr.join());
  });

  return csvValues.join("\n");
}

function fileUploadHandler(ev) {
  if (!ev.target.files.length) JSONArea.value = "File not found";
  filename = ev.target.files[0].name.replace(".json", "");

  const reader = new FileReader();
  reader.addEventListener("load", (ev) => {
    JSONArea.value = ev.target.result;
  });
  reader.readAsText(ev.target.files[0]);
}

function fileDownloadHandler() {
  const tempLink = document.createElement("a");
  const CSVBlob = new Blob([CSVArea.value], {type: "text/csv"});

  tempLink.setAttribute("href", URL.createObjectURL(CSVBlob));
  tempLink.setAttribute("download", `${fileNameInput.value || filename || "JSONToCSV"}.csv`);
  tempLink.click();

  URL.revokeObjectURL(tempLink.href);
}
