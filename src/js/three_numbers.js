function findMax() {
    let num1 = parseFloat(document.querySelector(".num11").value) || 0;
    let num2 = parseFloat(document.querySelector(".num22").value) || 0;
    let num3 = parseFloat(document.querySelector(".num33").value) || 0;
    let resultElement = document.querySelector(".result-one");
    
    if (document.querySelector(".num11").value && document.querySelector(".num2").value && document.querySelector(".num3").value) {
        let maxNumber = Math.max(num11, num22, num33);
        resultElement.innerText = "Найбільше число, яке ви ввели - " + maxNumber;
    } else {
        resultElement.innerText = "Найбільше число, яке ви ввели - (число)";
    }
}