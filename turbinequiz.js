
const quizData = [
    {
      question: "What is the primary purpose of a turbine?",
      options: [
        "To compress air",
        "To generate mechanical energy",
        "To store fluid",
        "To measure temperature"
      ],
      answer: "To generate mechanical energy"
    },
    {
      question: "Which of the following is a type of steam turbine?",
      options: [
        "Pelton wheel",
        "Francis turbine",
        "Impulse turbine",
        "Kaplan turbine"
      ],
      answer: "Impulse turbine"
    },
    {
      question: "What kind of energy is converted by a turbine?",
      options: [
        "Mechanical to Thermal",
        "Electrical to Heat",
        "Thermal to Mechanical",
        "Kinetic to Electrical"
      ],
      answer: "Thermal to Mechanical"
    },
    {
      question: "Which part of the turbine directs the flow onto the blades?",
      options: [
        "Stator",
        "Rotor",
        "Nozzle",
        "Casing"
      ],
      answer: "Nozzle"
    },
    {
      question: "What is the function of blades in a turbine?",
      options: [
        "Control fuel supply",
        "Convert fluid energy into rotational motion",
        "Start the ignition",
        "Cool down the fluid"
      ],
      answer: "Convert fluid energy into rotational motion"
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
