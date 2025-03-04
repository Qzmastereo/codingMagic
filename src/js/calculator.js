let first = document.getElementById('firstInp');
let second = document.getElementById('secondInp');
let list = document.querySelector('.ul-calc');
let buttons = document.querySelectorAll('.button-calc');
let equal = document.getElementById('equal');
let result = document.getElementById('result');
let title = document.getElementById('title-calc');
let inputs = document.querySelectorAll('.input-calc');

let container = document.querySelector('.container-calc');

result.textContent = 'Результат';

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