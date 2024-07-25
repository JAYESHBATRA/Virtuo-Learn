const quizData = [
  {
    question: "How many electrons does a neutral nitrogen atom have?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "c",
    explanation: "A neutral nitrogen atom has 7 electrons. This is because the atomic number of nitrogen is 7, which corresponds to the number of electrons in a neutral atom.",
    topic: "Atom",
    difficulty: "Easy",
  },
  {
    question: "Which group in the periodic table contains noble gases?",
    a: "Group 1",
    b: "Group 2",
    c: "Group 17",
    d: "Group 18",
    correct: "d",
    explanation: "Noble gases are found in Group 18 of the periodic table. These gases are characterized by their very low reactivity due to their filled valence electron shells.",
    topic: "Noble Gases",
    difficulty: "Easy",
  },
  {
    question: "What is the main energy level (shell) for the outermost electrons in Group 16 elements?",
    a: "n=1",
    b: "n=2",
    c: "n=3",
    d: "n=4",
    correct: "d",
    explanation: "The main energy level (shell) for the outermost electrons in Group 16 elements is n=4. Group 16 elements, also known as the chalcogens, have their outermost electrons in the fourth energy level.",
    topic: "Periodic Table",
    difficulty: "Medium",
  },
  {
    question: "Which element is at the center of a molecule with a trigonal bipyramidal molecular geometry?",
    a: "Carbon",
    b: "Nitrogen",
    c: "Phosphorus",
    d: "Sulfur",
    correct: "c",
    explanation: "Phosphorus is at the center of a molecule with a trigonal bipyramidal molecular geometry. In this geometry, the central atom (phosphorus) is surrounded by five other atoms or groups of atoms arranged in a trigonal bipyramid.",
    topic: "Periodic Table",
    difficulty: "Hard",
  },
  {
    question: "What is the charge of a chloride ion (Cl-)?",
    a: "-1",
    b: "+1",
    c: "0",
    d: "-2",
    correct: "a",
    explanation: "The charge of a chloride ion (Cl-) is -1. This ion is formed when a chlorine atom gains one electron to achieve a stable electron configuration.",
    topic: "Halogens",
    difficulty: "Easy",
  },
  {
    question: "What is the common oxidation state of oxygen in compounds?",
    a: "-1",
    b: "0",
    c: "+1",
    d: "-2",
    correct: "d",
    explanation: "The common oxidation state of oxygen in compounds is -2. Oxygen typically gains two electrons to achieve a stable electron configuration, resulting in an oxidation state of -2 in most compounds.",
    topic: "Group 16",
    difficulty: "Medium",
  },
  {
    question: "Which of the following elements has the highest atomic radius?",
    a: "Oxygen",
    b: "Nitrogen",
    c: "Carbon",
    d: "Fluorine",
    correct: "c",
    explanation: "Carbon has the highest atomic radius among the given options. Atomic radius generally decreases across a period from left to right in the periodic table, and carbon is located to the left of oxygen, nitrogen, and fluorine.",
    topic: "Group 14",
    difficulty: "Hard",
  },
  {
    question: "What is the trend of atomic radius as you move from left to right across a period in the periodic table?",
    a: "Increases",
    b: "Decreases",
    c: "Remains Constant",
    d: "No Pattern",
    correct: "b",
    explanation: "The trend of atomic radius as you move from left to right across a period in the periodic table is that it decreases. This is due to increasing nuclear charge, which attracts the outermost electrons more strongly, resulting in a smaller atomic radius.",
    topic: "Atoms",
    difficulty: "Medium",
  },
  {
    question: "Which ion is isoelectronic with argon?",
    a: "Cl-",
    b: "K+",
    c: "Ca2+",
    d: "S2-",
    correct: "c",
    explanation: "The ion that is isoelectronic with argon is Ca2+. Isoelectronic species have the same number of electrons, and Ca2+ has the same electron configuration as argon (18 electrons).",
    topic: "Inert Elements",
    difficulty: "Hard",
  },
  {
    question: "In which period is the element chlorine located?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
    explanation: "The element chlorine is located in period 3 of the periodic table. Periods in the periodic table represent the energy levels (shells) in which the outermost electrons of the elements are found.",
    topic: "Periodic Table",
    difficulty: "Easy",
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
  const weak_topics=[];
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
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