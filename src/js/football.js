

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

const ball = { x: 80, y: canvas.height / 2, width: 70, height: 70, following: false, image: new Image() };
ball.image.src = "img/football (1) 1.png"; // Посилання на м'яч

const goal = { x: canvas.width - 60, y: canvas.height / 2 - 30, width: 50, height: 60 };
let score = 0;

canvas.addEventListener("mousedown", (event) => {
    const { offsetX, offsetY } = event;
    if (
        offsetX >= ball.x && offsetX <= ball.x + ball.width &&
        offsetY >= ball.y && offsetY <= ball.y + ball.height
    ) {
        ball.following = true;
    }
});

canvas.addEventListener("mousemove", (event) => {
    if (ball.following) {
        ball.x = event.offsetX - ball.width / 2;
        ball.y = event.offsetY - ball.height / 2;
    }
});

canvas.addEventListener("mouseup", () => {
    if (
        ball.x >= goal.x && ball.x <= goal.x + goal.width &&
        ball.y >= goal.y && ball.y <= goal.y + goal.height
    ) {
        score++;
        scoreDisplay.textContent = "Голи: " + score;
        ball.x = 80;
        ball.y = canvas.height / 2;
    }
    ball.following = false;
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(ball.image, ball.x, ball.y, ball.width, ball.height);
    
    if (ball.x <= 0 || ball.x + ball.width >= canvas.width) {
        ball.x = Math.random() * (canvas.width - ball.width);
        ball.y = Math.random() * (canvas.height - ball.height);
    }
    
    requestAnimationFrame(draw);
}

draw();