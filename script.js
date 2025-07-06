// Toggle Navigation Menu
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.style.display = (nav.style.display === "block") ? "none" : "block";
}

// Toggle Background Music
function toggleMusic() {
  const music = document.getElementById("bg-music");
  const icon = document.querySelector(".music-icon");

  if (music.paused) {
    music.play();
    icon.textContent = "🔇";
  } else {
    music.pause();
    icon.textContent = "♫";
  }
}

// Show Selected Section
function openSection(id) {
  // Hide homepage
  document.getElementById("cover").style.display = "none";

  // Hide nav
  document.getElementById("nav").style.display = "none";

  // Show mini-header and home button
  document.getElementById("mini-header").style.display = "block";
  document.getElementById("home-btn").style.display = "block";
  document.querySelector(".music-icon").style.display = "block";

  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.remove("show");
    section.style.display = "none";
  });

  // Show selected section with fade-in
  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    setTimeout(() => {
      target.classList.add("show");
    }, 10);
  }
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

  // Hide mini-header, home button
  document.getElementById("mini-header").style.display = "none";
  document.getElementById("home-btn").style.display = "none";

  // Keep music icon visible
  document.querySelector(".music-icon").style.display = "block";

  // Hide nav
  document.getElementById("nav").style.display = "none";
}
