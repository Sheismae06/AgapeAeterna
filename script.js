document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const music = document.getElementById('bg-music');
  const musicToggle = document.querySelector('.music-toggle');

  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Restore music state on load
  if (isMusicPlaying) {
    music.play().then(() => {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = 'none';
    }).catch(() => {
      // Autoplay was blocked by the browser (requires user interaction)
    });
  } else {
    pianoSlash.style.display = 'block';
  }

  // Music toggle logic
  function toggleMusic() {
    if (isMusicPlaying) {
      music.pause();
      pianoIcon.classList.remove('playing');
      pianoSlash.style.display = 'block';
    } else {
      music.play();
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = 'none';
    }
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  }

  // Click handler for music icon toggle
  if (musicToggle) {
    musicToggle.addEventListener('click', toggleMusic);
  }

  // Hamburger menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }
});
