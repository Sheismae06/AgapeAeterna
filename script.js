// Elegant Website JavaScript with Fade Transitions

function toggleNav() { document.getElementById('nav').classList.toggle('open'); }

function openSection(id) { document.getElementById('nav').classList.remove('open');

// Remove active-link class from all nav links document.querySelectorAll('#nav a').forEach(link => link.classList.remove('active-link'));

// Hide all sections with fade-out effect document.querySelectorAll('section').forEach(section => { section.classList.remove('fade-in'); section.classList.add('fade-out'); setTimeout(() => section.classList.remove('active'), 400); });

// Show the selected section with fade-in const targetSection = document.getElementById(id); if (targetSection) { setTimeout(() => { targetSection.classList.remove('fade-out'); targetSection.classList.add('active'); targetSection.classList.add('fade-in'); }, 400); }

// Highlight active nav link document.querySelectorAll('#nav a').forEach(link => { if (link.getAttribute('onclick')?.includes(id)) { link.classList.add('active-link'); } });

// Toggle cover or mini-header if (id === 'home') { document.getElementById('cover').style.display = 'flex'; document.getElementById('mini-header').style.display = 'none'; } else { document.getElementById('cover').style.display = 'none'; document.getElementById('mini-header').style.display = 'flex'; } }

// Music Toggle const music = document.getElementById('bg-music'); music.volume = 1.0; let playing = false;

function toggleMusic() { if (!playing) { music.play(); document.querySelector('.music-icon').innerText = '✖'; } else { music.pause(); document.querySelector('.music-icon').innerText = '♫'; } playing = !playing; }

// On Page Load window.addEventListener('load', () => { document.getElementById('cover').style.display = 'flex'; document.getElementById('mini-header').style.display = 'none';

// Hide all sections and activate about section document.querySelectorAll('section').forEach(s => { s.classList.remove('active', 'fade-in', 'fade-out'); }); const about = document.getElementById('about'); if (about) { about.classList.add('active', 'fade-in'); } });

