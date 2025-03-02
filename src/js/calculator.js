let first = document.getElementById('firstInp');
let second = document.getElementById('secondInp');
let list = document.querySelector('.ul-calc');
let buttons = document.querySelectorAll('.button-calc');
let equal = document.getElementById('equal');
let result = document.getElementById('result');
let title = document.getElementById('title-calc');
let inputs = document.querySelectorAll('.input-calc');

let container = document.querySelector('.container-calc');

title.style.fontSize = '16px';
title.style.fontFamily = 'Montserrat Alternates';
title.style.fontWeight = '400';
title.style.margin = '36px auto';

container.style.display = 'flex';
container.style.justifyContent = 'space-between';
container.style.alignItems = 'center';
container.style.margin = '0 35.7px 36px 35.7px';
container.style.width = '635px'


inputs.forEach((input) => {
    input.placeholder = 'Введіть число';
    input.style.backgroundColor = '#d7d7d7';
    input.style.borderRadius = '30px';
    input.style.padding = '12px 10px'
    input.style.fontFamily = 'Montserrat Alternates';
    input.style.fontSize = '12px';
    input.style.width = '135px';
    input.style.textAlign = 'center';
    input.style.fontWeight = '400';
    input.style.color = '#7e7e7e';
    input.style.boxShadow = '3px 3px 0 0 rgba(0, 0, 0, 0.25)';


});

result.textContent = 'Результат';

list.style.display = 'flex';
list.style.flexWrap = 'wrap';
list.style.gap = '10px';
list.style.width = '60px';
list.style.height = '60px';


buttons.forEach((button) => {
    button.style.display = 'flex'
    button.style.backgroundColor = 'black';
    button.style.border = 'none';
    button.style.borderRadius = '30px';
    button.style.color = 'white';
    button.style.padding = '5px 8px';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.boxShadow = '3px 3px 0 0 rgba(0, 0, 0, 0.25)';
    button.style.height = '25px';
    button.style.width = '25px';
    button.style.cursor = 'pointer';
});

equal.style.flexBasis = '';
equal.style.width = '27px';
equal.style.cursor = 'default';


document.addEventListener("DOMContentLoaded", () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let firstVal = parseFloat(first.value);
            let secondVal = parseFloat(second.value);
            let operator = button.getAttribute('data-operator')
            let resulti;
            switch (operator) {
                case "+": resulti = firstVal + secondVal;
                    break;
                case "-": resulti = firstVal - secondVal;
                    break;
                case "*": resulti = firstVal * secondVal;
                    break;
                case "/":
                    if (secondVal === 0) {
                        alert("На нуль ділити не можна!");
                    } else {
                        resulti = firstVal / secondVal;
                    }
                    break;
                default: resulti = "Invalid operator";
                    break;
            }
            result.textContent = resulti;
        });
    });
});