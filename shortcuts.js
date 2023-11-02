const buttonShortcuts = document.getElementById("shortcuts");
const shortcutsButtons = document.getElementsByClassName("shortcutsButtons");

buttonShortcuts.addEventListener("click", function () {
  for (let i = 0; i < shortcutsButtons.length; i++) {
    const button = shortcutsButtons[i];
    if (button.style.display === "none" || button.style.display === "") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
});
