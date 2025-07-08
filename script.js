document.addEventListener('DOMContentLoaded', function () {
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const music = document.getElementById('bg-music');
  const toggle = document.querySelector('.music-toggle');

  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Auto resume music if session says so
  if (isMusicPlaying && music) {
    music.play().then(() => {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = "none";
    }).catch(() => {
      console.warn("Autoplay blocked.");
    });
  } else {
    if (pianoSlash) pianoSlash.style.display = "block";
  }

  // Toggle music
  toggle?.addEventListener('click', () => {
    if (!music) return;
    if (isMusicPlaying) {
      music.pause();
      pianoIcon.classList.remove('playing');
      pianoSlash.style.display = "block";
    } else {
      music.play().then(() => {
        pianoIcon.classList.add('playing');
        pianoSlash.style.display = "none";
      }).catch(() => console.warn("Music play failed."));
    }
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  });

  // Hamburger menu toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // One-time user interaction to unblock autoplay
  document.body.addEventListener('click', function once() {
    if (isMusicPlaying && music?.paused) {
      music.play().catch(() => console.log("Still blocked after click."));
    }
    document.body.removeEventListener('click', once);
  });

  // Floating info box for Collection page
  const includedTrigger = document.querySelector('.what-included');
  const backdrop = document.getElementById('floatingBackdrop');
  const box = document.querySelector('.floating-box');
  const closeBtn = document.querySelector('.close-floating');

  includedTrigger?.addEventListener('click', () => {
    if (backdrop && box) {
      backdrop.style.display = 'flex';
      document.body.classList.add('blurred');
    }
  });

  closeBtn?.addEventListener('click', () => {
    if (backdrop && box) {
      box.style.animation = 'fbExit .3s forwards';
      setTimeout(() => {
        backdrop.style.display = 'none';
        document.body.classList.remove('blurred');
        box.style.animation = '';
      }, 300);
    }
  });
});
