const quizData = [
    {
      question: "Which bond is formed between two nonmetals?",
      a: "Ionic",
      b: "Covalent",
      c: "Metallic",
      d: "Polar",
      correct: "b",
      topic: "Types of Bonds",
      difficulty: "Easy",
    },
    {
      question: "Which type of bond is characterized by unequal sharing of electrons?",
      a: "Ionic",
      b: "Covalent",
      c: "Polar Covalent",
      d: "Metallic",
      correct: "c",
      topic: "Types of Bonds",
      difficulty: "Medium",
    },

    {
      question: "What is the bond angle in a molecule with a trigonal bipyramidal electron geometry?",
      a: "90°",
      b: "109.5°",
      c: " 120°",
      d: "180°",
      correct: "c",
      topic: "Molecular Geometry",
      difficulty: "Hard",
    },
    {
      question: " What is the VSEPR theory used to predict?",
      a: "Molecular Geometry",
      b: "Electron Configuration",
      c: "Hybridization",
      d: "Ionization Energy",
      correct: "a",
      topic: "VSEPR Theory",
      difficulty: "Medium",
    },
    {
        question: "What is the electron configuration of oxygen?",
        a: " 1s² 2s² 2p⁴",
        b: " 1s² 2s² 2p²",
        c: " 1s² 2s¹",
        d: "1s² 2s² 2p⁶",
        correct: "a",
        topic: "Atomic Structure",
        difficulty: "Easy",
      },
      {
        question: "Explain the concept of resonance in chemical bonding.",
        a: "The transfer of electrons between atoms",
        b: "The average of multiple Lewis structures",
        c: "The formation of ionic bonds",
        d: "The sharing of electrons in covalent bonds",
        correct: "b",
        topic: "Resonance",
        difficulty: "Hard",
      },
      {
        question: "What is the relationship between bond length and bond strength?",
        a: " Inversely proportional",
        b: " Directly proportional",
        c: "CarbNo relationshipon",
        d: "Depends on the atoms involved",
        correct: "a",
        topic: "Bond Length and Strength",
        difficulty: "Hard",
      },
      {
        question: "What is the charge of a chloride ion?",
        a: "+1",
        b: "-1",
        c: "0",
        d: "+2",
        correct: "b",
        topic: " Ionic Bonds",
        difficulty: "Easy",
      },
      {
        question: "What is the significance of the term 'sp³d²' in hybridization?",
        a: "Number of lone pairs",
        b: " Number of sigma bonds",
        c: "Number of pi bonds",
        d: "Number of orbitals involved in hybridization",
        correct: "d",
        topic: "Hybridization",
        difficulty: "Hard",
      },
      {
        question: "What is the formal charge on the nitrogen atom in the ammonium ion (NH₄⁺)?",
        a: "-1",
        b: "0",
        c: "+1",
        d: "+2",
        correct: "c",
        topic: "Formal Charge",
        difficulty: "Medium",
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