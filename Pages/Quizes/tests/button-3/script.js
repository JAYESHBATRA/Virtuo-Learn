const quizData = [
    {
      question: "The primary function of respiration in plants is to:",
      a: "Produce energy",
      b: "Release oxygen",
      c: "Produce glucose",
      d: "Release carbon dioxide",
      correct: "a",
      topic: "Energy Production",
      difficulty: "Easy",
    },
    {
      question: "Which organelle is responsible for respiration in plant cells ?",
      a: "Mitochondria",
      b: "Chloroplasts",
      c: "Nucleus",
      d: "Endoplasmic reticulum",
      correct: "a",
      topic: "Mitochondria",
      difficulty: "Hard",
    },
    {
      question: "The process of respiration in plants occurs in :",
      a: "Day only",
      b: "Night only",
      c: "Both day and night",
      d: "None of the above",
      correct: "c",
      topic: "Duration of respiration",
      difficulty: "Hard",
    },
    {
      question: "Which of the following is not a stage of respiration in plants ?",
      a: "Glycolysis",
      b: "Krebs cycle",
      c: "Electron transport chain",
      d: "Transpiration",
      correct: "d",
      topic: "Transpiration",
      difficulty: "Medium",
    },
    {
        question: "In which part of the plant does respiration primarily occur ?",
        a: "Leaves",
        b: "Stem",
        c: "Roots",
        d: "Flowers",
        correct: "a",
        topic: "Respiration Parts",
        difficulty: "Easy",
      },
      {
        question: "The final product of respiration in plants is :",
        a: "Water",
        b: "Glucose",
        c: "Oxygen",
        d: "Carbon dioxide",
        correct: "d",
        topic: "Product of Respiration",
        difficulty: "Easy",
      },
      {
        question: "The breakdown of glucose in respiration results in the production of:",
        a: "Energy and carbon dioxide",
        b: "Energy and oxygen",
        c: "Water and carbon dioxide",
        d: "Water and oxygen",
        correct: "a",
        topic: "Breakdown",
        difficulty: "Medium",
      },
      {
        question: "The process of photosynthesis in plants is the opposite of:",
        a: "Respiration",
        b: "Transpiration",
        c: "Fertilization",
        d: "Pollination",
        correct: "a",
        topic: "Photosynthesis",
        difficulty: "Medium",
      },
      {
        question: "Which of the following is not a type of respiration in plants ?",
        a: "Aerobic respiration",
        b: "Anaerobic respiration",
        c: "Photosynthetic respiration",
        d: "Fermentation",
        correct: "d",
        topic: "Type of Respiration",
        difficulty: "Easy",
      },
      {
        question: "The energy produced by respiration in plants is used for:",
        a: "Growth and development",
        b: "Reproduction",
        c: "Defense against predators",
        d: "All of the above",
        correct: "d",
        topic: "Energy",
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
  const quizcount = document.getElementById("quizcount");
  const prev_score= document.getElementById("max-score");
  const max_wrapper= document.getElementsByClassName("max-wrapper")[0]

  
  let currentQuiz = 0;
  let score = 0;
  const weak_topics=[];
  const loadScore=()=>{
    const score= localStorage.getItem('btn-3-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-3-max');
    if (score>maxscore){
      localStorage.setItem('btn-3-max',score)
    }
  }
  
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
    quizcount.innerText = currentQuiz+1+"/"+quizData.length;
  };
  
  loadQuiz();
  loadScore();
  
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
        storeMax(score);
        loadScore();
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
      let link = document.createElement("a");
      link.href="/Pages/Quizes/tests/button-3/solution.html";

        temp = document.createElement('button');
        
        
        temp.className = 'solution-button';
        temp.innerHTML = "Solutions" ;
        link.appendChild(temp);
        document.getElementsByClassName('solution-div')[0].appendChild(link);
    }
  });