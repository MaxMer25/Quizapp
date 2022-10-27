const switchButton = document.querySelector('[data-js="switch-btn"]');

const currentTheme = localStorage.getItem("theme");
const btnPosition = localStorage.getItem("btnPosition");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}
if (btnPosition == "on") {
  switchButton.classList.add("switch-on");
}
switchButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  switchButton.classList.toggle("switch-on");
  let theme = "light";
  let btnPos = "off";

  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  if (switchButton.classList.contains("switch-on")) {
    btnPos = "on";
  }
  localStorage.setItem("theme", theme);
  localStorage.setItem("btnPosition", btnPos);
});
