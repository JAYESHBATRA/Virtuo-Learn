const quizData = [
  {
    question: "Which bond is formed between two nonmetals?",
    a: "Ionic",
    b: "Covalent",
    c: "Metallic",
    d: "Polar",
    correct: "b",
    explanation: "A covalent bond is formed between two nonmetals. In a covalent bond, atoms share electrons to achieve a stable electron configuration.",
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
    explanation: "A polar covalent bond is characterized by unequal sharing of electrons between atoms. This occurs when one atom has a higher electronegativity than the other, resulting in an uneven distribution of electron density.",
    topic: "Types of Bonds",
    difficulty: "Medium",
  },
  {
    question: "What is the bond angle in a molecule with a trigonal bipyramidal electron geometry?",
    a: "90°",
    b: "109.5°",
    c: "120°",
    d: "180°",
    correct: "c",
    explanation: "The bond angle in a molecule with a trigonal bipyramidal electron geometry is 120°. This geometry occurs when a central atom is bonded to five other atoms or groups, resulting in a trigonal bipyramidal arrangement.",
    topic: "Molecular Geometry",
    difficulty: "Hard",
  },
  {
    question: "What is the VSEPR theory used to predict?",
    a: "Molecular Geometry",
    b: "Electron Configuration",
    c: "Hybridization",
    d: "Ionization Energy",
    correct: "a",
    explanation: "The VSEPR (Valence Shell Electron Pair Repulsion) theory is used to predict the molecular geometry of molecules. It is based on the idea that electron pairs in the valence shell of an atom repel each other and will arrange themselves to minimize repulsion.",
    topic: "VSEPR Theory",
    difficulty: "Medium",
  },
  {
    question: "What is the electron configuration of oxygen?",
    a: "1s² 2s² 2p⁴",
    b: "1s² 2s² 2p²",
    c: "1s² 2s¹",
    d: "1s² 2s² 2p⁶",
    correct: "a",
    explanation: "The electron configuration of oxygen is 1s² 2s² 2p⁴. This means that oxygen has 8 electrons, with 2 in the first energy level (1s²) and 6 in the second energy level (2s² 2p⁴).",
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
    explanation: "Resonance in chemical bonding refers to the concept that multiple Lewis structures can be drawn for a molecule or ion, where the actual structure is an average or combination of these resonance structures.",
    topic: "Resonance",
    difficulty: "Hard",
  },
  {
    question: "What is the relationship between bond length and bond strength?",
    a: "Inversely proportional",
    b: "Directly proportional",
    c: "No relationship",
    d: "Depends on the atoms involved",
    correct: "a",
    explanation: "The relationship between bond length and bond strength is inversely proportional. Generally, shorter bonds are stronger because the nuclei of the bonded atoms are closer together, resulting in stronger electrostatic forces of attraction between them.",
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
    explanation: "The charge of a chloride ion is -1. This ion is formed when a chlorine atom gains one electron to achieve a stable electron configuration.",
    topic: "Ionic Bonds",
    difficulty: "Easy",
  },
  {
    question: "What is the significance of the term 'sp³d²' in hybridization?",
    a: "Number of lone pairs",
    b: "Number of sigma bonds",
    c: "Number of pi bonds",
    d: "Number of orbitals involved in hybridization",
    correct: "d",
    explanation: "The term 'sp³d²' in hybridization indicates the number of orbitals involved in hybridization. In this case, there are 6 hybridized orbitals formed from the combination of one s orbital, three p orbitals, and two d orbitals.",
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
    explanation: "The formal charge on the nitrogen atom in the ammonium ion (NH₄⁺) is +1. To calculate the formal charge, you subtract the number of non-bonding electrons and half the number of bonding electrons from the total valence electrons of the atom.",
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