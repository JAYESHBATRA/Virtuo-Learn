const quizData = [
    {
      question: "What is the correct order of electron affinity among O, F and Cl ?",
      a: "O < Cl < F",
      b: "O < F < Cl",
      c: "F < O < Cl",
      d: "Cl < O < F",
      correct: "b",
      topic: "Electron Affinity",
      difficulty: "Easy",
    },
    {
      question: "A yellow precipitate is formed upon the addition of aqueous silver nitrate to a solution of ?",
      a: "Orthophosphate",
      b: "Metaphosphate",
      c: "Pyrophosphate",
      d: "Phosphite",
      correct: "a",
      topic: "Group 11",
      difficulty: "Hard",
    },

    {
      question: "How many S-S bonds are there in tetrathionate ion ?",
      a: "2",
      b: "3",
      c: "4",
      d: "5",
      correct: "c",
      topic: "Molecular Structure",
      difficulty: "Hard",
    },
    {
      question: "Which gas is released when ozone reacts with hydrogen sulphide?",
      a: "Sulphur dioxide",
      b: "Sulphur trioxide",
      c: "Oxygen",
      d: "Hydrogen",
      correct: "c",
      topic: "Group 1",
      difficulty: "Medium",
    },
    {
        question: "Boron shows diagonal relation with:",
        a: "Al",
        b: "C",
        c: "Si",
        d: "Sn",
        correct: "c",
        topic: "Diagonal Relationship",
        difficulty: "Easy",
      },
      {
        question: "Catenation property is maximum in",
        a: "phosphorus",
        b: "carbon",
        c: "sulphur",
        d: "zinc",
        correct: "b",
        topic: "Catenation",
        difficulty: "Easy",
      },
      {
        question: "Boron shows diagonal relation with:",
        a: "Al",
        b: "C",
        c: "Si",
        d: "Sn",
        correct: "c",
        topic: "Chemical Composition",
        difficulty: "Medium",
      },
      {
        question: "The number of P-O-P bonds in cyclic metaphosphoric acid is",
        a: "2",
        b: "0",
        c: "3",
        d: "4",
        correct: "c",
        topic: "Chemical Bonding",
        difficulty: "Medium",
      },
      {
        question: "Which oxide of nitrogen is obtained on heating ammonium nitrate at 250°C ?",
        a: "Nitric oxide",
        b: "Nitrous oxide",
        c: "Nitrogen dioxide",
        d: "Dinitrogen tetroxide",
        correct: "b",
        topic: "Nitrogen Oxides",
        difficulty: "Easy",
      },
      {
        question: "The hybridisation of sulphur in sulphur hexafluoride is",
        a: "sp3d",
        b: "sp3d2",
        c: "sp3d3",
        d: "sp3",
        correct: "b",
        topic: "Hybridization",
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
    const score= localStorage.getItem('btn-1-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-1-max');
    if (score>maxscore){
      localStorage.setItem('btn-1-max',score)
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
            var linkArray=['https://youtu.be/22mc0XGLlJg','https://www.youtube.com/live/1DWZFkipYtE?si=BVOGWeUHCj1tnd8L','https://youtu.be/Qn4xTMvMpvk?si=6-4FRjdo8b_oEDes','https://youtu.be/CyY_97Z9P54?si=VyZhmZPsgSH0WTe_','https://youtu.be/d7lVcc5M5Tg?si=MDC3NLt1z-QabYb6','https://youtu.be/dZGDUKQa_6g?si=i4tTFSIxvn4YF8Tk','https://youtu.be/V7BL9HKZYMY?si=J3z7GHvpkFhxKmLr','https://youtu.be/pdJeQUd2g_4?si=0nEre6pGbX-pIVbB','https://youtu.be/Q9-JjyAEqnU?si=S9blYvkBdfxK5O_K','https://youtu.be/-YG11QCiDvM?si=QCCRIF9ufm6fZwZm'];
            var link = document.createElement("a");
            var image = document.createElement("img");
            image.setAttribute("src", "img/" + weak_topics[i] + ".png");
            temp.className = 'thumbnail';
              link.setAttribute("href", linkArray[i]);
            link.appendChild(image);
            document.querySelector(".recommendation-thumbnails").appendChild(link);
          }

        for (i = 0; i < weak_topics.length; i++) {
            if(i===0){
                // this is for weak topics heading
                temp = document.createElement('div');
                temp.className = 'heading';
                temp.innerHTML = "Weak Topics:" ;
                document.getElementsByClassName('weak')[0].appendChild(temp);
            }
            // this is for weak topics
            temp = document.createElement('div');
            temp.className = 'topic';
            temp.innerHTML = weak_topics[i];
            document.getElementsByClassName('weak')[0].appendChild(temp);
            }


      }
    }
    if(currentQuiz>=quizData.length){
      let link = document.createElement("a");
      link.href="/Pages/Quizes/tests/button-1/solutions.html";

        temp = document.createElement('button');
        
        
        temp.className = 'solution-button';
        temp.innerHTML = "Solutions" ;
        link.appendChild(temp);
        document.getElementsByClassName('solution-div')[0].appendChild(link);
    }

  });