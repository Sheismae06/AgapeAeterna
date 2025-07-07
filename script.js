document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  const music = new Audio("https://www.bensound.com/bensound-music/bensound-tenderness.mp3");
  music.loop = true;
  music.volume = 1.0;

  // Set initial music state
  if (isMusicPlaying) {
    music.play();
    pianoIcon.classList.add('playing');
    pianoSlash.style.display = "none";
  } else {
    pianoSlash.style.display = "block";
  }

  // Toggle music on icon click
  pianoIcon.addEventListener('click', function () {
    if (isMusicPlaying) {
      music.pause();
      pianoSlash.style.display = "block";
      pianoIcon.classList.remove('playing');
    } else {
      music.play();
      pianoSlash.style.display = "none";
      pianoIcon.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
