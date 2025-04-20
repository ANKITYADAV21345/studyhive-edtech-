
const quizData = [
    {
      question: "What is the main function of a pump?",
      options: [
        "To generate electricity",
        "To move fluids",
        "To compress air",
        "To store water"
      ],
      answer: "To move fluids"
    },
    {
      question: "Which type of pump is commonly used in households?",
      options: [
        "Centrifugal pump",
        "Jet pump",
        "Gear pump",
        "Axial pump"
      ],
      answer: "Centrifugal pump"
    },
    {
      question: "Which part of a centrifugal pump increases the pressure of water?",
      options: [
        "Impeller",
        "Shaft",
        "Nozzle",
        "Seal"
      ],
      answer: "Impeller"
    },
    {
      question: "What is the unit of pump power?",
      options: [
        "Watt",
        "Newton",
        "Pascal",
        "Joule"
      ],
      answer: "Watt"
    },
    {
      question: "Which pump is best for high-viscosity fluids?",
      options: [
        "Centrifugal pump",
        "Reciprocating pump",
        "Diaphragm pump",
        "Gear pump"
      ],
      answer: "Gear pump"
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
        <h2>🎉 Quiz Completed!</h2>
        <p>Your Score: <strong>${score}/${total}</strong></p>
        <p>Percentage: <strong>${percentage}%</strong></p>
      `;
    }
  }
  
  window.onload = loadQuestion;
