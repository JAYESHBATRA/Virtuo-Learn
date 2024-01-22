const quizData = [
    {
      question: "When work is done on system or by a system there is a change in _________",
      a: "external energy",
      b: "internal energy",
      c: "adiabatic energy",
      d: "isothermal energy",
      correct: "b",
      topic: "Internal Energy of System",
      difficulty: "Easy",
    },
    {
      question: "The system that does not allow the heat to pass through its boundary between the system and surroundings is called as ______________ system.",
      a: "adiabatic",
      b: "open",
      c: "isothermal",
      d: "close",
      correct: "a",
      topic: "Adiabatic System",
      difficulty: "Medium",
    },
    {
      question: "The least random state of the water system is:",
      a: "ice",
      b: "liquid water",
      c: "steam",
      d: "randomness is same",
      correct: "a",
      topic: "Randomness and Entropy",
      difficulty: "Easy",
    },
    {
      question: "The enthalpy change in a reaction does not depend upon",
      a: "the state of reactions and products",
      b: "the nature of the reactants and products",
      c: "different intermediate steps in the reaction",
      d: "initial and final enthalpy of the reaction",
      correct: "c",
      topic: "Enthalpy Change in Reactions",
      difficulty: "Medium",
    },
    {
        question: "The standard state of a substance is considered when the temperature is 298 k and the pressure is ____________",
        a: "1 ATM",
        b: "1 bar",
        c: "1 Pascal",
        d: "760 mm HG",
        correct: "b",
        topic: "Standard Conditions",
        difficulty: "Hard",
      },
      {
        question: "Reaction is spontaneous if Gibbs free energy is __________",
        a: "greater than zero",
        b: "equal to zero",
        c: "less than zero",
        d: "infinity",
        correct: "c",
        topic: "Gibbs free energy",
        difficulty: "Easy",
      },
      {
        question: " The entropy of the universe is always increasing is ____________",
        a: "zeroth law of thermodynamics",
        b: "first law of thermodynamics",
        c: "second law of thermodynamics",
        d: "third law of thermodynamics",
        correct: "c",
        topic: "Second law of Thermodynamics",
        difficulty: "Medium",
      },
      {
        question: "According to the Zeroth Law of Thermodynamics, which of the following statements is correct?",
        a: " If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.",
        b: "Energy can be neither created nor destroyed.",
        c: "The total energy of an isolated system is constant.",
        d: "As the temperature of a system approaches absolute zero, the entropy approaches a minimum value.",
        correct: "a",
        topic: "Zeroth Law of Thermodynamics",
        difficulty: "Medium",
      },
      {
        question: "In thermodynamics a process is called reversible when",
        a: "Surroundings and System change into each other",
        b: "There is no boundary between system and surroundings",
        c: "The system changes into surroundings spontaneously",
        d: "The surroundings are always in equilibrium with the system",
        correct: "d",
        topic: "Reversible process",
        difficulty: "Medium",
      },
      {
        question: "Based on the first law of thermodynamics, which one of the following is correct?",
        a: "For an isothermal process, q = +w",
        b: "For an isothermal process, ΔU = -q",
        c: "For an isothermal process, ΔU = -w",
        d: "For a cyclic process, q = -w",
        correct: "d",
        topic: "First law of Thermodynamics",
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