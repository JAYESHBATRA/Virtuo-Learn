const quizData = [
    {
      question: "Displacement is a",
      a: "Scalar quantity",
      b: "Vector quantity",
      c: "Base quantity",
      d: "Derived quantity",
      correct: "b",
      topic: "Displacement",
      difficulty: "Easy",
    },
    {
      question: "Adding of two vectors to get a single vector is termed as",
      a: "Final vector",
      b: "Resultant vector",
      c: "Dominant vector",
      d: "Recessive vector",
      correct: "b",
      topic: "Addition of vectors",
      difficulty: "Hard",
    },
    {
      question: "MCQ: In scalar, there is only addition and subtraction of",
      a: "Number",
      b: "Number according to direction",
      c: "Number according to unit",
      d: "B and C both",
      correct: "a",
      topic: "Addition of scalars",
      difficulty: "Hard",
    },
    {
      question: "Volume is a",
      a: "Scalar quantity",
      b: "Vector quantity",
      c: "Base quantity",
      d: "Derived quantity",
      correct: "a",
      topic: "Volume",
      difficulty: "Medium",
    },
    {
        question: "If two forces of 20 N towards north and 12 N towards south are acting on an object. The resultant force will be",
        a: "32 N toward north",
        b: "20 N towards north",
        c: "32 N towards south",
        d: "8 N towards north",
        correct: "d",
        topic: "Resultant Vector",
        difficulty: "Easy",
      },
      {
        question: "What is the minimum number of unequal forces whose resultant will be zero ?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
        topic: "Unequal Vector",
        difficulty: "Easy",
      },
      {
        question: "A body travelling in a circular path at uniform speed has :",
        a: "Constant velocity",
        b: "Tangential acceleration",
        c: "Inward acceleration",
        d: "Outward acceleration",
        correct: "c",
        topic: "Inward acceleration",
        difficulty: "Medium",
      },
      {
        question: "When a disc containing mercury and water is rotated rapidly about a vertical axis, then the outermost place in the disc will be taken by:",
        a: "Water",
        b: "Mercury",
        c: "Sometimes water and sometimes mercury",
        d: "None of these",
        correct: "b",
        topic: "Density",
        difficulty: "Medium",
      },
      {
        question: "Two bullets are fired simultaneously horizontally and with different speeds from the same place. Which bullet will hit the ground first ?",
        a: "The slower one",
        b: "The faster one",
        c: "Both will reach simultaneously",
        d: "Both will reach simultaneously",
        correct: "c",
        topic: "Conservation of energy",
        difficulty: "Easy",
      },
      {
        question: "A particle is acted upon by a force of constant magnitude, which is always perpendicular to the velocity of the particle. The motion of the particle takes place in a plane. It follows that:",
        a: "Its velocity is constant",
        b: "Its acceleration is constant",
        c: "Its kinetic energy is constant",
        d: "It moves in a circular path",
        correct: "c",
        topic: "Circular Motion",
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