const buttonSwitchTheme = document.getElementById("button-switch-theme");
const body = document.querySelector("body");
const imageButtonSwitchTheme = document.querySelector(".image-button");

buttonSwitchTheme.addEventListener("click", () => {
  const darkModeOn = body.classList.contains("dark-mode");

  if (darkModeOn) {
    body.classList.remove("dark-mode");

    imageButtonSwitchTheme.setAttribute("src", "./src/images/sun.png");
  } else {
    body.classList.add("dark-mode");

    imageButtonSwitchTheme.setAttribute("src", "./src/images/moon.png");
  }
});
