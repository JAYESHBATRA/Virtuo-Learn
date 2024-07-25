const quizData = [
    {
      question: "Type of attachement of teeth in humans: ",
      a: "Diphyodont",
      b: "Heterodont",
      c: "Thecodont",
      d: "None",
      correct: "c",
      explanation:"Thecodont dentition refers to a specific arrangement of teeth where the base of each tooth is completely enclosed in a deep socket of bone. This type of dentition is observed in crocodilians, dinosaurs, and mammals.",
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
      explanation:"The vermiform appendix arises from the cecum, which is the first part of the large intestine. It is attached dorsomedially to the end of the cecum. Unlike the cecum and the rest of the colon, the appendix lacks certain features such as taeniae, haustra, semilunar folds, and appendices epiploicae. ",
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
      explanation:"Indigestion, also known as dyspepsia, is discomfort in the upper abdomen. It can be related to various factors: Overeating ,Fatty or Spicy Foods,Excessive Caffeine, Alcohol, Chocolate, or Carbonated Beverages,anxiety,smoking ,etc.",
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
      explanation:"Pepsin's primary function is to break down proteins into smaller peptides during the process of digestion. Pepsin works most effectively in an acidic environment, specifically at a pH of approximately 1.8. This low pH is necessary for its optimal activity.",
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
        explanation:"The part of the mammalian alimentary canal that does not secrete any enzyme is the oesophagus. It simply passes the food from the mouth to the stomach through peristalsis.",
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
        explanation:"Pepsin is an enzyme produced in the stomach. Its primary function is to break down proteins into smaller peptides during the process of digestion. Pepsin works most effectively in an acidic environment, specifically at a pH of approximately 1.8.",
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
        explanation:"Kwashiorkor is a severe form of malnutrition that primarily affects young children. It occurs due to protein deficiency in the diet. Key features of kwashiorkor include:Edema (Swelling),skin roughness,mental and physical retardation ,etc.",
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
        explanation:"The common bile duct is formed by the union of the common hepatic duct and the cystic duct. It carries bile from the gallbladder and empties it into the upper part of the small intestine (the duodenum)",
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
        explanation:"Pepsin is most active in acidic environments with a pH range of 1.5 to 2.5. In the human stomach, pepsinogen (its inactive form) is converted to active pepsin when mixed with hydrochloric acid (HCl). The digestive potency of pepsin is highest at the acidic pH found in normal gastric juice",
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
        explanation:"Carrier ions like Na+ facilitate the absorption of glucose and amino acids in the intestinal epithelium. The Na/Glucose cotransporter (SGLT1) enables glucose-coupled sodium absorption, while amino acid-coupled sodium absorption occurs through epithelial cells with Na/amino acid cotransporters.",
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