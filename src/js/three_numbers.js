function findMax() {
    let num1 = parseFloat(document.querySelector(".num11").value) || 0;
    let num2 = parseFloat(document.querySelector(".num22").value) || 0;
    let num3 = parseFloat(document.querySelector(".num33").value) || 0;
    let resultElement = document.querySelector(".result-one");
    
    if (document.querySelector(".num11").value && document.querySelector(".num22").value && document.querySelector(".num33").value) {
        let maxNumber = Math.max(num1, num2, num3);
        resultElement.innerText = "Найбільше число, яке ви ввели - " + maxNumber;
    } else {
        resultElement.innerText = "Найбільше число, яке ви ввели - (число)";
    }
}