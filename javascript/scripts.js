const fg = document.querySelector('[data-js="switch-btn"]');
const headline_set = document.querySelector('[data-js="settings-headline"]');
const headline_dark = document.querySelector('[data-js="darkmode-headline"]');
const container_about = document.querySelector('[data-js="container-about"]');
const user_name = document.querySelector('[data-js="user-name"]');

fg.addEventListener("click", () => {
  fg.classList.toggle("switch-on");
  darkmode(headline_set);
  darkmode(headline_dark);
  darkmode(container_about);
  darkmode(user_name);

  if (fg.classList.contains("switch-on")) {
    document.body.style.background = "#999999";
  } else {
    document.body.style.background = "white";
  }
});

function darkmode(element) {
  element.classList.toggle("dark-mode");
}
