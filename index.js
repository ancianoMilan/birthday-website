// AUTH FUNCTION
function checkYear() {
  const correctYear = "2024"; // 🔥 CHANGE THIS
  const input = document.getElementById("yearInput").value;
  const error = document.getElementById("errorMsg");

  if (input === correctYear) {
    // smooth transition
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);

  } else {
    error.textContent = "Wrong year 😢 try again!";
  }
}


// CONFETTI FUNCTION (only runs on home page)
const confettiBtn = document.getElementById("confettiBtn");
const cheerAudio = document.getElementById("cheerAudio"); // make sure you added this in HTML

if (confettiBtn) {
  confettiBtn.addEventListener("click", launchConfetti);
}

function launchConfetti() {
  // Play cheering audio
  if (cheerAudio) {
    cheerAudio.currentTime = 0; // restart if clicked multiple times
    cheerAudio.play();
  }

  for (let i = 0; i < 120; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");

    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.backgroundColor = getRandomColor();

    let size = Math.random() * 8 + 4;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => confetti.remove(), 5000);
  }
}

function getRandomColor() {
  const colors = ["#ff4da6", "#a855f7", "#f59e0b", "#22c55e", "#3b82f6"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColor() {
  const colors = ["#ff4da6", "#a855f7", "#f59e0b", "#22c55e", "#3b82f6"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const celebrateBtn = document.querySelector(".top-btn");
const landingPage = document.getElementById("landingPage");
const memoriesSection = document.getElementById("memoriesSection");

if (celebrateBtn) {
  celebrateBtn.addEventListener("click", () => {
    // fade out landing
    landingPage.style.opacity = "0";

    setTimeout(() => {
      landingPage.classList.add("hidden");

      // show memories section
      memoriesSection.classList.remove("hidden");

      // optional: force fade-in by slight delay
      setTimeout(() => {
        memoriesSection.style.opacity = "1";
      }, 50);
    }, 400);
  });
}
// NEXT BUTTON TO REVEAL LETTER + BALLOON SECTION
const nextBtn = document.querySelector(".memories-section button"); // the Next button in memories
const letterBalloonSection = document.getElementById("letterBalloonSection");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    // fade out memories
    memoriesSection.style.opacity = "0";

    setTimeout(() => {
      memoriesSection.classList.add("hidden");

      // show letter + balloon section
      letterBalloonSection.classList.remove("hidden");
      setTimeout(() => {
        letterBalloonSection.style.opacity = "1";
      }, 50);

      // optional: start generating balloons
      startBalloons();
    }, 400);
  });
}

// SIMPLE BALLOON GENERATOR
function startBalloons() {
  const balloonArea = document.getElementById("balloonArea");

  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.backgroundColor = ["#ff4da6","#a855f7","#f59e0b","#22c55e","#3b82f6"][Math.floor(Math.random()*5)];
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.bottom = "0";

    // Random size
    const size = 40 + Math.random() * 30;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.4}px`;

    // Animate up with random speed
    const duration = 4000 + Math.random() * 4000; // 4s to 8s
    balloon.style.transition = `transform ${duration}ms linear`;

    // Pop on click
    balloon.addEventListener("click", () => {
      balloon.style.opacity = "0";
      setTimeout(() => balloon.remove(), 300);
    });

    balloonArea.appendChild(balloon);

    // Start floating up
    setTimeout(() => {
      balloon.style.transform = `translateY(-${balloonArea.offsetHeight + 100}px)`;
      // Remove after animation
      setTimeout(() => balloon.remove(), duration);
    }, 50);
  }

  // Spawn a balloon every 500ms
  setInterval(createBalloon, 500);
}

// FINAL CAKE + CARDS SECTION
const letterNextBtn = document.querySelector(".letter-balloon-section button"); // Next button in balloon section
const cakeSection = document.getElementById("cakeSection");

if (letterNextBtn) {
  letterNextBtn.addEventListener("click", () => {
    // fade out letter + balloon section
    letterBalloonSection.style.opacity = "0";

    setTimeout(() => {
      letterBalloonSection.classList.add("hidden");

      // show cake section
      cakeSection.classList.remove("hidden");
      setTimeout(() => {
        cakeSection.style.opacity = "1";
      }, 50);
    }, 400);
  });
}

// CAKE CLICK -> blow candles and show cards
const cake = document.getElementById("cake");
const cardsArea = document.getElementById("cardsArea");

cake.addEventListener("click", () => {
  // blow out candles
  const candleTops = cake.querySelectorAll(".candle::after, .candle");
  cake.querySelectorAll(".candle::after").forEach(c => c.style.opacity = "0");

  // spawn 5 cards at random positions
  const messages = [
    "You will achieve all your dreams in life, baby",
    "Forever grateful for you 💕",
    "You are my sunshine ☀️",
    "I'll always be with you.",
    "I love you"
  ];

  for (let i = 0; i < 5; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.top = `${Math.random() * 70}%`;
    card.style.left = `${Math.random() * 70}%`;
    card.textContent = "🎁 Click me!";
    card.dataset.message = messages[i];
    cardsArea.appendChild(card);

    card.addEventListener("click", () => {
      card.textContent = card.dataset.message;
      card.classList.add("revealed");
    });
  }
});