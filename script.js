document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const pianoIcon = document.querySelector('#piano-icon');
  const pianoSlash = document.querySelector('#piano-slash');
  const music = document.getElementById('bg-music');
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Resume state
  if (isMusicPlaying) {
    music.play();
    pianoIcon.classList.add('playing');
    pianoSlash.style.display = 'none';
  } else {
    pianoSlash.style.display = 'block';
    pianoIcon.classList.remove('playing');
  }

  // Toggle music
  window.toggleMusic = function () {
    if (isMusicPlaying) {
      music.pause();
      pianoSlash.style.display = 'block';
      pianoIcon.classList.remove('playing');
    } else {
      music.play();
      pianoSlash.style.display = 'none';
      pianoIcon.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  };

  // Menu toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
});
