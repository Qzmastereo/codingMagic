let timeInp = document.querySelector('.time-input');
let equal = document.querySelector('.tequal');



timeInp.addEventListener('input', () => {
    let inputValue = Number.parseInt(timeInp.value);
    
    const seconds = inputValue % 60;
    const strSeconds = String(seconds).padStart(2, '0');
    const totalMinutes = Math.floor(inputValue / 60);
    const minutes = totalMinutes % 60;
    const strMinutes = String(minutes).padStart(2, '0');
    const hours = Math.floor(totalMinutes / 60) % 24;
    const strHours = String(hours).padStart(2, '0');
    const days = Math.floor(totalMinutes / (60 * 24));
    const strDays = String(days);
    

    equal.textContent = `${strDays}дн. ${strHours}:${strMinutes}:${strSeconds}`;

    if(isNaN(inputValue)) {
        equal.textContent = '--:--:--'
    }
    console.log(inputValue);
});