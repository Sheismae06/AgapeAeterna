function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

function openSection(id) {
  document.getElementById('nav').classList.remove('open');

  // Hide all sections
  document.querySelectorAll('section').forEach(s => {
    s.style.display = 'none';
  });

  // Show cover or specific section
  if (id === 'home') {
    document.getElementById('cover').style.display = 'flex';
    document.getElementById('mini-header').style.display = 'none';
  } else {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('mini-header').style.display = 'flex';
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.style.display = 'block';
    }
  }
}

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

// Default state on page load
window.addEventListener('load', () => {
  document.getElementById('cover').style.display = 'flex';
  document.getElementById('mini-header').style.display = 'none';
  document.querySelectorAll('section').forEach(s => {
    s.style.display = 'none';
  });
});
