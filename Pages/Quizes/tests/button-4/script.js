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
      topic: "Inertia and Newton's First Law of Motion",
      difficulty: "Medium",
    },
    {
      question: "Which of the following have always the same direction?",
      a: "Force and acceleration",
      b: "Force and momentum",
      c: "Force and velocity",
      d: "None of these",
      correct: "a",
      topic: "Basic concepts",
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
        topic: "Basic concepts",
        difficulty: "Easy",
      },
      {
        question: "Two forces are acting on a body. For the body to remain in equilibrium, the forces have to be ____",
        a: "Equal in magnitude and opposite in direction",
        b: "Equal in direction and opposite in magnitude",
        c: "In the same direction",
        d: "In perpendicular directions",
        correct: "a",
        topic: "Equilibrium of a Particle",
        difficulty: "Medium",
      },
      {
        question: "A cannon after firing recoils due to",
        a: "conservation of energy",
        b: "backward thrust of gases produced",
        c: "Newton’s third law of motion",
        d: "Newton’s first law of motion",
        correct: "c",
        topic: "Third Law of Motion",
        difficulty: "Medium",
      },
      {
        question: "A jet engine works on the principle of",
        a: "conservation of mass",
        b: "conservation of energy",
        c: "conservation of linear momentum",
        d: "conservation of angular momentum",
        correct: "c",
        topic: "Conservation of Momentum",
        difficulty: "Medium",
      },
      {
        question: "Inertia is the property of a body linked to tendency of a body",
        a: "to change its position",
        b: "to change its direction",
        c: "to change the momentum",
        d: "to resist any change in its state",
        correct: "d",
        topic: "Inertia and Newton's First Law of Motion",
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
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
        currentQuiz++;
      }
      else{
        weak_topics.push(quizData[currentQuiz].topic);
        currentQuiz++;
      }
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `
        var temp;
        for (i = 0; i < weak_topics.length; i++) {
          if(i===0){
            // this is for recommended videos heading
            temp = document.createElement('h3');
            temp.className = 'Recommended-Videos-Title';
            temp.innerHTML = "Recommended Videos ";
            document.getElementsByClassName('recommendations')[0].appendChild(temp);
          }
            // this is for recommended videos
            var image = document.createElement("img");
            image.setAttribute("src", "img/" + weak_topics[i] + ".png");
            temp.className = 'thumbnail';
            document.querySelector(".recommendation-thumbnails").appendChild(image);
          }
          
        for (i = 0; i < weak_topics.length; i++) {
            if(i===0){
                temp = document.createElement('div');
                temp.className = 'heading';
                temp.innerHTML = "Weak Topics:" ;
                document.getElementsByClassName('weak')[0].appendChild(temp);
            }
            temp = document.createElement('div');
            temp.className = 'topic';
            temp.innerHTML = weak_topics[i];
            document.getElementsByClassName('weak')[0].appendChild(temp);
            }
      }
    }
    if(currentQuiz>=quizData.length){
        temp = document.createElement('button');
        temp.className = 'solution-button';
        temp.innerHTML = "Solutions" ;
        document.getElementsByClassName('solution-div')[0].appendChild(temp);
    }
  });