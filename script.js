document.addEventListener('DOMContentLoaded', function () {
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const music = document.getElementById('bg-music');
  const toggle = document.querySelector('.music-toggle');

  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Apply music state
  function updateMusicIcon() {
    if (isMusicPlaying) {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = "none";
    } else {
      pianoIcon.classList.remove('playing');
      pianoSlash.style.display = "block";
    }
  }

  // Attempt to autoplay if user allowed it before
  if (isMusicPlaying) {
    music.play().then(updateMusicIcon).catch(() => {
      console.warn("Music autoplay blocked.");
    });
  } else {
    updateMusicIcon();
  }

  // Music toggle
  toggle?.addEventListener('click', () => {
    if (music.paused) {
      music.play().then(() => {
        isMusicPlaying = true;
        sessionStorage.setItem('musicPlaying', 'true');
        updateMusicIcon();
      }).catch(() => console.warn("Music play failed."));
    } else {
      music.pause();
      isMusicPlaying = false;
      sessionStorage.setItem('musicPlaying', 'false');
      updateMusicIcon();
    }
  });

  // Ensure music resumes after first click (for autoplay restrictions)
  document.body.addEventListener('click', function once() {
    if (isMusicPlaying && music.paused) {
      music.play().then(updateMusicIcon).catch(() => {
        console.log("Autoplay still blocked after interaction.");
      });
    }
    document.body.removeEventListener('click', once);
  });

  // Hamburger toggle
  hamburger?.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Floating info box logic
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
