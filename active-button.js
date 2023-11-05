const button = document.getElementById("botonCrash");

document.addEventListener("keydown", function (event) {
  if (event.key === "e") {
    button.classList.add("button-active");
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "e") {
    button.classList.remove("button-active");
  }
});
