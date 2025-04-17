const quizData = [
    {
      question: "What does BJT stand for?",
      options: ["Basic Junction Transistor", "Bipolar Junction Transistor", "Bipolar Jet Transistor", "Binary Junction Transistor"],
      answer: "Bipolar Junction Transistor"
    },
    {
      question: "In BJT, current is controlled by:",
      options: ["Base", "Collector", "Emitter", "Substrate"],
      answer: "Base"
    },
    {
      question: "FET is a type of:",
      options: ["Current-controlled device", "Voltage-controlled device", "Power device", "Digital device"],
      answer: "Voltage-controlled device"
    },
    {
      question: "Which terminal in FET controls the current flow?",
      options: ["Source", "Gate", "Drain", "Base"],
      answer: "Gate"
    },
    {
      question: "Which FET type has a physical channel present even without gate voltage?",
      options: ["Depletion-type", "Enhancement-type", "NPN", "PNP"],
      answer: "Depletion-type"
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
  