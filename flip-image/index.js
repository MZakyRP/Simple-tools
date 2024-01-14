const images = document.querySelectorAll("img");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

function createBox(node) {
  let scaleX = "scaleX(1)";
  let scaleY = "scaleY(1)";

  upBtn.addEventListener("click", () => {
    scaleY = "scaleY(-1)";
    node.style.transform = `${scaleX} ${scaleY}`;
  });

  downBtn.addEventListener("click", () => {
    scaleY = "scaleY(1)";
    node.style.transform = `${scaleX} ${scaleY}`;
  });

  leftBtn.addEventListener("click", () => {
    scaleX = "scaleX(-1)";
    node.style.transform = `${scaleX} ${scaleY}`;
  });

  rightBtn.addEventListener("click", () => {
    scaleX = "scaleX(1)";
    node.style.transform = `${scaleX} ${scaleY}`;
  });
}

function mouseHandler(ev) {
  box.style.visibility = "visible";
  box.style.top = `${ev.target.y + ev.target.offsetHeight - 40}px`;
  box.style.left = `${ev.target.x + (ev.target.width / 5) * 2}px`;

  createBox(ev.target);
}

images.forEach((img) => img.addEventListener("mouseover", mouseHandler));
