// === TOGGLE NAVIGATION MENU ===
function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

// === OPEN SPECIFIC SECTION ===
function openSection(id) {
  document.getElementById('nav').classList.remove('open');

  // Remove active-link from all
  document.querySelectorAll('#nav a').forEach(link => link.classList.remove('active-link'));

  // Hide all sections with fade-out
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('fade-in');
    section.classList.add('fade-out');
    setTimeout(() => section.classList.remove('active'), 400);
  });

  // Show selected section with fade-in
  const target = document.getElementById(id);
  if (target) {
    setTimeout(() => {
      target.classList.remove('fade-out');
      target.classList.add('active');
      target.classList.add('fade-in');
    }, 400);
  }

  // Highlight active nav link
  document.querySelectorAll('#nav a').forEach(link => {
    if (link.getAttribute('onclick')?.includes(id)) {
      link.classList.add('active-link');
    }
  });

  // Cover / Mini-header toggle
  if (id === 'home') {
    document.getElementById('cover').style.display = 'flex';
    document.getElementById('mini-header').style.display = 'none';
  } else {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('mini-header').style.display = 'flex';
  }
}

// === MUSIC TOGGLE ===
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

// === ON PAGE LOAD ===
window.addEventListener('load', () => {
  document.getElementById('cover').style.display = 'flex';
  document.getElementById('mini-header').style.display = 'none';

  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active', 'fade-in', 'fade-out');
  });

  const about = document.getElementById('about');
  if (about) {
    about.classList.add('active', 'fade-in');
  }
});
