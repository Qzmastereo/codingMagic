//Рахунок:
//Комп'ютер - 0
//Ви - 0



function checkResult() {
    if (HumanAnswer === PCAnswer) {
        stoneResult.style.color = 'black'
        stoneResult.textContent = 'Нічия!';
    } else if (
        (HumanAnswer === 'stone' && PCAnswer === 'scissors') ||
        (HumanAnswer === 'scissors' && PCAnswer === 'paper') ||
        (HumanAnswer === 'paper' && PCAnswer === 'stone')
    ) {
        stoneResult.style.color = 'green';
        stoneResult.textContent = 'Ви перемогли!';
        humanScore++

    } else {
        stoneResult.style.color = 'red'
        stoneResult.textContent = 'Комп’ютер переміг!';
        PCScore++
    }
}

let humanScore = 1000;
let PCScore = 1000;

let stone = document.getElementById('stone');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');

let PCVar = document.getElementById('stone__button-mod');

let stoneResult = document.querySelector('.stone__game-result')

let stoneScoreList = document.querySelector('.stone__result');
stoneScoreList.textContent = "Рахунок: Комп'ютер - 0 Ви - 0"

let PCAnswer = '';
let HumanAnswer = '';

PCVar.style.backgroundColor = 'rgb(70, 70, 70)';
PCVar.disabled = true;

stone.addEventListener('click', () => {
    HumanAnswer = 'stone';
    console.log(HumanAnswer);
    PCVar.style.backgroundColor = 'black';
    PCVar.disabled = false;
})

scissors.addEventListener('click', () => {
    HumanAnswer = 'scissors';
    console.log(HumanAnswer);
    PCVar.style.backgroundColor = 'black';
    PCVar.disabled = false;
})

paper.addEventListener('click', () => {
    HumanAnswer = 'paper';
    console.log(HumanAnswer);
    PCVar.style.backgroundColor = 'black';
    PCVar.disabled = false;
})

let answerVars = ['stone', 'scissors', 'paper']

PCVar.addEventListener('click', () => {
    PCAnswer = answerVars[Math.floor(Math.random() * answerVars.length)];
    console.log(PCAnswer);
    checkResult()
    PCVar.style.backgroundColor = 'rgb(70, 70, 70)';
    PCVar.disabled = true;
    stoneScoreList.textContent = `Рахунок:
        Комп'ютер - ${PCScore}
        Ви - ${humanScore}`
})

