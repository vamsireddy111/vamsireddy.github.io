function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const texts = [
  "Electronics & Software Developer ",
  "VLSI RTL Enthusiast ",
  "Frontend Developer ",
  "Python Learner "
];

let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const display = document.getElementById("typing");

  if (isDeleting) {
    currentText = texts[textIndex].substring(0, charIndex--);
  } else {
    currentText = texts[textIndex].substring(0, charIndex++);
  }

  display.textContent = currentText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === texts[textIndex].length) {
    speed = 1500; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

window.addEventListener("load", typeEffect);

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Save preference
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );

  // Change icon
  toggleBtn.textContent = document.body.classList.contains("light")
    ? "🌙"
    : "☀️";
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }
});

setTimeout(startTyping, 300);