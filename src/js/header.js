document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".header__dropdown");
  const menu = document.querySelector(".header__menu");
  const arrow = document.querySelector(".header__arrow");
  const footerLogo = document.querySelector(".image-footer img");

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
  const logo = document.querySelector(".header__logo img");
  const footerLogo = document.querySelector(".image-footer img");

  if (checkbox.checked) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");

    document.querySelector("header").classList.remove("light-theme");
    document.querySelector("header").classList.add("dark-theme");

    logo.src = "img/Header-logo-dark.svg";
    footerLogo.src = "img/Header-logo-dark.svg";
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

    document.querySelector("header").classList.remove("dark-theme");
    document.querySelector("header").classList.add("light-theme");

    logo.src = "img/Header-logo.svg";
    footerLogo.src = "img/Header-logo.svg";
  }
}

document
  .getElementById("slider_checkbox")
  .addEventListener("change", toggleTheme);

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".header__menu-item");
  const sections = document.querySelectorAll("section");


  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedAction = this.getAttribute("data-action");


      if (selectedAction === "all") {
        sections.forEach((section) => {
          section.classList.remove("hidden");
        });
      } else {

        sections.forEach((section) => {
          
          if (section.getAttribute("data-action").includes(selectedAction)) {
            section.classList.remove("hidden");
          } else {
            section.classList.add("hidden");
          }
        });
      }
    });
  });
});
