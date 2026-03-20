function checkYear() {
  const correctYear = "2024"; // 🔥 CHANGE THIS
  const input = document.getElementById("yearInput").value;
  const error = document.getElementById("errorMsg");

  if (input === correctYear) {
    // Fade out
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  } else {
    error.textContent = "Wrong year 😢 try again!";
  }
}