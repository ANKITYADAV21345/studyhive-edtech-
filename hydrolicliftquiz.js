
const quizData = [
    {
      question: "What principle does a hydraulic lift work on?",
      options: [
        "Bernoulli's Principle",
        "Pascal's Law",
        "Archimedes' Principle",
        "Boyle's Law"
      ],
      answer: "Pascal's Law"
    },
    {
      question: "What is transferred through the hydraulic fluid?",
      options: [
        "Energy",
        "Light",
        "Electricity",
        "Sound"
      ],
      answer: "Energy"
    },
    {
      question: "Hydraulic lifts are commonly used in:",
      options: [
        "Cars and Elevators",
        "Airplanes",
        "Trains",
        "Wind turbines"
      ],
      answer: "Cars and Elevators"
    },
    {
      question: "Which fluid is generally used in hydraulic systems?",
      options: [
        "Water",
        "Oil",
        "Air",
        "Mercury"
      ],
      answer: "Oil"
    },
    {
      question: "If small piston has less area, how can it lift a heavy load on large piston?",
      options: [
        "Using gravity",
        "Increasing air pressure",
        "Force multiplication through fluid pressure",
        "Electric motor"
      ],
      answer: "Force multiplication through fluid pressure"
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
