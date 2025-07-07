document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');

  // Set up the audio
  let music = new Audio("https://www.bensound.com/bensound-music/bensound-tenderness.mp3");
  music.loop = true;
  music.volume = 1.0;

  // Check session storage
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Apply the saved state
  if (isMusicPlaying) {
    music.play();
    pianoIcon.classList.add('playing');
    pianoIcon.classList.remove('muted');
    pianoSlash.style.display = 'none';
  } else {
    pianoIcon.classList.remove('playing');
    pianoIcon.classList.add('muted');
    pianoSlash.style.display = 'block';
  }

  // Music toggle
  pianoIcon.addEventListener('click', () => {
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);

    if (isMusicPlaying) {
      music.play();
      pianoIcon.classList.add('playing');
      pianoIcon.classList.remove('muted');
      pianoSlash.style.display = 'none';
    } else {
      music.pause();
      pianoIcon.classList.remove('playing');
      pianoIcon.classList.add('muted');
      pianoSlash.style.display = 'block';
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
});
