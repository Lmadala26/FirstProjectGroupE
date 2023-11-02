"use strict";
document.addEventListener("keydown", changeBackground);
const fondoElement = document.getElementById("fondito");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentImage = 0;
const images = [
  "url('img/pexels-furkan-aydi̇lek-17905270.jpg')",
  "url('img/pexels-quyn-phạm-13048567.jpg')",
  "url('img/pexels-gigxels-com-7638111.jpg')",
  "url('img/pexels-luis-quintero-18482974.jpg')",
  "url('img/pexels-matheus-bertelli-16674070.jpg')",
  "url('img/pexels-nikolai-ulltang-593345.jpg')",
  "url('img/pexels-yasin-aydın-13038277.jpg')",
];

prevButton.addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  fondoElement.style.backgroundImage = images[currentImage];
});

nextButton.addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  fondoElement.style.backgroundImage = images[currentImage];
});

function changeBackground(event) {
  switch (event.key) {
    case "ArrowLeft":
      currentImage = (currentImage - 1 + images.length) % images.length;
      fondoElement.style.backgroundImage = images[currentImage];
      break;
    case "ArrowRight":
      currentImage = (currentImage + 1) % images.length;
      fondoElement.style.backgroundImage = images[currentImage];
      break;
    default:
      break;
  }
}
