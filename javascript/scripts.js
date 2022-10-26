const fg = document.querySelector('[data-js="switch-btn"]');
const headline_set = document.querySelector('[data-js="settings-headline"]');
const headline_dark = document.querySelector('[data-js="darkmode-headline"]');
const container_about = document.querySelector('[data-js="container-about"]');
const user_name = document.querySelector('[data-js="user-name"]');

const currentTheme = localStorage.getItem("theme");
const btnPosition = localStorage.getItem("btnPosition");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}
if (btnPosition == "on") {
  fg.classList.add("switch-on");
}
fg.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  fg.classList.toggle("switch-on");
  let theme = "light";
  let btnPos = "off";

  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  if (fg.classList.contains("switch-on")) {
    btnPos = "on";
  }
  localStorage.setItem("theme", theme);
  localStorage.setItem("btnPosition", btnPos);
});

/* fg.addEventListener("click", () => {
  fg.classList.toggle("switch-on");
  darkmode(headline_set);
  darkmode(headline_dark);
  darkmode(container_about);
  darkmode(user_name);

  if (fg.classList.contains("switch-on")) {
    document.body.style.background = "#999999";
    document.cookie = document.body.style.background;
  } else {
    document.body.style.background = "white";
  }
}); */

/* function darkmode(element) {
  element.classList.toggle("dark-mode");
} */
