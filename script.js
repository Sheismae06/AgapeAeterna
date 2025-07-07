document.addEventListener('DOMContentLoaded', function () {
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const music = document.getElementById('bg-music');

  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Function to update music icon state
  function updateMusicIcon() {
    if (isMusicPlaying) {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = "none";
    } else {
      pianoIcon.classList.remove('playing');
      pianoSlash.style.display = "block";
    }
  }

  // Resume music after user interaction
  function toggleMusic() {
    if (isMusicPlaying) {
      music.pause();
    } else {
      music.play().catch((e) => {
        console.warn("Autoplay blocked until user interacts.");
      });
    }

    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
    updateMusicIcon();
  }

  // Initial setup after user interaction
  pianoIcon.addEventListener('click', toggleMusic);
  updateMusicIcon();

  // Hamburger menu toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Try auto-play only after user interacts with any click
  document.body.addEventListener('click', function once() {
    if (isMusicPlaying && music.paused) {
      music.play().catch(() => {
        console.log("Still blocked, but now interacted.");
      });
    }
    document.body.removeEventListener('click', once);
  });
});
