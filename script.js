// Function to toggle navigation menu
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

// Function to toggle background music
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Function to show a specific section and hide the rest
function openSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add("active");
      section.classList.add("fade-in");
    } else {
      section.classList.remove("active");
      section.classList.remove("fade-in");
    }
  });

  // Update URL hash without scrolling
  history.pushState(null, null, `#${sectionId}`);

  // Close nav menu if open
  const nav = document.getElementById("nav");
  nav.classList.remove("open");
}

// On initial load: show section if hash exists in URL (e.g. #order)
window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
    section.classList.remove("fade-in");
  });

  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.substring(1); // remove "#"
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add("active");
      target.classList.add("fade-in");
    }
  }
});
