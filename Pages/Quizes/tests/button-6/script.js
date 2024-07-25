const quizData = [
    {
      question: "How many electrons does a neutral nitrogen atom have?",
      a: "5",
      b: "6",
      c: "7",
      d: "8",
      correct: "c",
      topic: "Atom",
      difficulty: "Easy",
    },
    {
      question: "Which group in the periodic table contains noble gases?",
      a: "Group 1",
      b: "Group 2",
      c: "Group 17",
      d: "Group 18",
      correct: "d",
      topic: "Noble Gases",
      difficulty: "Easy",
    },

    {
      question: " What is the main energy level (shell) for the outermost electrons in Group 16 elements?",
      a: "n=1",
      b: "n=2",
      c: "n=3",
      d: "n=4",
      correct: "d",
      topic: "Periodic Table",
      difficulty: "Medium",
    },
    {
      question: " Which element is at the center of a molecule with a trigonal bipyramidal molecular geometry?",
      a: "Carbon",
      b: "Nitrogen",
      c: "Phosphorus",
      d: "Sulphur",
      correct: "c",
      topic: "Periodic Table",
      difficulty: "Hard",
    },
    {
        question: "What is the charge of a chloride ion (Cl-)?",
        a: "-1",
        b: "+1",
        c: "0",
        d: "-2",
        correct: "a",
        topic: "Halogens",
        difficulty: "Easy",
      },
      {
        question: "What is the common oxidation state of oxygen in compounds?",
        a: "-1",
        b: "0",
        c: "+1",
        d: "-2",
        correct: "d",
        topic: "Group 16",
        difficulty: "Medium",
      },
      {
        question: "Which of the following elements has the highest atomic radius?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon",
        d: "Fluorine",
        correct: "c",
        topic: "Group 14",
        difficulty: "Hard",
      },
      {
        question: "What is the trend of atomic radius as you move from left to right across a period in the periodic table?",
        a: "Increases",
        b: "Decreases",
        c: "Remains Constant",
        d: "No Pattern",
        correct: "b",
        topic: "Atoms",
        difficulty: "Medium",
      },
      {
        question: "Which ion is isoelectronic with argon?",
        a: "Cl-",
        b: "K+",
        c: "Ca2+",
        d: "S2-",
        correct: "c",
        topic: "Inert Elements",
        difficulty: "Hard",
      },
      {
        question: "In which period is the element chlorine located?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
        topic: "Periodic Table",
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
  const quizcount = document.getElementById("quizcount");
  const prev_score= document.getElementById("max-score");
  const max_wrapper= document.getElementsByClassName("max-wrapper")[0]
const loadScore=()=>{
    const score= localStorage.getItem('btn-6-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-6-max');
    if (score>maxscore){
      localStorage.setItem('btn-6-max',score)
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
      link.href="/Pages/Quizes/tests/button-6/solution.html";

        temp = document.createElement('button');
        
        
        temp.className = 'solution-button';
        temp.innerHTML = "Solutions" ;
        link.appendChild(temp);
        document.getElementsByClassName('solution-div')[0].appendChild(link);
    }

  })