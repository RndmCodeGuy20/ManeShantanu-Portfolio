const quizData = [
  {
    question: "Which crop is sown on the largest area in India?",
    a: "Rice",
    b: "Wheat",
    c: "Sugarcane",
    d: "Maize",
    correct: "a",
  },
  {
    question: "Entomology is the science that studies?",
    a: "Behaviour of human beings",
    b: "Insects",
    c: "The origin and history of technical and scientific terms",
    d: "The formation of rocks",
    correct: "b",
  },
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's ________?",
    a: "Highest railway station",
    b: "Longest railway station",
    c: "Largest railway station",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Galileo was an astronomer who _______",
    a: "Developed the telescope",
    b: "Discovered four satellites of Jupiter",
    c: "Discovered that the movement of pendulum produces a regular time measurement",
    d: "All of the above",
    correct: "b",
  },
  {
    question: "Corey Anderson who has hit the fastest ODI century in 36 balls is from?",
    a: "England",
    b: "Australia",
    c: "West Indies",
    d: "New Zealand",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_ans");
const b_text = document.getElementById("b_ans");
const c_text = document.getElementById("c_ans");
const d_text = document.getElementById("d_ans");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
