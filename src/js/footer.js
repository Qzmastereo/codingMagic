// document.querySelector(".js-footer-btn").addEventListener("click", function(event) {
//     event.preventDefault(); // Отключаем стандартную отправку формы

//     let emailInput = document.querySelector(".form-footer input");
//     let emailValue = emailInput.value.trim();
    
//     // Регулярное выражение для проверки email
//     let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (emailValue === "") {
//         alert("Будь ласка, введіть email!");
//         emailInput.focus();
//     } else if (!emailPattern.test(emailValue)) {
//         alert("Будь ласка, введіть коректний email!");
//         emailInput.focus();
//     } else {
//         alert("Дякуємо за підписку!");
//         emailInput.value = ""; // Очищаем поле после успешной подписки
//     }
// });

