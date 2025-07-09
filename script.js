// MUSIC TOGGLE
const musicToggle = document.getElementById('music-toggle');
const pianoIcon = document.getElementById('piano-icon');
const pianoSlash = document.getElementById('piano-slash');
const bgMusic = document.getElementById('bg-music');

// Load saved music state
let isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';

function updateMusicState(play) {
  if (play) {
    bgMusic.play();
    pianoIcon.setAttribute('fill', '#c9a96b'); // gold
    pianoSlash.style.display = 'none';
    localStorage.setItem('musicPlaying', 'true');
  } else {
    bgMusic.pause();
    pianoIcon.setAttribute('fill', 'white');
    pianoSlash.style.display = 'block';
    localStorage.setItem('musicPlaying', 'false');
  }
}

if (isMusicPlaying) {
  // Try autoplay (only works on user interaction sometimes)
  bgMusic.play().then(() => {
    pianoIcon.setAttribute('fill', '#c9a96b');
    pianoSlash.style.display = 'none';
  }).catch(() => {
    // Autoplay blocked
    updateMusicState(false);
  });
} else {
  updateMusicState(false);
}

musicToggle.addEventListener('click', () => {
  isMusicPlaying = !isMusicPlaying;
  updateMusicState(isMusicPlaying);
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.style.color = navLinks.classList.contains('show') ? '#c9a96b' : 'white';
});
