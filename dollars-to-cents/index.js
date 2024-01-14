const convertBtn = document.getElementById("convert");
const dollarsEl = document.getElementById("dollars");
const quartersEl = document.getElementById("quarters");
const dimesEl = document.getElementById("dimes");
const nicklesEl = document.getElementById("nickles");
const penniesEl = document.getElementById("pennies");

convertBtn.addEventListener("click", convertToCents);

function convertToCents() {
  const dollars = Math.round(dollarsEl.value * 100);
  let remaining;
  const quarters = Math.floor(dollars / 25);
  remaining = dollars % 25;
  const dimes = Math.floor(remaining / 10);
  remaining = remaining % 10
  const nickles = Math.floor(remaining / 5);
  remaining = remaining % 5
  const pennies = Math.floor(remaining / 1);

  quartersEl.innerText = quarters;
  dimesEl.innerText = dimes;
  nicklesEl.innerText = nickles;
  penniesEl.innerText = pennies;
}
