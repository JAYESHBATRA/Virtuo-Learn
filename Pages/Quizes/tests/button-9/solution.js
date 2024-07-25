const quizData = [
    {
      question: "What is the common ratio of the geometric sequence 3, 6, 12, 24, ...?",
      a: "3",
      b: "2",
      c: "4",
      d: "6",
      correct: "b",
      explanation: "In a geometric sequence, each term is obtained by multiplying the previous term by a constant factor called the common ratio. In this sequence, each term is obtained by multiplying the previous term by 2, so the common ratio is 2.",
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
      explanation: "Let the terms be (x - 5), x, (x + 5). The product of these terms is (x - 5) * x * (x + 5) = 2310. Solving this equation gives x = 12. So, the terms are 7, 12, and 17.",
      topic: "Arithmetic Series",
      difficulty: "Medium",
    },
    {
      question: "If the sum of an infinite geometric series is 12 and the common ratio is 1/3, find the first term.",
      a: "9",
      b: "6",
      c: "12",
      d: "3",
      correct: "a",
      explanation: "The sum of an infinite geometric series is given by S = a / (1 - r), where 'a' is the first term and 'r' is the common ratio. Given S = 12 and r = 1/3, we can solve for 'a' to find the first term.",
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
      explanation: "Using Vieta's formulas, we know that abc equals the constant term in the quadratic equation whose roots are a, b, and c. Given the sum and product of roots, we can form the equation x^3 - 15x^2 + 50x - abc = 0.",
      topic: "Arithmetic Progression",
      difficulty: "Hard",
    },
    {
      question: "Determine the sum of the first 20 terms of the series: 4 + 8 + 12 + … + 80.",
      a: "820",
      b: "800",
      c: "810",
      d: "830",
      correct: "c",
      explanation: "This is an arithmetic sequence with a common difference of 4. We can use the formula for the sum of an arithmetic series to find the sum: S = (n/2)(first term + last term) = (20/2)(4 + 80) = 10 * 84 = 840.",
      topic: "Sequence",
      difficulty: "Easy",
    },
    {
      question: "If the sum of an arithmetic series is 75, the first term is 3, and the common difference is 5, how many terms are there?",
      a: "12",
      b: "15",
      c: "10",
      d: "18",
      correct: "a",
      explanation: "We can use the formula for the sum of an arithmetic series: S = (n/2)(first term + last term). Given S = 75, first term = 3, and common difference = 5, we can solve for 'n' to find the number of terms.",
      topic: "Arithmetic series",
      difficulty: "Medium",
    },
    {
      question: "If the sum of the first n terms of an arithmetic series is given by 𝑆𝑛 = 2𝑛^2 + 5𝑛, find the first term.",
      a: "2",
      b: "5",
      c: "3",
      d: "4",
      correct: "c",
      explanation: "The sum of an arithmetic series can be expressed as a quadratic function of 'n'. The coefficient of 'n^2' gives us half of the common difference, and the constant term gives us the first term.",
      topic: "Arithmatic series",
      difficulty: "Medium",
    },
    {
      question: "Find the sum of the series 1 + 2/3 + 3/9 + 4/27 + … up to infinity.",
      a: "3",
      b: "4",
      c: "5",
      d: "6",
      correct: "b",
      explanation: "This is a geometric series with first term '1' and common ratio '2/3'. The sum of an infinite geometric series when |r| < 1 is given by S = a / (1 - r).",
      topic: "Series",
      difficulty: "Hard",
    },
    {
      question: "The sum of the first n terms of an arithmetic series is given by 𝑆𝑛 = 2𝑛^2 + 3𝑛. Find the common difference.",
      a: "2",
      b: "3",
      c: "5",
      d: "4",
      correct: "b",
      explanation: "The sum of an arithmetic series can be expressed as a quadratic function of 'n'. The coefficient of 'n' gives us the common difference.",
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
      explanation: "This is a geometric sequence with first term '2' and common ratio '2'. The product of the first 'n' terms of a geometric sequence is given by the first term raised to the power of 'n', multiplied by the ratio of the sum of the first 'n' terms and the first term.",
      topic: "Geometric sequence",
      difficulty: "Easy",
    }
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