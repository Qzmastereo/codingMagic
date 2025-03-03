document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".header__dropdown");
  const menu = document.querySelector(".header__menu");
  const arrow = document.querySelector(".header__arrow");

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active");
    arrow.classList.toggle("rotated");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !menu.contains(event.target)) {
      dropdown.classList.remove("active");
      arrow.classList.remove("rotated");
    }
  });
});

function toggleTheme() {
  const checkbox = document.getElementById("slider_checkbox");
  const body = document.body;
  const header = document.querySelector("header");

  if (checkbox.checked) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    header.classList.remove("light-theme");
    header.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    header.classList.remove("dark-theme");
    header.classList.add("light-theme");
  }
}

document
  .getElementById("slider_checkbox")
  .addEventListener("change", toggleTheme);
