const quizData = [
    {
      question: "What is the formula for the volume of a rectangular prism?",
      a: "V = lwh",
      b: "V = lw",
      c: " V = 2(l + w + h)",
      d: "V = l^2 + w^2 + h^2",
      correct: "a",
      topic: "Volume of 3D Shapes",
      difficulty: "Easy",
    },
    {
      question: "Which of the following is the equation of a plane in 3D space?",
      a: "ax + by + cz = d",
      b: "y = mx + b",
      c: "x^2 + y^2 = r^2",
      d: "z = mx + ny + p",
      correct: "a",
      topic: "Equations of Planes in 3D Space",
      difficulty: "Moderate",
    },

    {
      question: "What is the name of a three-sided polygon that lies in a plane in 3D space?",
      a: "Triangle",
      b: "Quadrilateral",
      c: "Pentagon",
      d: "Hexagon",
      correct: "a",
      topic: "Basic 3D Geometry",
      difficulty: "Moderate",
    },
    {
      question: "If two vectors are parallel, what can be said about their cross product?",
      a: "It is zero",
      b: "It is undedefined",
      c: "It is always negative",
      d: "It is always positive",
      correct: "a",
      topic: "Vector Operations",
      difficulty: "Moderate",
    },
    {
        question: "Which of the following is the correct formula for the surface area of a sphere?",
        a: " A = 4πr^2",
        b: "A = πr^2",
        c: "A = 2πrh",
        d: "A = 2πr",
        correct: "a",
        topic: "Surface Area of 3D Shapes",
        difficulty: "Easy",
      },
      {
        question: "What is the relationship between the angle θ and the direction cosines l, m, and n in a direction cosines form of a line equation in 3D space?",
        a: "l^2 + m^2 + n^2 = 1",
        b: " l + m + n = 1",
        c: " l = m = n",
        d: "θ = l + m + n",
        correct: "a",
        topic: "Lines in 3D Space",
        difficulty: "Moderate",
      },
      {
        question: "If a pyramid has a triangular base, how many vertices does it have?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "c",
        topic: "3D Shapes",
        difficulty: "Easy",
      },
      {
        question: "What is the term for the point inside a right-angled triangle where the altitude meets the hypotenuse?",
        a: "Orthocenter",
        b: "Centroid",
        c: "Incenter",
        d: "Circumcenter",
        correct: "a",
        topic: "Right-Angled Triangles in 3D",
        difficulty: "Hard",
      },
      {
        question: "Which of the following is the equation of a cylinder in 3D space?",
        a: " x^2 + y^2 = r^2",
        b: "z = mx + ny",
        c: "V = lwh",
        d: " (x - h)^2 + (y - k)^2 = r^2",
        correct: "a",
        topic: "Equations of Surfaces in 3D",
        difficulty: "Easy",
      },
      {
        question: "If a line and a plane are perpendicular, what can be said about the direction vector of the line and the normal vector of the plane?",
        a: "They are parallel",
        b: "They are anti parallel",
        c: "They are orthogonal",
        d: "They are collinear",
        correct: "c",
        topic: "Lines and Planes in 3D",
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
    const score= localStorage.getItem('btn-7-max');
   if(score){
    prev_score.innerHTML=`Max score <br>${score}`;
   }else{
    max_wrapper.style.display='none'
   }
    
  }
  const storeMax=(score)=>{
    const maxscore = localStorage.getItem('btn-7-max');
    if (score>maxscore){
      localStorage.setItem('btn-7-max',score)
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
        link.href="/Pages/Quizes/tests/button-7/solution.html";
  
          temp = document.createElement('button');
          
          
          temp.className = 'solution-button';
          temp.innerHTML = "Solutions" ;
          link.appendChild(temp);
          document.getElementsByClassName('solution-div')[0].appendChild(link);
      }
  
    });