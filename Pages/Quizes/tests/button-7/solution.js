const quizData = [
  {
    question: "What is the formula for the volume of a rectangular prism?",
    a: "V = lwh",
    b: "V = lw",
    c: "V = 2(l + w + h)",
    d: "V = l^2 + w^2 + h^2",
    correct: "a",
    explanation: "The volume of a rectangular prism is calculated by multiplying its length (l), width (w), and height (h), so the correct formula is V = lwh.",
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
    explanation: "The equation of a plane in 3D space is typically represented as ax + by + cz = d, where a, b, c, and d are constants and x, y, and z are variables representing the coordinates in 3D space.",
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
    explanation: "A three-sided polygon that lies in a plane in 3D space is called a triangle.",
    topic: "Basic 3D Geometry",
    difficulty: "Moderate",
  },
  {
    question: "If two vectors are parallel, what can be said about their cross product?",
    a: "It is zero",
    b: "It is undefined",
    c: "It is always negative",
    d: "It is always positive",
    correct: "a",
    explanation: "If two vectors are parallel, their cross product is zero.",
    topic: "Vector Operations",
    difficulty: "Moderate",
  },
  {
    question: "Which of the following is the correct formula for the surface area of a sphere?",
    a: "A = 4πr^2",
    b: "A = πr^2",
    c: "A = 2πrh",
    d: "A = 2πr",
    correct: "a",
    explanation: "The correct formula for the surface area of a sphere is A = 4πr^2, where r is the radius of the sphere.",
    topic: "Surface Area of 3D Shapes",
    difficulty: "Easy",
  },
  {
    question: "What is the relationship between the angle θ and the direction cosines l, m, and n in a direction cosines form of a line equation in 3D space?",
    a: "l^2 + m^2 + n^2 = 1",
    b: "l + m + n = 1",
    c: "l = m = n",
    d: "θ = l + m + n",
    correct: "a",
    explanation: "In the direction cosines form of a line equation in 3D space, the relationship between the angle θ and the direction cosines l, m, and n is given by l^2 + m^2 + n^2 = 1.",
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
    explanation: "If a pyramid has a triangular base, it has 5 vertices.",
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
    explanation: "The point inside a right-angled triangle where the altitude meets the hypotenuse is called the orthocenter.",
    topic: "Right-Angled Triangles in 3D",
    difficulty: "Hard",
  },
  {
    question: "Which of the following is the equation of a cylinder in 3D space?",
    a: "x^2 + y^2 = r^2",
    b: "z = mx + ny",
    c: "V = lwh",
    d: "(x - h)^2 + (y - k)^2 = r^2",
    correct: "a",
    explanation: "The equation of a cylinder in 3D space is x^2 + y^2 = r^2, where r is the radius of the cylinder.",
    topic: "Equations of Surfaces in 3D",
    difficulty: "Easy",
  },
  {
    question: "If a line and a plane are perpendicular, what can be said about the direction vector of the line and the normal vector of the plane?",
    a: "They are parallel",
    b: "They are anti-parallel",
    c: "They are orthogonal",
    d: "They are collinear",
    correct: "c",
    explanation: "If a line and a plane are perpendicular, their direction vector and normal vector are orthogonal to each other.",
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