const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

document.getElementById("menu-btn").addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  if (menu.classList.contains("hidden")) {
    menu.classList.replace("hidden", "flex");
  } else {
    menu.classList.replace("flex", "hidden");
  }
}
