const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
const gameOver = document.getElementById("game-over");
const gameOverElement = document.getElementById("gameOver");
const restart = document.getElementById("restart-game");
const scoreElement = document.getElementById("score");



let bird = {x: 50, y: 300, velocity: 0, gravity: 0.6, jump: -10};
let pipes = []
let gameRunning = true;
let score = 0;


restart.addEventListener("click", function() {
    restartGame();
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        bird.velocity = bird.jump
    }
})

function colorBackground() {
    canvas.style.border = "solid black"
}

colorBackground();



// draw birds
function birdDraw() {
    ctx.fillStyle = "blue"
    ctx.fillRect(bird.x, bird.y, 20, 20)
}
birdDraw();

function updateBird() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity

    if (bird.y < 0 || bird.y > canvas.height - 20) {
        endGame();
    }
    
}

function drawPipes() {
    ctx.fillStyle = "green";
    pipes.forEach(pipe => {
        // top pipe
        ctx.fillRect(pipe.x, 0, 50, pipe.topHeight);

        // bottom pipe
        ctx.fillRect(pipe.x, canvas.height - pipe.bottomHeight, 50, pipe.bottomHeight);
    });
}

function updatePipes() {
    pipes.forEach(pipe => {
        pipe.x -= 2
    });


    if (pipes.length === 0 || pipes[pipes.length - 1].x < 200) {
        const topHeight = Math.random() * (canvas.height - 200) + 50;
        const bottomHeight = canvas.height - topHeight - 150; // 150 = gap for bird
        pipes.push({x: canvas.width, topHeight, bottomHeight });
    }

    pipes.forEach(pipe => {
        if (pipe.x < bird.x + 20 && pipe.x + 50 > bird.x) {
            if (bird.y < pipe.topHeight ||  bird.y + 20 > canvas.height - pipe.bottomHeight) {
                endGame();
            }
        }

        if (pipe.x + 50 < bird.x && !pipe.passed) {
               pipe.passed = true;
                score++;
                scoreElement.textContent = `Score: ${score}`;
        }  
    });
}

function endGame() {
    gameOverElement.style.display = 'block';
    gameRunning = false
}

function restartGame() {
    bird.y = 300;
    bird.velocity = 0;
    pipes = [];
    gameOverElement.style.display = "none";
    scoreElement.textContent = 0
    gameRunning = true;
    gameloop()
}

function gameloop() {
    if (gameRunning === false) {
        return
    } else
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    updateBird();
    birdDraw();
    drawPipes()
    updatePipes();


    requestAnimationFrame(gameloop)
}

gameloop()