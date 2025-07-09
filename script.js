document.addEventListener('DOMContentLoaded', function () {
const pianoIcon = document.getElementById('piano-icon');
const pianoSlash = document.getElementById('piano-slash');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const music = document.getElementById('bg-music');
const toggle = document.querySelector('.music-toggle');

let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

// Play music if session says so
if (isMusicPlaying) {
music.play().then(() => {
pianoIcon.classList.add('playing');
pianoSlash.style.display = "none";
}).catch(() => {
console.warn("Music autoplay was blocked.");
});
} else {
pianoSlash.style.display = "block";
}

// Music toggle
toggle?.addEventListener('click', () => {
if (isMusicPlaying) {
music.pause();
pianoIcon.classList.remove('playing');
pianoSlash.style.display = "block";
} else {
music.play().then(() => {
pianoIcon.classList.add('playing');
pianoSlash.style.display = "none";
}).catch(() => {
console.warn("Music play failed.");
});
}
isMusicPlaying = !isMusicPlaying;
sessionStorage.setItem('musicPlaying', isMusicPlaying);
});

// Hamburger toggle
hamburger?.addEventListener('click', function () {
hamburger.classList.toggle('active');
navLinks.classList.toggle('open');
});

// Auto play music after first user interaction
document.body.addEventListener('click', function once() {
if (isMusicPlaying && music.paused) {
music.play().catch(() => {
console.log("Autoplay still blocked after interaction.");
});
}
document.body.removeEventListener('click', once);
});

// Floating info box for Collection page
const inc = document.querySelector('.what-included');
const back = document.querySelector('.floating-backdrop');
const close = document.querySelector('.close-floating');

inc?.addEventListener('click', () => {
back.classList.add('show');
});

close?.addEventListener('click', () => {
document.querySelector('.floating-box').style.animation = 'fbExit .3s forwards';
setTimeout(() => back.classList.remove('show'), 300);
});
});
