
const quizData = [
    {
      question: "How many strokes does a complete cycle of a 4-stroke engine have?",
      options: [
        "2 strokes",
        "3 strokes",
        "4 strokes",
        "6 strokes"
      ],
      answer: "4 strokes"
    },
    {
      question: "Which stroke is not part of the 2-stroke engine?",
      options: [
        "Intake",
        "Compression",
        "Power",
        "Exhaust"
      ],
      answer: "Intake"
    },
    {
      question: "Which engine has better fuel efficiency?",
      options: [
        "2-stroke engine",
        "4-stroke engine",
        "Both are same",
        "Depends on vehicle"
      ],
      answer: "4-stroke engine"
    },
    {
      question: "What is the main advantage of a 2-stroke engine?",
      options: [
        "Lower emissions",
        "More complex design",
        "Higher power output for same size",
        "Better fuel economy"
      ],
      answer: "Higher power output for same size"
    },
    {
      question: "Which engine requires more maintenance?",
      options: [
        "2-stroke engine",
        "4-stroke engine",
        "Both equally",
        "None"
      ],
      answer: "2-stroke engine"
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
