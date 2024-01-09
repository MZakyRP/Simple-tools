const toggler = document.getElementById("toggler");
const inputs = document.querySelectorAll("input");
const colorInputs = document.querySelectorAll('input[id^="color-input"]');
const incrementInputs = document.querySelectorAll('input[id^="increment-input"]');
const intervalEl = document.getElementById("interval-input");
const colorEncoding = document.getElementById("color-encoding");
const colors = [];
const increments = [];
let colorCycler;

toggler.addEventListener("click", (ev) => {
  if (ev.target.innerHTML === "Start") {
    startColorCycle();
    ev.target.innerHTML = "Stop";
  } else {
    stopColorCycle()
    ev.target.innerHTML = "Start";
  }
});

function startColorCycle() {
  inputs.forEach((el) => el.setAttribute("disabled", true));
  colorInputs.forEach((el) => colors.push(el.value || "0f"));
  incrementInputs.forEach((el) => increments.push(el.value || 25));
  const time = intervalEl.value || 0.25;
  let color = Number(`0xff0000`);
  
  if (colors.length >= 3) colors.splice(3, colors.length - 3);
  document.documentElement.style.setProperty("--time", `${time / 4}s`);

  colorCycler = setInterval(() => {
    color = Number(`0x${colors.join("")}`);
    
    document.documentElement.style.setProperty(
      "--color",
      `#${("000000" + color.toString(16)).slice(-6)}`
      );
      
      for (let i = 0; i < colors.length; i++) {
      if (Number(`0x${colors[i]}`) > 255) colors[i] = 0;
      colors[i] = (Number(`0x${colors[i]}`) + Number(increments[i])).toString(16);
    }
    
  }, time * 1000);
}

function stopColorCycle() {
  inputs.forEach((el) => el.removeAttribute("disabled"));
  clearInterval(colorCycler);
}
