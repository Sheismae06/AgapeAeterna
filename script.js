document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const music = document.getElementById('bg-music');
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Resume music state
  if (isMusicPlaying) {
    music.play().then(() => {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = "none";
    }).catch(() => {
      // Auto-play blocked, wait for interaction
    });
  } else {
    pianoSlash.style.display = "block";
  }

  // Toggle Music
  function toggleMusic() {
    if (isMusicPlaying) {
      music.pause();
      pianoSlash.style.display = "block";
      pianoIcon.classList.remove('playing');
    } else {
      music.play();
      pianoSlash.style.display = "none";
      pianoIcon.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  }

  // Toggle Menu
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Click piano icon
  document.querySelector('.music-toggle').addEventListener('click', toggleMusic);
});
