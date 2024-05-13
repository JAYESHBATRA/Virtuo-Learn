const quizData = [
  {
    question:
      "What is the correct order of electron affinity among O, F and Cl ?",
    a: "O < Cl < F",
    b: "O < F < Cl",
    c: "F < O < Cl",
    d: "Cl < O < F",
    correct: "b",
    explanation: "Electron affinity is the energy released when an electron is added to a neutral atom to form a negative ion. Among oxygen (O), fluorine (F), and chlorine (Cl), fluorine has the highest electron affinity due to its smaller atomic size and higher effective nuclear charge. Thus, the correct order is O < F < Cl.",
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
    explanation: "The formation of a yellow precipitate upon the addition of aqueous silver nitrate indicates the presence of chloride ions. Orthophosphate ions (PO₄³⁻) do not react with silver nitrate, whereas chloride ions (Cl⁻) do, forming a yellow precipitate of silver chloride (AgCl).",
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
    explanation: "The tetrathionate ion (S₄O₆²⁻) consists of four sulfur atoms bonded to each other with three S-S bonds and two S=O bonds. Therefore, the number of S-S bonds in the tetrathionate ion is 3.",
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
    explanation: "When ozone (O₃) reacts with hydrogen sulfide (H₂S), oxygen gas (O₂) is released. The reaction can be represented as follows: O₃ + H₂S -> O₂ + H₂O.",
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
    explanation: "Boron shows a diagonal relationship with silicon (Si). Diagonal relationships occur between elements in different periods that have similar properties, despite being in different groups. Boron and silicon have similar properties due to their comparable sizes and similar electronegativities.",
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
    explanation: "Catenation is the ability of an element to form bonds with itself to form chains or rings. Carbon (C) exhibits the maximum catenation property among the given options. This is due to its ability to form strong covalent bonds with other carbon atoms, leading to the formation of long chains and complex structures.",
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
    explanation: "Boron shows a diagonal relationship with silicon (Si). Diagonal relationships occur between elements in different periods that have similar properties, despite being in different groups. Boron and silicon have similar properties due to their comparable sizes and similar electronegativities.",
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
    explanation: "Cyclic metaphosphoric acid (HPO₃)ₙ does not have any P-O-P bonds because it consists of cyclic phosphate units linked by P-O-H bonds. Therefore, the correct answer is 0.",
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
    explanation: "On heating ammonium nitrate (NH₄NO₃) at 250°C, nitrous oxide (N₂O) is released. The decomposition of ammonium nitrate at this temperature yields nitrous oxide, water, and dinitrogen monoxide.",
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
    explanation: "The hybridization of sulfur in sulfur hexafluoride (SF₆) is sp³d². In SF₆, sulfur forms six σ bonds with the fluorine atoms, and its electron configuration involves one 3s, three 3p, and two 3d orbitals.",
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

const explanationElement = document.getElementById("explanation");

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    difficulty.innerText = currentQuizData.difficulty;

    // Update explanation text
    explanationElement.innerText = currentQuizData.explanation;
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
