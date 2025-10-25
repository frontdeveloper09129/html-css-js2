const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");

const questionText = document.getElementById("question-text");

const answersContainer = document.getElementById("answers-container");

const currentQuestionSpan = document.getElementById("current-question");

const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];


let currentQuestionIndex = 0;
let score = 0;
let answerDisable = false;


totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", StartQuiz);
qu

function StartQuiz() {
   currentQuestionIndex = 0;
   score = 0;
   scoreSpan.textContent = 0;

   startScreen.classList.remove("active");
   quizScreen.classList.add("active")

   ShowQuestion();


}

function ShowQuestion() {
    answerDisable = false;

    const CurrentQuestion = quizQuestions[currentQuestionIndex];
    
  // so every time that you go to question the currentQuestionspan will add 1 like for example if the first question then it will add the 1 if the second question it will add 2
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

//  putting the question into question text or h1 since the currentquestion is start from zero it wil start from the first question
    questionText.textContent = CurrentQuestion.question;

    answersContainer.innerHTML = "";

    CurrentQuestion.answers.forEach(answers=> {
      const button = document.createElement("button");

      button.textContent = answers.text;
      button.classList.add("answer-btn");

      button.dataset.correct = answers.correct

      button.addEventListener("click", SelectAnswer);

      answersContainer.appendChild(button);
      
      
    });
}


function SelectAnswer() {

  

}
