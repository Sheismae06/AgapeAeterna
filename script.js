// MUSIC TOGGLE
const musicToggle = document.getElementById('music-toggle');
const pianoIcon = document.getElementById('piano-icon');
const pianoSlash = document.getElementById('piano-slash');
const bgMusic = document.getElementById('bg-music');

// Load music state
let isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
if (isMusicPlaying) {
  bgMusic.play().catch(() => {}); // prevent autoplay block error
  pianoIcon.setAttribute('fill', '#c9a96b'); // gold
  pianoSlash.style.display = 'none';
} else {
  bgMusic.pause();
  pianoIcon.setAttribute('fill', 'white');
  pianoSlash.style.display = 'block';
}

// Toggle music on icon click
musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
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
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.style.color = navLinks.classList.contains('show') ? '#c9a96b' : 'white';
});
