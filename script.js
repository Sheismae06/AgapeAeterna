document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const speakerOn = document.getElementById('speaker-on');
  const speakerOff = document.getElementById('speaker-off');

  // Music setup
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';
  let music = new Audio("https://www.bensound.com/bensound-music/bensound-tenderness.mp3");
  music.loop = true;
  music.volume = 0.6;

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active'); // Adds gold color to hamburger when active
  });

  // Auto-play if session remembers music is playing
  if (isMusicPlaying) {
    music.play();
    speakerOn.style.display = "none";
    speakerOff.style.display = "inline-block";
  }

  // Toggle music playback
  function toggleMusic() {
    if (isMusicPlaying) {
      music.pause();
      speakerOn.style.display = "inline-block";
      speakerOff.style.display = "none";
    } else {
      music.play();
      speakerOn.style.display = "none";
      speakerOff.style.display = "inline-block";
    }
    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
  }

  speakerOn.addEventListener('click', toggleMusic);
  speakerOff.addEventListener('click', toggleMusic);
});
