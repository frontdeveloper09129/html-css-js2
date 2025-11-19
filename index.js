const playBtn = document.getElementById("button-play");
const pickMove = document.querySelector(".pick-move");
const yourMove = document.getElementById("your-move");
const images = document.querySelector(".images");
const start2 = document.querySelector(".start2");
const PckYourMove = document.querySelector(".human-images");


const computerMove = [
  "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960",
  "https://5.imimg.com/data5/SELLER/Default/2021/1/QM/ZC/SY/33749133/white-art-paper.jpg",
  "https://img.freepik.com/premium-vector/isolated-open-scissors-symbol-set-scissors-cutting-paperscissoring_1114531-6359.jpg?semt=ais_hybrid&w=740&q=80"
];

//const images = document.querySelector(".images");
//images.src = computerMove[0]; // ✅ correct

playBtn.addEventListener("click", function() {
    pickMove.classList.add("active");
});

let clicked = false;

document.querySelector(".rock-btn").addEventListener("click", function () {
    yourMove.textContent = "rock";
    clicked = true
});

document.querySelector(".start").addEventListener("click", function() {
    humanMove();
});

document.querySelector(".paper-btn").addEventListener("click", function() {
    yourMove.textContent = "paper";
    clicked = true
});

document.querySelector(".scisccor-btn").addEventListener("click", function() {
    yourMove.textContent = "scisccor";
    clicked = true
});

function changesImage() {
    const randomIndex = Math.floor(Math.random() * computerMove.length);
    const selectMove = computerMove[randomIndex]

    images.src = selectMove; 
} 

function time() {
    const setInterval1 = setInterval(changesImage, 100);
    const getThefinalImage = images.src;
    console.log(getThefinalImage)

    setTimeout(() => {
    clearInterval(setInterval1); // stop the image change
    }, 5000);
}

const human_pick_move = document.getElementById("human-move");
const robot_pick_move = document.getElementById("robot-move");
const myScores = document.getElementById("my-score");
const robotScores = document.getElementById("robot-score");


let myScore = 0
let robotScore = 0 
let robotMove = "";
function humanMove() {

    
    if (clicked === false) {
        yourMove.textContent = "please pick your move!..";
        return
    } 
        const valueSpan = yourMove.textContent;
        const setInterval1 = setInterval(changesImage, 100); //setInterval runs a function repeatedly at a set interval (every X milliseconds).

       

        setTimeout(() => {
        clearInterval(setInterval1); // clearInterval is a built-in JavaScript function that stops a repeating action started by setInterval.

        const getFinalItem = images.src;
        const winner = document.getElementById("winner")


        if (getFinalItem === computerMove[0]) {
            robotMove = "rock"
            robot_pick_move.textContent = robotMove
        } else if (getFinalItem === computerMove[1]) {
            robotMove = "paper"
            robot_pick_move.textContent = robotMove
        } else if (getFinalItem === computerMove[2]) {
            robotMove = "scisccor"
            robot_pick_move.textContent = robotMove
        }

        if (valueSpan === robotMove) {
            winner.textContent = "winner: draw";
        }
        else if (
            (valueSpan === "rock"     && robotMove === "scisccor") ||
            (valueSpan === "paper"    && robotMove === "rock") ||
            (valueSpan === "scisccor" && robotMove === "paper")
        ) {
            winner.textContent = "winner: you win";
            myScore++;
            myScores.textContent = myScore;
        }
        else {
            winner.textContent = "winner: you lose";
            robotScore++;
            robotScores.textContent = robotScore;
        }

        }, 5000);

      

      

        if (valueSpan === "rock") {
            PckYourMove.src = computerMove[0];
            human_pick_move.textContent = "my move: rock"
        } else if (valueSpan === "paper") {
            PckYourMove.src = computerMove[1];
            human_pick_move.textContent = "my move: paper"
        } else if (valueSpan === "scisccor") {
            PckYourMove.src = computerMove[2];
            human_pick_move.textContent = "my move: scisccor"
        };

     pickMove.classList.remove("active");
};

//setInterval() is a built-in function that lets you run some code repeatedly every few milliseconds.