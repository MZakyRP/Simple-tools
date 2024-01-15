const container = document.querySelector("div");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

setInterval(() => {
  const images = document.querySelectorAll("img");
  const image = images[0];
  
  handleImage(image);
}, 3000);

function prev() {
  const images = document.querySelectorAll("img");
  for (let i = 0; i < images.length;i++) {
    if (i == images.length - 1) break;
    handleImage(images[i]);
  }
}

function next() {
  const images = document.querySelectorAll("img");
  handleImage(images[0]);
}

function handleImage(img) {
  container.removeChild(img);
  container.appendChild(img);
}