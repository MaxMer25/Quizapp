const fg = document.querySelector('[data-js="switch-btn"]');

fg.addEventListener("click", () => {
  fg.classList.toggle("switch-on");
  document
    .querySelector('[data-js="settings-headline"]')
    .classList.toggle("dark-mode");
  document
    .querySelector('[data-js="darkmode-headline"]')
    .classList.toggle("dark-mode");
  document
    .querySelector('[data-js="container-about"]')
    .classList.toggle("dark-mode");
  document.querySelector('[data-js="user-name"]').classList.toggle("dark-mode");

  if (fg.classList.contains("switch-on")) {
    document.body.style.background = "#999999";
  } else {
    document.body.style.background = "white";
  }
});
