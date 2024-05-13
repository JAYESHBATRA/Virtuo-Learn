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
  const quizcount = document.getElementById("quizcount");
  const prev_score= document.getElementById("max-score");
  const max_wrapper= document.getElementsByClassName("max-wrapper")[0]
const loadScore=()=>{
    const score= localStorage.getItem('btn-5-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-5-max');
    if (score>maxscore){
      localStorage.setItem('btn-5-max',score)
    }
  }

  
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
    if(currentQuiz>=quizData.length){    let link = document.createElement("a");
    link.href="/Pages/Quizes/tests/button-5/solution.html";

      temp = document.createElement('button');
      
      
      temp.className = 'solution-button';
      temp.innerHTML = "Solutions" ;
      link.appendChild(temp);
      document.getElementsByClassName('solution-div')[0].appendChild(link);
    }
  });