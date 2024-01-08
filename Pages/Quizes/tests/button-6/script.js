const quizData = [
    {
      question: " In which part of the respiratory system, gaseous exchange takes place?",
      a: "Pharynx",
      b: "Larynx",
      c: "Trachea",
      d: "Alveoli",
      correct: "d",
      topic: "Alveoli",
      difficulty: "Easy",
    },
    {
      question: " ___________ is located between two pleural sacs and is the central compartment of the thoracic cavity?",
      a: " Hilum",
      b: "Pleura",
      c: "Mediastinum",
      d: "Thoracic cage",
      correct: "c",
      topic: "Mediastinum",
      difficulty: "Medium",
    },
    {
      question: "Which of the following statements is true about involuntary breathing?",
      a: "It is controlled by the bronchioles",
      b: "It is controlled by the pulmonary arterioles",
      c: "It is controlled by the alveolar-capillary network",
      d: "It is controlled by the neurons, located in the medulla and pons",
      correct: "d",
      topic: "It is controlled by the neurons, located in the medulla and pons",
      difficulty: "Easy",
    },
    {
      question: "Which of the following are parts of the human respiratory system?",
      a: "Trachea",
      b: "Diaphragm",
      c: "The lungs",
      d: "All of the above",
      correct: "d",
      topic: "All of the above",
      difficulty: "Medium",
    },
    {
        question: "Which of the following gas is released out during the process of respiration?",
        a: "Oxygen",
        b: "Hydrogen",
        c: "Carbon dioxide",
        d: "none of the above",
        correct: "c",
        topic: "carbon dioxide",
        difficulty: "Hard",
      },
      {
        question: "Which of the following functions by filtering and keeping the mucus and dirt away from our lungs?",
        a: "Cilia",
        b: "Bronchioles",
        c: "Hairs in the lungs",
        d: " All of the above",
        correct: "a",
        topic: "Cilia",
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