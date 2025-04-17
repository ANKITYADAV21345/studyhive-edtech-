const quizData = [
    {
      question: "What is the main purpose of a refrigeration system?",
      options: [
        "To increase temperature",
        "To preserve food by cooling",
        "To generate electricity",
        "To heat water"
      ],
      answer: "To preserve food by cooling"
    },
    {
      question: "Which component compresses the refrigerant gas?",
      options: ["Evaporator", "Compressor", "Condenser", "Expansion Valve"],
      answer: "Compressor"
    },
    {
      question: "What is the role of the condenser in refrigeration?",
      options: [
        "Converts gas to liquid",
        "Absorbs heat from food",
        "Compresses refrigerant",
        "Expands the refrigerant"
      ],
      answer: "Converts gas to liquid"
    },
    {
      question: "Which component absorbs heat in a refrigerator?",
      options: ["Condenser", "Evaporator", "Compressor", "Coolant"],
      answer: "Evaporator"
    },
    {
      question: "Which refrigerant is commonly used in domestic refrigerators?",
      options: ["R-134a", "R-22", "R-717", "Ammonia"],
      answer: "R-134a"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question-text").innerText = `Q${currentQuestion + 1}: ${q.question}`;
  
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(btn, q.answer);
      optionsContainer.appendChild(btn);
    });
  }
  
  function checkAnswer(selectedBtn, correctAnswer) {
    const allButtons = document.querySelectorAll("#options button");
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
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      const total = quizData.length;
      const percentage = ((score / total) * 100).toFixed(0);
  
      document.getElementById("question-box").classList.add("hidden");
      document.getElementById("nextBtn").classList.add("hidden");
  
      document.getElementById("result").classList.remove("hidden");
      document.getElementById("result").innerHTML = `
        <h2>🎉 Quiz Complete!</h2>
        <p>Your Score: <strong>${score}/${total}</strong></p>
        <p>Percentage: <strong>${percentage}%</strong></p>
      `;
    }
  }
  
  window.onload = loadQuestion;
  