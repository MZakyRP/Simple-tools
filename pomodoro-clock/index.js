const workingCountEl = document.getElementById("working-session-count");
const breakCountEl = document.getElementById("break-session-count");
const currentSessionEl = document.getElementById("current-session");
const timerEl = document.getElementById("timer");
const triggerBtn = document.getElementById("trigger");
const resetBtn = document.getElementById("reset");
const longBreakEl = document.getElementById("long-break");
const alarm = document.getElementById("alarm");

let decreaser;
let session = "Working";
let workingSessionCount = 0;
let breakSessionCount = 0;

const timer = new Date();
timer.setTime(1500000);

triggerBtn.addEventListener("click", startClock);
resetBtn.addEventListener("click", resetClock);

function startClock(ev) {
  ev.target.innerText = "Pause";

  decreaser = setInterval(() => {
    if (!timer.getTime()) {
      alarm.play()

      if (session === "Working") {
        startBreakSession();
      } else {
        startWorkingSession();
      }
    };

    timer.setSeconds(timer.getSeconds() - 1);
    updateTimerEl();
  }, 1000);

  triggerBtn.removeEventListener("click", startClock);
  triggerBtn.addEventListener("click", stopClock);
  resetBtn.setAttribute("disabled", true);
}

function stopClock(ev) {
  ev.target.innerText = "Play";

  clearInterval(decreaser);
  triggerBtn.removeEventListener("click", stopClock);
  triggerBtn.addEventListener("click", startClock);
  resetBtn.removeAttribute("disabled");
}

function resetClock() {
  timer.setTime(1500000);
  updateTimerEl();

  session = "Working";
  workingSessionCount = 0;
  breakSessionCount = 0;
  updateSession();
  updateCount();
}

function startWorkingSession() {
  workingSessionCount++;
  updateCount();

  timer.setTime(1500000);
  session = "Working";
  updateSession();
}

function startBreakSession() {
  breakSessionCount++;
  updateCount();

  if (!(breakSessionCount % 4) && longBreakEl.checked) {
    startLongBreak();
    return;
  };

  timer.setTime(300000);
  session = "Break";
  updateSession();
}

function startLongBreak() {
  timer.setTime(600000);
  session = "Long Break";
  updateSession();
}

function updateSession() {
  currentSessionEl.innerText = `${session} Session`;
}

function updateCount() {
  workingCountEl.innerText = workingSessionCount;
  breakCountEl.innerText = breakSessionCount;
}

function updateTimerEl() {
  timerEl.innerText = `${timer.getMinutes()}:${("00" + timer.getSeconds()).slice(-2)}`;

  if (/0:[0-9]/gi.test(timerEl.innerText)) {
    timerEl.classList.add("timeout");
  } else {
    timerEl.classList.remove("timeout");
  }
}
