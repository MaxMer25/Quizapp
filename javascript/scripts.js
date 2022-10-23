const fg = document.querySelector('[data-js="switch-btn"]');

fg.addEventListener("click", () => {
  fg.classList.toggle("switch-on");
  if (fg.classList.contains("switch-on")) {
    document.body.style.background = "#999999";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});
