// Elegant Website JavaScript

function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

function openSection(id) {
  document.getElementById('nav').classList.remove('open');

  // Remove active-link class
  document.querySelectorAll('#nav a').forEach(link => link.classList.remove('active-link'));

  // Hide all sections
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));

  // Show the selected section
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Highlight active menu item
  const navLinks = document.querySelectorAll('#nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('onclick')?.includes(id)) {
      link.classList.add('active-link');
    }
  });

  // Toggle cover/mini-header visibility
  if (id === 'home') {
    document.getElementById('cover').style.display = 'flex';
    document.getElementById('mini-header').style.display = 'none';
  } else {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('mini-header').style.display = 'flex';
  }
}

// Music toggle functionality
const music = document.getElementById('bg-music');
music.volume = 1.0;
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
    document.querySelector('.music-icon').innerText = '✖';
  } else {
    music.pause();
    document.querySelector('.music-icon').innerText = '♫';
  }
  playing = !playing;
}

// On page load
window.addEventListener('load', () => {
  document.getElementById('cover').style.display = 'flex';
  document.getElementById('mini-header').style.display = 'none';

  // Hide all sections and show "about" as default
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById('about').classList.add('active');
});
