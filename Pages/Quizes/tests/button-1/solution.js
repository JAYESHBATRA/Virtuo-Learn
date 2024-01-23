const quizData = [
  {
    question:
      "What is the correct order of electron affinity among O, F and Cl ?",
    a: "O < Cl < F",
    b: "O < F < Cl",
    c: "F < O < Cl",
    d: "Cl < O < F",
    correct: "b",
    topic: "Electron Affinity",
    difficulty: "Easy",
  },
  {
    question:
      "A yellow precipitate is formed upon the addition of aqueous silver nitrate to a solution of ?",
    a: "Orthophosphate",
    b: "Metaphosphate",
    c: "Pyrophosphate",
    d: "Phosphite",
    correct: "a",
    topic: "Group 11",
    difficulty: "Hard",
  },

  {
    question: "How many S-S bonds are there in tetrathionate ion ?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "c",
    topic: "Molecular Structure",
    difficulty: "Hard",
  },
  {
    question: "Which gas is released when ozone reacts with hydrogen sulphide?",
    a: "Sulphur dioxide",
    b: "Sulphur trioxide",
    c: "Oxygen",
    d: "Hydrogen",
    correct: "c",
    topic: "Group 1",
    difficulty: "Medium",
  },
  {
    question: "Boron shows diagonal relation with:",
    a: "Al",
    b: "C",
    c: "Si",
    d: "Sn",
    correct: "c",
    topic: "Diagonal Relationship",
    difficulty: "Easy",
  },
  {
    question: "Catenation property is maximum in",
    a: "phosphorus",
    b: "carbon",
    c: "sulphur",
    d: "zinc",
    correct: "b",
    topic: "Catenation",
    difficulty: "Easy",
  },
  {
    question: "Boron shows diagonal relation with:",
    a: "Al",
    b: "C",
    c: "Si",
    d: "Sn",
    correct: "c",
    topic: "Chemical Composition",
    difficulty: "Medium",
  },
  {
    question: "The number of P-O-P bonds in cyclic metaphosphoric acid is",
    a: "2",
    b: "0",
    c: "3",
    d: "4",
    correct: "c",
    topic: "Chemical Bonding",
    difficulty: "Medium",
  },
  {
    question:
      "Which oxide of nitrogen is obtained on heating ammonium nitrate at 250°C ?",
    a: "Nitric oxide",
    b: "Nitrous oxide",
    c: "Nitrogen dioxide",
    d: "Dinitrogen tetroxide",
    correct: "b",
    topic: "Nitrogen Oxides",
    difficulty: "Easy",
  },
  {
    question: "The hybridisation of sulphur in sulphur hexafluoride is",
    a: "sp3d",
    b: "sp3d2",
    c: "sp3d3",
    d: "sp3",
    correct: "b",
    topic: "Hybridization",
    difficulty: "Hard",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const difficulty = document.getElementById("difficulty");

let currentQuiz = 0;
let score = 0;
const weak_topics = [];

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked=false));
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  difficulty.innerText = currentQuizData.difficulty;
};

loadQuiz();

document.getElementById("answer").innerHTML = quizData[0].correct;

let next_Button = document.getElementById("next");
next_Button.addEventListener("click", () => {
  if (currentQuiz == 9) {
    next_Button.disabled = true;
  } else {
    currentQuiz++;
    console.log(currentQuiz);

    next_Button.disabled = false;
    document.getElementById("answer").innerHTML = quizData[currentQuiz].correct;
    loadQuiz();
  }
});
