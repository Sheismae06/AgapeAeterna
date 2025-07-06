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

  // Hide cover on section open
  const cover = document.getElementById("cover");
  const miniHeader = document.getElementById("mini-header");

  if (sectionId) {
    cover.style.display = "none";
    miniHeader.style.display = "flex";
  }

  // Close nav menu
  document.getElementById("nav").classList.remove("open");
}

// On Page Load — Show cover only
window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
    section.classList.remove("fade-in");
  });

  // Show cover, hide mini-header on initial load
  document.getElementById("cover").style.display = "flex";
  document.getElementById("mini-header").style.display = "none";

  // Optional: If there's a hash in URL (like #order), open that section automatically
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.replace("#", "");
    openSection(sectionId);
  }
});
