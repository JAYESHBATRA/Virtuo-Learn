const quizData = [
  {
    question: "An involuntary, automatic response to a stimulus controlled by the spinal cord is a: ",
    a: "Stimulus",
    b: "Reflex",
    c: "Paralysis",
    d: "cerebellum",
    correct: "b",
    topic: "Nervous system",
    difficulty: "Easy",
  },
  {
    question: "Nerve cells are called: ",
    a: "Synapses",
    b: "cerebrums",
    c: "dendrites",
    d: "neurons",
    correct: "d",
    topic: "Nervous system",
    difficulty: "Easy",
  },
  {
    question: "part of a neuron that receives information from other neurons:",
    a: "Dendrites",
    b: "Axon",
    c: "Synapses",
    d: "All of these",
    correct: "a",
    topic: "Nervous system",
    difficulty: "Medium",
  },
  {
    question: "What is the job of the spinal cord?",
    a: "To protect your muscles",
    b: "To communicate from your brain to the rest of your body",
    c: "To open and close your lungs.",
    d: "None of these",
    correct: "b",
    topic: "Spinal Cord",
    difficulty: "Easy",
  },
  {
      question: "What are the three (3) main parts of the nervous system?",
      a: "cerebellum, cerebrum, medulla",
      b: "cochlea, nerves, vestibule",
      c: "brain, spinal cord, nerves",
      d: "brain, cochlea, nerves",
      correct: "c",
      topic: "Nervous system",
      difficulty: "Easy",
    },
    {
      question: "The thick cord of nerve tissue in the center of the backbone is the",
      a: "brain stem",
      b: "neuron",
      c: "dendrite",
      d: "spinal Cord",
      correct: "d",
      topic: "Spinal cord",
      difficulty: "Easy",
    },
    {
      question: "The largest part of the brain where thinking takes place is the",
      a: "cerebellum",
      b: "cerebrum",
      c: "brain stem",
      d: "cordial stem",
      correct: "b",
      topic: "Brain",
      difficulty: "Medium",
    },
    {
      question: "The ____ connects the brain to the spinal cord.",
      a: "cerebrum",
      b: "cortex",
      c: "synapse",
      d: "brain stem",
      correct: "d",
      topic: "Spinal cord",
      difficulty: "Medium",
    },
    {
      question: "Any change inside or outside your body that causes a response is a ____.",
      a: "axons",
      b: "stimulus",
      c: "reflex",
      d: "neurons",
      correct: "b",
      topic: "Nervous system",
      difficulty: "Medium",
    },
    {
      question: "Nerves that cause muscles to move are ____.",
      a: "axon nerves",
      b: "motor nerves",
      c: "sensory nerves",
      d: "feeling nerves",
      correct: "b",
      topic: "Nervous system",
      difficulty: "Medium",
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
    link.href="/Pages/Quizes/tests/button-11/solution.html";

      temp = document.createElement('button');
      
      
      temp.className = 'solution-button';
      temp.innerHTML = "Solutions" ;
      link.appendChild(temp);
      document.getElementsByClassName('solution-div')[0].appendChild(link);
  }
});