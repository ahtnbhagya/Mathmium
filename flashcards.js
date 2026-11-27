
/* =====================================================
   MATHMIUM FLASHCARD DATA

   To add a new subject:
   1. Copy one subject object.
   2. Change its id, title, icon and colours.
   3. Add your questions and answers.
   4. Save the file.

   No HTML changes are needed!
===================================================== */

const FLASHCARD_DECKS = [

  {
    id: "ratios-rates",
    title: "Ratios & Rates",
    icon: "⚖️",
    color: "#159E94",
    light: "#D5F5EF",
    dark: "#087D76",

    cards: [
      {
        question: "The ratio of boys to girls is 5:7. There are 36 students. How many are girls?",
        answer: "21 girls"
      },
      {
        question: "Simplify the ratio 84:126.",
        answer: "2:3"
      },
      {
        question: "The ratio of flour to sugar is 3:2. If you use 10 cups of sugar, how much flour is needed?",
        answer: "15 cups of flour"
      },
      {
        question: "Divide $960 in the ratio 3:5. What is the larger share?",
        answer: "$600"
      },
      {
        question: "The ratio of red to blue marbles is 4:9. There are 65 marbles. How many are blue?",
        answer: "45 blue marbles"
      }
    ]
  },

  {
    id: "linear-equations",
    title: "Linear Equations",
    icon: "📐",
    color: "#3978D4",
    light: "#DCEBFF",
    dark: "#245BA8",

    cards: [
      {
        question: "Solve: 5x + 12 = 47",
        answer: "x = 7"
      },
      {
        question: "Solve: 7x − 9 = 40",
        answer: "x = 7"
      },
      {
        question: "Solve: 4(x + 3) = 36",
        answer: "x = 6"
      },
      {
        question: "Solve: 3x + 8 = 2x + 19",
        answer: "x = 11"
      },
      {
        question: "Solve: 5(x − 2) = 3x + 14",
        answer: "x = 12"
      }
    ]
  },

  /*
    ADD MORE SUBJECTS BELOW

    Example:

    {
      id: "fractions",
      title: "Fractions",
      icon: "🍕",
      color: "#C47D00",
      light: "#FFE8A3",
      dark: "#9B6200",

      cards: [
        {
          question: "What is 1/2 + 1/4?",
          answer: "3/4"
        },
        {
          question: "What is 3/4 of 20?",
          answer: "15"
        }
      ]
    },

  */

];


/* =====================================================
   FLASHCARD FUNCTIONALITY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const subjectGrid = document.getElementById("subject-grid");
  const subjectSection = document.getElementById("subject-section");
  const studyWindow = document.getElementById("study-window");

  const emptyMessage = document.getElementById("empty-message");

  const backButton = document.getElementById("back-button");

  const studySubject = document.getElementById("study-subject");

  const cardStage = document.getElementById("card-stage");
  const questionText = document.getElementById("question-text");
  const answerText = document.getElementById("answer-text");

  const cardCounter = document.getElementById("card-counter");
  const progressPercentage = document.getElementById("progress-percentage");
  const progressFill = document.getElementById("progress-fill");

  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  const shuffleButton = document.getElementById("shuffle-button");

  let currentDeck = null;
  let currentCards = [];
  let currentIndex = 0;


  /* CREATE SUBJECT BUTTONS */

  function renderSubjects() {

    subjectGrid.innerHTML = "";

    if (!FLASHCARD_DECKS.length) {
      emptyMessage.style.display = "block";
      return;
    }

    emptyMessage.style.display = "none";

    FLASHCARD_DECKS.forEach(deck => {

      const button = document.createElement("button");

      button.type = "button";
      button.className = "subject-card";

      button.style.setProperty("--subject-color", deck.color);
      button.style.setProperty("--subject-light", deck.light);
      button.style.setProperty("--subject-dark", deck.dark);

      const icon = document.createElement("span");
      icon.className = "subject-icon";
      icon.textContent = deck.icon;

      const name = document.createElement("span");
      name.className = "subject-name";
      name.textContent = deck.title;

      const count = document.createElement("span");
      count.className = "subject-count";
      count.textContent = `${deck.cards.length} flashcards`;

      const arrow = document.createElement("span");
      arrow.className = "subject-arrow";
      arrow.textContent = "→";

      button.append(icon, name, count, arrow);

      button.addEventListener("click", () => {
        openDeck(deck);
      });

      subjectGrid.appendChild(button);

    });

  }


  /* OPEN A SUBJECT */

  function openDeck(deck) {

    if (!deck.cards || deck.cards.length === 0) {
      alert("There are no flashcards in this subject yet.");
      return;
    }

    currentDeck = deck;
    currentCards = [...deck.cards];
    currentIndex = 0;

    subjectSection.style.display = "none";
    studyWindow.classList.add("active");

    studySubject.textContent = `${deck.icon} ${deck.title}`;

    showCard();

    window.scrollTo({
      top: studyWindow.getBoundingClientRect().top + window.scrollY - 105,
      behavior: "smooth"
    });

  }


  /* DISPLAY CURRENT CARD */

  function showCard() {

    if (!currentCards.length) return;

    cardStage.classList.remove("flipped");
    cardStage.setAttribute("aria-pressed", "false");

    const card = currentCards[currentIndex];

    questionText.textContent = card.question;
    answerText.textContent = card.answer;

    const total = currentCards.length;
    const current = currentIndex + 1;
    const percentage = Math.round((current / total) * 100);

    cardCounter.textContent = `Card ${current} of ${total}`;
    progressPercentage.textContent = `${percentage}% completed`;
    progressFill.style.width = `${percentage}%`;

    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === total - 1;

  }


  /* FLIP CARD */

  function flipCard() {

    cardStage.classList.toggle("flipped");

    const isFlipped = cardStage.classList.contains("flipped");

    cardStage.setAttribute("aria-pressed", String(isFlipped));

    cardStage.setAttribute(
      "aria-label",
      isFlipped
        ? "Answer revealed. Activate to see the question."
        : "Question shown. Activate to reveal the answer."
    );

  }

  cardStage.addEventListener("click", flipCard);

  cardStage.addEventListener("keydown", event => {

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipCard();
    }

  });


  /* PREVIOUS CARD */

  previousButton.addEventListener("click", () => {

    if (currentIndex > 0) {
      currentIndex--;
      showCard();
    }

  });


  /* NEXT CARD */

  nextButton.addEventListener("click", () => {

    if (currentIndex < currentCards.length - 1) {
      currentIndex++;
      showCard();
    }

  });


  /* SHUFFLE CARDS */

  shuffleButton.addEventListener("click", () => {

    if (currentCards.length < 2) return;

    for (let i = currentCards.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [currentCards[i], currentCards[j]] =
        [currentCards[j], currentCards[i]];

    }

    currentIndex = 0;

    showCard();

  });


  /* BACK TO SUBJECTS */

  backButton.addEventListener("click", () => {

    studyWindow.classList.remove("active");
    subjectSection.style.display = "block";

    currentDeck = null;
    currentCards = [];
    currentIndex = 0;

    window.scrollTo({
      top: subjectSection.getBoundingClientRect().top + window.scrollY - 105,
      behavior: "smooth"
    });

  });


  /* START */

  renderSubjects();

});
