// Toggle navigation menu
function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

// Open a specific section
function openSection(id) {
  // Close menu when a link is clicked
  document.getElementById('nav').classList.remove('open');

  // Remove highlight from all links
  document.querySelectorAll('#nav a').forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('onclick')?.includes(id)) {
      link.classList.add('active-link');
    }
  });

  // Hide all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('fade-in');
    section.classList.add('fade-out');
    setTimeout(() => section.classList.remove('active'), 400);
  });

  // Show the selected section
  const target = document.getElementById(id);
  if (target) {
    setTimeout(() => {
      target.classList.remove('fade-out');
      target.classList.add('active', 'fade-in');
    }, 400);
  }

  // Toggle cover and mini-header
  const cover = document.getElementById('cover');
  const miniHeader = document.getElementById('mini-header');
  if (id === 'home') {
    cover.style.display = 'flex';
    miniHeader.style.display = 'none';
  } else {
    cover.style.display = 'none';
    miniHeader.style.display = 'flex';
  }
}

// Music toggle functionality
const music = document.getElementById('bg-music');
music.volume = 1.0;
let playing = false;

function toggleMusic() {
  const icon = document.querySelector('.music-icon');
  if (!playing) {
    music.play();
    icon.innerText = '✖';
  } else {
    music.pause();
    icon.innerText = '♫';
  }
  playing = !playing;
}

// Initial page load
window.addEventListener('load', () => {
  document.getElementById('cover').style.display = 'flex';
  document.getElementById('mini-header').style.display = 'none';

  // Remove active/fade states from all sections
  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active', 'fade-in', 'fade-out');
  });

  // Handle URL hash or default to About section
  const hash = window.location.hash.replace('#', '');
  const initial = hash && document.getElementById(hash) ? hash : 'about';
  openSection(initial);
});
