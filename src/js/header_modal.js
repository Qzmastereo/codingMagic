document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const saveModalBtn = document.getElementById("saveModalBtn");
  const userInput = document.getElementById("userInput");
  const userNameSpan = document.getElementById("userName");

  
  modal.classList.remove("hidden");

 
  function closeModal() {
    modal.classList.add("hidden");
  }

  
  closeModalBtn.addEventListener("click", closeModal);


  saveModalBtn.addEventListener("click", function () {
    const name = userInput.value.trim();
    if (name !== "") {
      userNameSpan.textContent = name; 
      closeModal();
    }
  });
});
