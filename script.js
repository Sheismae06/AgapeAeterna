document.addEventListener("DOMContentLoaded", function () {
  const musicToggle = document.getElementById("music-toggle");
  const backgroundMusic = document.getElementById("background-music");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (musicToggle && backgroundMusic) {
    const isPlaying = localStorage.getItem("musicPlaying") === "true";

    if (isPlaying) {
      backgroundMusic.play().catch(() => {});
      musicToggle.classList.remove("paused");
      musicToggle.classList.add("playing");
    }

    musicToggle.addEventListener("click", function () {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.classList.remove("paused");
        musicToggle.classList.add("playing");
        localStorage.setItem("musicPlaying", "true");
      } else {
        backgroundMusic.pause();
        musicToggle.classList.remove("playing");
        musicToggle.classList.add("paused");
        localStorage.setItem("musicPlaying", "false");
      }
    });
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
