
const randomGuess = document.querySelector(".guessTheNumber__input");
const guessTheNumberResult = document.querySelector(".guessTheNumber__result");
const btn = document.querySelector(".guessTheNumber__btn--input");
console.log(btn);
btn.addEventListener("click", (e) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (+randomGuess.value > 10) {
    guessTheNumberResult.textContent = `Потрібно ввести число від 1 до 10`;
    guessTheNumberResult.style.color = "#000";
  } else if (+randomGuess.value === randomNumber) {
    guessTheNumberResult.textContent = `Вітаю, ви вгадали число! ${randomNumber} `;
    guessTheNumberResult.style.color = "green";
  } else {
    guessTheNumberResult.textContent = `Ви програли, комп’ютер загадав ${randomNumber}. `;
    guessTheNumberResult.style.color = "red";
  }
});
