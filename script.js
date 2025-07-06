// Toggle Navigation Menu
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

// Toggle Background Music
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Show Specific Section, Hide Others
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

  // Hide homepage cover, show mini-header and home button
  document.getElementById("cover").style.display = "none";
  document.getElementById("mini-header").style.display = "flex";
  document.getElementById("home-btn").style.display = "block";

  // Close nav menu
  document.getElementById("nav").classList.remove("open");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Return to Home Cover
function returnToHome() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
    section.classList.remove("fade-in");
  });

  document.getElementById("cover").style.display = "flex";
  document.getElementById("mini-header").style.display = "none";
  document.getElementById("home-btn").style.display = "none";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// On Page Load — Show cover only or open section if hash exists
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    openSection(hash.replace("#", ""));
  } else {
    document.getElementById("cover").style.display = "flex";
    document.getElementById("mini-header").style.display = "none";
    document.getElementById("home-btn").style.display = "none";
  }
});
