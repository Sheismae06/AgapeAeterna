document.addEventListener('DOMContentLoaded', function () {
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const music = document.getElementById('bg-music');
  const toggle = document.querySelector('.music-toggle');

  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Play music if previously toggled ON
  if (isMusicPlaying) {
    music.play().then(() => {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = "none";
    }).catch(() => {
      console.warn("Music autoplay blocked.");
    });
  } else {
    pianoSlash.style.display = "block";
  }

  // Toggle music manually
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
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Autoplay fix after first interaction
  document.body.addEventListener('click', function once() {
    if (isMusicPlaying && music.paused) {
      music.play().catch(() => {
        console.log("Still blocked after interaction.");
      });
    }
    document.body.removeEventListener('click', once);
  });

  // Floating box (Collection page only)
  const inc = document.querySelector('.what-included');
  const back = document.querySelector('.floating-backdrop');
  const close = document.querySelector('.close-floating');
  const box = document.querySelector('.floating-box');

  inc?.addEventListener('click', () => {
    back.classList.add('show');
    box.style.animation = 'fadeSlide 0.3s ease-out';
  });

  close?.addEventListener('click', () => {
    box.style.animation = 'fbExit 0.3s forwards';
    setTimeout(() => {
      back.classList.remove('show');
    }, 300);
  });
});
