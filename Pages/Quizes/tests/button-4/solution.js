const quizData = [
    {
      question: "What causes the motion of a body which is initially in the state of rest?",
      a: "Force",
      b: "Displacement",
      c: "Speed",
      d: "Velocity",
      correct: "a",
      topic: "First Law of Motion",
      difficulty: "Easy",
    },
    {
      question: "Passengers sitting in a stationary car experience a jerk when the car suddenly starts. This is due to _____",
      a: "Inertia of Motion",
      b: "Inertia of rest",
      c: "Inertia of turning",
      d: "Inertia of acceleration",
      correct: "b",
      topic: "Inertia",
      difficulty: "Medium",
    },
    {
      question: "Which of the following have always the same direction?",
      a: "Force and acceleration",
      b: "Force and momentum",
      c: "Force and velocity",
      d: "None of these",
      correct: "a",
      topic: "Force and Directions",
      difficulty: "Easy",
    },
    {
      question: "Two bodies moving with constant velocities collide with each other. Which of the following quantities remain conserved?",
      a: "Momentum",
      b: "Speed",
      c: "Force",
      d: "Velocity",
      correct: "a",
      topic: "Conservation of Momentum",
      difficulty: "Medium",
    },
    {
        question: "A truck with a mass of 2500 Kg traveling with an acceleration of 5 m/s2 hits a scooter. What force does the truck experience?",
        a: "12500 N",
        b: "500 N",
        c: "10000 N",
        d: "2500 N",
        correct: "a",
        topic: "Third Law of Motion",
        difficulty: "Hard",
      },
      {
        question: "Unit of force is _____",
        a: "Pascal",
        b: "Newton",
        c: "Byte",
        d: "Gram",
        correct: "b",
        topic: "Force",
        difficulty: "Easy",
      },
      {
        question: "Two forces are acting on a body. For the body to remain in equilibrium, the forces have to be ____",
        a: "Equal in magnitude and opposite in direction",
        b: "Equal in direction and opposite in magnitude",
        c: "In the same direction",
        d: "In perpendicular directions",
        correct: "a",
        topic: "Equilibrium",
        difficulty: "Medium",
      },
      {
        question: "What does Newton's second law of motion state?",
        a: "An object at rest will remain at rest unless acted upon by an external force.",
        b: "The net force acting on an object is equal to the product of its mass and acceleration.",
        c: "For every action, there is an equal and opposite reaction.",
        d: "The velocity of an object remains constant if the net force acting on it is zero.",
        correct: "b",
        topic: "Second Law of Motion",
        difficulty: "Medium",
      },
      {
        question: "Change in momentum of an object is equal to the_______",
        a: "Internal Energy",
        b: "Entropy",
        c: "Impulse",
        d: "Enthalpy",
        correct: "c",
        topic: "Impulse",
        difficulty: "Medium",
      },
      {
        question: "What is a frame of reference?",
        a: "The speed of an object",
        b: "The position of an object",
        c: "The background against which motion is measured",
        d: "The force applied to an object",
        correct: "c",
        topic: "Frame Of Reference",
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