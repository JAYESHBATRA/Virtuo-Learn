const quizData = [
  {
    question: "An involuntary, automatic response to a stimulus controlled by the spinal cord is a: ",
    a: "Stimulus",
    b: "Reflex",
    c: "Paralysis",
    d: "cerebellum",
    correct: "b",
    explanation: "A reflex is an involuntary and nearly instantaneous movement in response to a stimulus. Reflex actions are controlled by the spinal cord, which allows for a quick reaction to potentially harmful events without the delay of routing signals through the brain.",
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
    explanation: "Neurons are the fundamental units of the brain and nervous system responsible for carrying messages through electrical and chemical signals. They are essential for all of the body's functions, including movement, sensation, and thought.",
    topic: "Nervous system",
    difficulty: "Easy",
  },
  {
    question: "Part of a neuron that receives information from other neurons:",
    a: "Dendrites",
    b: "Axon",
    c: "Synapses",
    d: "All of these",
    correct: "a",
    explanation: "Dendrites are branched extensions of a neuron that receive electrical signals from other neurons. They play a crucial role in the communication between neurons by conducting electrical messages to the cell body.",
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
    explanation: "The spinal cord acts as the main conduit for information traveling between the brain and the rest of the body. It transmits sensory data to the brain and motor commands from the brain to the muscles.",
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
    explanation: "The nervous system is composed of the brain, the spinal cord, and the network of nerves that extend throughout the body. These components work together to process information and control bodily functions.",
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
    explanation: "The spinal cord is a thick bundle of nerve fibers that runs down the center of the back. It is part of the central nervous system and is crucial for transmitting signals between the brain and the rest of the body.",
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
    explanation: "The cerebrum is the largest part of the brain and is responsible for various higher brain functions, including thought, action, and decision-making. It is divided into two hemispheres and contains areas responsible for sensory and motor functions.",
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
    explanation: "The brain stem connects the brain to the spinal cord and controls many basic life functions such as breathing, heart rate, and blood pressure. It acts as a relay center for information passing between the brain and spinal cord.",
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
    explanation: "A stimulus is any change in the environment that can make an organism react. It can be anything from a light touch, sound, smell, or change in temperature, and it is detected by sensory receptors which then initiate a response.",
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
    explanation: "Motor nerves are responsible for transmitting signals from the brain and spinal cord to the muscles, causing them to contract and produce movement. They are essential for all voluntary and some involuntary movements.",
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

const explanationElement = document.getElementById("explanation");

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    difficulty.innerText = currentQuizData.difficulty;

    // Update explanation text
    explanationElement.innerText = currentQuizData.explanation;
};

loadQuiz();

document.getElementById("answer").innerHTML = quizData[0].correct;

let next_Button = document.getElementById("next");
next_Button.addEventListener("click", () => {
  if (currentQuiz == 9) {
    next_Button.disabled = true;
  } else {
    currentQuiz++;
    console.log(currentQuiz);

    next_Button.disabled = false;
    document.getElementById("answer").innerHTML = quizData[currentQuiz].correct;
    loadQuiz();
  }
});