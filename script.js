function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

function openSection(id) {
  document.getElementById('nav').classList.remove('open');
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));

  if (id === 'home') {
    document.getElementById('cover').style.display = 'flex';
    document.getElementById('mini-header').style.display = 'none';
  } else {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('mini-header').style.display = 'flex';
    document.getElementById(id).classList.add('active');
  }
}

const music = document.getElementById('bg-music');
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
