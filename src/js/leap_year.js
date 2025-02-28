
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const checkButton = document.getElementById("check");

  checkButton.addEventListener("click", function () {
    const yearString = input.value.trim();
    const year = parseInt(yearString, 10);

    if (!isNaN(year)) {
      if (year < 1900) {
        output.textContent = "Будь ласка, введіть свого народження!";
        output.style.color = "#000";
        return;
      } else if (isLeapYear(year)) {
        output.textContent = "Ви народилися у високосний рік!";
        output.style.color = "#039900";
      } else {
        output.textContent = "Ви народилися не у високосний рік!";
        output.style.color = "#900";
      }
    } else {
      output.textContent = "Будь ласка, введіть коректний рік!";
      output.style.color = "#000";
    }
  });
});
document.getElementById("input").addEventListener("input", function () {
  const input = this;
  const errorMessage = document.getElementById("error-message");
  if (input.value > 2025 || input.value < 1) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
