const quizData = [
    {
      question: "What is the primary function of a Zener diode?",
      options: [
        "Rectification",
        "Voltage regulation",
        "Current amplification",
        "Signal mixing"
      ],
      answer: "Voltage regulation"
    },
    {
      question: "In which bias condition does a Zener diode regulate voltage?",
      options: [
        "Forward bias",
        "Reverse bias",
        "No bias",
        "Both forward and reverse"
      ],
      answer: "Reverse bias"
    },
    {
      question: "What is Zener breakdown?",
      options: [
        "A short circuit condition",
        "An avalanche of electrons under reverse bias",
        "Forward bias conduction",
        "Melting of diode"
      ],
      answer: "An avalanche of electrons under reverse bias"
    },
    {
      question: "Which of these is a typical application of Zener diode?",
      options: [
        "Power amplification",
        "AC to DC conversion",
        "Voltage reference in circuits",
        "Current limiting"
      ],
      answer: "Voltage reference in circuits"
    },
    {
      question: "What happens when reverse voltage exceeds Zener voltage?",
      options: [
        "Diode stops conducting",
        "Diode conducts in reverse without damage",
        "It explodes",
        "It acts like a capacitor"
      ],
      answer: "Diode conducts in reverse without damage"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const current = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = `Q${currentQuestionIndex + 1}: ${current.question}`;
  
    const answerContainer = document.getElementById("answer-buttons");
    answerContainer.innerHTML = "";
  
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(btn, current.answer);
      answerContainer.appendChild(btn);
    });
  }
  
  function checkAnswer(selectedBtn, correctAnswer) {
    const allButtons = document.querySelectorAll("#answer-buttons button");
    allButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      } else if (btn === selectedBtn) {
        btn.classList.add("wrong");
      }
    });
  
    if (selectedBtn.textContent === correctAnswer) {
      score++;
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
  
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: <strong>${score}/${quizData.length}</strong></p>
      <p>Percentage: <strong>${((score / quizData.length) * 100).toFixed(0)}%</strong></p>
    `;
  }
  
  window.onload = loadQuestion;
  