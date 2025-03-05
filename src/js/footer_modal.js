document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector(".input-footer");
    const subscribeBtn = document.querySelector(".js-footer-btn");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close-modal");

    subscribeBtn.addEventListener("click", function (event) {
        event.preventDefault();

        let emailValue = emailInput.value.trim();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            alert("Будь ласка, введіть email!");
            emailInput.focus();
        } else if (!emailPattern.test(emailValue)) {
            alert("Будь ласка, введіть коректний email!");
            emailInput.focus();
        } else {
            modal.style.display = "flex"; 
            emailInput.value = ""; 
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
