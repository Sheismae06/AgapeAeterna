// DOM elements
const musicToggle = document.getElementById('music-toggle');
const pianoIcon = document.getElementById('piano-icon');
const pianoSlash = document.getElementById('piano-slash');
const bgMusic = document.getElementById('bg-music');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// load saved state
let isPlaying = localStorage.getItem('musicPlaying') === 'true';
updateMusicState();

// toggle music
musicToggle.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) bgMusic.play().catch(() => {});
  else bgMusic.pause();
  updateMusicState();
  localStorage.setItem('musicPlaying', isPlaying);
});

function updateMusicState() {
  if (isPlaying) {
    pianoIcon.classList.add('playing');
    pianoSlash.style.display = 'none';
  } else {
    pianoIcon.classList.remove('playing');
    pianoSlash.style.display = 'block';
  }
}

// hamburger menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
  hamburger.style.color = hamburger.classList.contains('active') ? '#c9a96b' : 'white';
});
