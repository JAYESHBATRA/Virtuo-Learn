const quizData = [
    {
      question: "Type of attachement of teeth in humans: ",
      a: "Diphyodont",
      b: "Heterodont",
      c: "Thecodont",
      d: "None",
      correct: "c",
      topic: "Digestive system",
      difficulty: "Easy",
    },
    {
      question: "Vermiform appendix arises from ? ",
      a: "Colon",
      b: "Jejunum",
      c: "Caecum",
      d: "Ileum",
      correct: "c",
      topic: "Digestive system",
      difficulty: "medium",
    },
    {
      question: "Which of the following are the causes of indigestion?",
      a: "Anxiety",
      b: "Food poisoning",
      c: "Over eating",
      d: "All of  these",
      correct: "d",
      topic: "Disorder of digestive system",
      difficulty: "Hard",
    },
    {
      question: "The optimum pH of pepsin is :",
      a: "1.5 - 2.5",
      b: "5.5 - 6.5",
      c: "6.8 - 7.5",
      d: "4.5 - 5.5",
      correct: "a",
      topic: "Digestion of food",
      difficulty: "Medium",
    },
    {
        question: "which part of mammalian alimentary canal does not secrete any enzyme : ",
        a: "Mouth",
        b: "Oesophagus",
        c: "Stomach",
        d: "Duodenum",
        correct: "b",
        topic: "Digestive system",
        difficulty: "Easy",
      },
      {
        question: "Pepsin converts protein into :",
        a: "rennin",
        b: "Proteoses and peptones",
        c: "Amino acids",
        d: "Lipase",
        correct: "b",
        topic: "Digestion of food",
        difficulty: "Easy",
      },
      {
        question: "Kwashiorkar occurs due to: ",
        a: "Protein and Calorie deficiency",
        b: "Protein deficiency",
        c: "Calcium deficiency",
        d: "Fat deficiency",
        correct: "b",
        topic: "Disorder of digestive system",
        difficulty: "Medium",
      },
      {
        question: "The common bile duct in human is formed by the joining of : ",
        a: "Pancreatic duct and bile duct",
        b: "Cystic duct and hepatic duct",
        c: "Cystic duct and pancreatic duct",
        d: "Hepatic duct and pancreatic duct",
        correct: "b",
        topic: "Digestive System",
        difficulty: "Hard",
      },
      {
        question: "Pepsin acts in :",
        a: "Basic medium",
        b: "Acidic medium",
        c: "Neutral medium",
        d: "All types of medium",
        correct: "b",
        topic: "Digestion of food",
        difficulty: "Medium",
      },
      {
        question: "Carrier ions like Na+ facilitate the absorption of substances like:",
        a: "Amino acids and glucose",
        b: "Glucose and fatty acids",
        c: "Fatty acid and glycerol",
        d: "Fructose and some amino acids",
        correct: "a",
        topic: "Absorption of digestive products",
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
    const score= localStorage.getItem('btn-10-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-10-max');
    if (score>maxscore){
      localStorage.setItem('btn-10-max',score)
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
      link.href="/Pages/Quizes/tests/button-10/solution.html";

        temp = document.createElement('button');
        
        
        temp.className = 'solution-button';
        temp.innerHTML = "Solutions" ;
        link.appendChild(temp);
        document.getElementsByClassName('solution-div')[0].appendChild(link);
    }
  });