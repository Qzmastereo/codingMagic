export function findMax() {
    let num1 = parseFloat(document.querySelector(".num11").value);
    let num2 = parseFloat(document.querySelector(".num22").value);
    let num3 = parseFloat(document.querySelector(".num33").value);
    let resultElement = document.querySelector(".result-one");
    
    if (!isNaN(".num1") && !isNaN(".num2") && !isNaN(".num3")) {
        let maxNumber = Math.max(num1, num2, num3);
        resultElement.innerText = "Найбільше число, яке ви ввели - " + maxNumber;
    } else {
        resultElement.innerText = "Найбільше число, яке ви ввели - (число)";
    }
}