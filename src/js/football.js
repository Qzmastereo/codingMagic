const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();


const ballImage = new Image();
ballImage.src = "img/football (1) 1.png"; 

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 25;
let score = 0;
const scoreElement = document.getElementById("score");
scoreElement.style.display = "block";

let targetX = ballX;
let targetY = ballY;
let speed = 8; 
let gravity = 0.5;
let bounceFactor = 0.7;
let velocityY = 0;


let circleX = Math.random() * (canvas.width - 30) + 15;
let circleY = Math.random() * (canvas.height - 30) + 15;
let circleRadius = 15;

function drawBall() {
    ctx.drawImage(ballImage, ballX - ballRadius, ballY - ballRadius, ballRadius * 2, ballRadius * 2);
}


function drawCircle() {
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(138,206,207,1)";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}


function updateBall() {
    let dx = targetX - ballX;
    let dy = targetY - ballY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > speed) {
        ballX += (dx / distance) * speed;
    } else {
        ballX = targetX;
    }
    
    // Гравітація і відбивання від підлоги
    velocityY += gravity;
    ballY += velocityY;
    
    if (ballY + ballRadius > canvas.height) {
        ballY = canvas.height - ballRadius;
        velocityY *= -bounceFactor;
    }

    // Перевірка зіткнення м'яча із колом
    let circleDistance = Math.sqrt((ballX - circleX) ** 2 + (ballY - circleY) ** 2);
    if (circleDistance < ballRadius + circleRadius) {
        score++;
        circleX = Math.random() * (canvas.width - 30) + 15;
        circleY = Math.random() * (canvas.height - 30) + 15;
    }
}

// Оновлення рахунку
function updateScore() {
    scoreElement.textContent = `Голи: ${score}`;
    scoreElement.style.fontFamily = 'Montserrat Alternates'; // Change to your desired font
}

// Обробка кліку на ворота
canvas.addEventListener("click", function (event) {
    const rect = canvas.getBoundingClientRect();
    targetX = event.clientX - rect.left;
    targetY = event.clientY - rect.top;
    velocityY = -10; // Початковий поштовх вгору при кліку
});

// Основна функція гри
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawBall();
    updateBall();
    updateScore();
    requestAnimationFrame(gameLoop);
}

gameLoop();
