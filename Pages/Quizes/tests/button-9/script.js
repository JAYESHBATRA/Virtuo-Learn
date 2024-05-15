const quizData = [
    {
      question: "What is the common ratio of the geometric sequence 3, 6, 12, 24, ...?",
      a: "3",
      b: "2",
      c: "4",
      d: "6",
      correct: "b",
      topic: "Geometric Progression",
      difficulty: "Easy",
    },
    {
      question: "The product of three consecutive terms in an arithmetic series is 2310. If the common difference is 5, find the terms.",
      a: "10, 15, 20",
      b: "7, 12, 17",
      c: "5, 10, 15",
      d: "8, 13, 18",
      correct: "b",
      topic: "Arithmetic Series",
      difficulty: "Medium",
    },

    {
      question: "If the sum of an infinite geometric series is 12 and the common ratio is 1/3 31, find the first term. ",
      a: "9",
      b: "6",
      c: "12",
      d: "3",
      correct: "a",
      topic: "Geometric Series",
      difficulty: "Hard",
    },
    {
      question: "If a + b + c = 15 and ab + bc + ca = 50, find the value of abc in the arithmetic progression.",
      a: "40",
      b: "45",
      c: "50",
      d: "55",
      correct: "a",
      topic: "Arithmatic Progression",
      difficulty: "Hard",
    },
    {
        question: "Determine the sum of the first 20 terms of the series: 4 + 8 + 12 + … + 80.",
        a: "820",
        b: "800",
        c: "810",
        d: "830",
        correct: "c",
        topic: "Sequence",
        difficulty: "Easy",
      },
      {
        question: "If the sum of an arithmetic series is 75, the first term is 3, and the common difference is 5, how many terms are there?",
        a: "12",
        b: " 15",
        c: " 10",
        d: "18",
        correct: "a",
        topic: "Arithmetic series",
        difficulty: "Medium",
      },
      {
        question: "If the sum of the first n terms of an arithmetic series is given by 𝑆𝑛 = 2𝑛^2 + 5𝑛 , find the first term.",
        a: "2",
        b: "5",
        c: "3",
        d: "4",
        correct: "c",
        topic: "Arithmatic series",
        difficulty: "Medium",
      },
      {
        question: "Find the sum of the series 1 + 2/3 + 3/9 + 4/27+ … up to infinity.",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
        topic: "Series",
        difficulty: "Hard",
      },
      {
        question: "The sum of the first n terms of an arithmetic series is given by 𝑆𝑛 = 2𝑛^2 + 3𝑛 . Find the common difference.",
        a: "2",
        b: "3",
        c: "5",
        d: "4",
        correct: "b",
        topic: "Arithmatic series",
        difficulty: "Medium",
      },
      {
        question: "Evaluate the product of the first 8 terms in the geometric sequence: 2, 4, 8, 16, ...",
        a: "16384",
        b: "4096",
        c: "8192",
        d: "2048",
        correct: "b",
        topic: "Geometric sequence",
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
    const score= localStorage.getItem('btn-9-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-9-max');
    if (score>maxscore){
      localStorage.setItem('btn-9-max',score)
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
          temp = document.createElement('button');
          temp.className = 'solution-button';
          temp.innerHTML = "Solutions" ;
          document.getElementsByClassName('solution-div')[0].appendChild(temp);
      }
        document.querySelector('.solution-button').addEventListener("click",()=>{
          window.location.href = "solution.html";
        })
    });