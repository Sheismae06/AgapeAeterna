// Toggle Navigation Menu
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.style.display = (nav.style.display === "block") ? "none" : "block";
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

// Show Selected Section
function openSection(id) {
  // Hide cover
  document.getElementById("cover").style.display = "none";

  // Hide nav
  document.getElementById("nav").style.display = "none";

  // Show mini header
  document.getElementById("mini-header").style.display = "block";

  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.remove("show");
    section.style.display = "none";
  });

  // Show selected section
  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    setTimeout(() => {
      target.classList.add("show");
    }, 10); // for fade-in transition
  }

  // Show floating home button
  document.getElementById("home-btn").style.display = "block";
}

// Return to Homepage
function returnToHome() {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.remove("show");
    section.style.display = "none";
  });

  // Show homepage cover
  document.getElementById("cover").style.display = "flex";

  // Hide mini header
  document.getElementById("mini-header").style.display = "none";

  // Hide nav menu
  document.getElementById("nav").style.display = "none";

  // Hide home button
  document.getElementById("home-btn").style.display = "none";
}
