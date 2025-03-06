let timeInp = document.querySelector('.time-input');
let equal = document.querySelector('.tequal');



timeInp.addEventListener('input', () => {
    let inputValue = Number.parseInt(timeInp.value);
    
    const numbers = inputValue / 60;
    const hours = Math.floor(numbers % 24);
    const strHours = String(hours);
    const strMinutes = String(inputValue % 60);
    const days = Math.floor(numbers / 24);
    const strDays = String(days);
    

    equal.textContent = `${strDays}:${strHours}:${strMinutes}`;

    if(isNaN(inputValue)) {
        equal.textContent = '--:--:--'
    }
    console.log(inputValue);
});
