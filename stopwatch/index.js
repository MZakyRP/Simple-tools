const timerEl = document.getElementById("timer");
const lapsListEl = document.getElementById("laps-list");
const triggerBtn = document.getElementById("trigger");
const restartBtn = document.getElementById("restart");
const createLapBtn = document.getElementById("create-lap");

let incrementor;
const timer = new Date();
timer.setTime(0);
timer.setHours(0);
updateTimer();

triggerBtn.addEventListener("click", startStopwatch);
restartBtn.addEventListener("click", restartStopwatch);
createLapBtn.addEventListener("click", createLap);

function startStopwatch(ev) {
  ev.target.innerText = "Stop";

  incrementor = setInterval(() => {
    timer.setMilliseconds(timer.getMilliseconds() + 10);
    updateTimer();
  },10);

  triggerBtn.removeEventListener("click", startStopwatch);
  triggerBtn.addEventListener("click", stopStopwatch);
  restartBtn.setAttribute("disabled", true);
}

function stopStopwatch(ev) {
  ev.target.innerText = "Start";

  clearInterval(incrementor);

  triggerBtn.removeEventListener("click", stopStopwatch);
  triggerBtn.addEventListener("click", startStopwatch);
  restartBtn.removeAttribute("disabled");
}

function restartStopwatch() {
  timer.setTime(0);
  timer.setHours(0);
  updateTimer();
  lapsListEl.replaceChildren("");
}

function createLap() {
  const [hours, minutes, seconds, miliseconds] = getTime();

  const li = document.createElement("li");
  li.innerHTML = "".concat(hours, minutes, seconds, miliseconds).trim();
  lapsListEl.appendChild(li);
}

function updateTimer() {
  const [hours, minutes, seconds, miliseconds] = getTime();

  timerEl.innerHTML = "".concat(hours, minutes, seconds, miliseconds).trim();
}

function getTime() {
  const hours = timer.getHours() ? timer.getHours() + ":" : "";
  const minutes = ("00" + timer.getMinutes()).slice(-2) + ":";
  const seconds = ("00" + timer.getSeconds()).slice(-2);
  const miliseconds = `<span class="milis">${(timer.getMilliseconds() + "00").slice(0,2)}</span>`;

  return [hours, minutes, seconds, miliseconds];
}