const CSVArea = document.getElementById("csv-area");
const JSONArea = document.getElementById("json-area");
const fileUpload = document.getElementById("file-upload-csv");
const fileNameInput = document.getElementById("file-save-name");
const downloadBtn = document.getElementById("save");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");
let filename = "";

clearBtn.addEventListener("click", () => {
  CSVArea.value = "";
  JSONArea.value = "";
});
convertBtn.addEventListener("click", convertCSVToJSON);
fileUpload.addEventListener("change", fileUploadHandler);
downloadBtn.addEventListener("click", fileDownloadHandler);

function convertCSVToJSON() {
  const csvArray = [];
  CSVArea.value
    .replaceAll(/[^A-z0-9\n.]/gi, ",")
    .replaceAll(/[^a-z0-9\n.]$/gim, "")
    .split("\n")
    .filter(el => Boolean(el[0]))
    .forEach(el => csvArray.push(el.split(",")));

  const jsonArray = createJSONArray(csvArray);
  const json = jsonArray.join("\n");
  JSONArea.value = json;
}

function createJSONArray(csvArray) {
  const csvLabels = csvArray[0];
  const jsonArray = [];

  for (let i = 1; i < csvArray.length;i++) {
    jsonArray.push(JSON.stringify(createObject(csvLabels, csvArray[i])));
  };

  return jsonArray;
}

function createObject(labels, values) {
  const object = {};

  for (let i = 0; i < labels.length;i++) {
    object[labels[i]] = Number(values[i]) ? Number(values[i]) : values[i] || "";
  };

  return object;
}

function fileUploadHandler(ev) {
  if (!ev.target.files.length) CSVArea.value = "File not found";
  filename = ev.target.files[0].name.replace(".csv", "");

  const reader = new FileReader();
  reader.addEventListener("load", (ev) => {
    CSVArea.value = ev.target.result;
  });
  reader.readAsText(ev.target.files[0]);
}

function fileDownloadHandler() {
  const tempLink = document.createElement("a");
  const JSONBlob = new Blob([JSONArea.value], {type: "application/json"});

  tempLink.setAttribute("href", URL.createObjectURL(JSONBlob));
  tempLink.setAttribute("download", `${fileNameInput.value || filename || "CSVToJSON"}.json`);
  tempLink.click();

  URL.revokeObjectURL(tempLink.href);
}
