const labels = document.querySelectorAll("h2");
const switchBtn = document.querySelector("button");
const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.value = '');

switchBtn.addEventListener("click", () => {
  [labels[0].innerHTML, labels[1].innerHTML] = [
    labels[1].innerHTML, labels[0].innerHTML,
  ];
  
  [inputs[0].name, inputs[1].name] = [
    inputs[1].name, inputs[0].name
  ];

  inputs.forEach(input => input.value = '');
});

inputs[0].addEventListener('change', (ev) => {
  let result;

  if (ev.target.name === "binary") {
    if (/[^0-1]/g.test(ev.target.value)) {
      ev.target.value = '';
      alert("only binary allowed");
    };

    result = BigInt(`0b${BigInt(ev.target.value)}`);
  } else {
    if (/[^0-9]/g.test(ev.target.value)) {
      ev.target.value = '';
      alert("only decimal number allowed");
    };

    result = BigInt(ev.target.value).toString(2);
  }

  inputs[1].value = result;
});
