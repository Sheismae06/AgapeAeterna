document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const speakerOn = document.getElementById('speaker-on');
  const speakerOff = document.getElementById('speaker-off');
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Elegant piano music from Pixabay (no credit needed)
  let music = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_9956c18c9a.mp3?filename=emotional-soft-piano-10957.mp3");
  music.loop = true;
  music.volume = 1.0;

  // Toggle hamburger menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Auto-play if music was playing previously
  if (isMusicPlaying) {
    music.play();
    speakerOn.style.display = "none";
    speakerOff.style.display = "inline-block";
  }

  // Toggle music and icon
  function toggleMusic() {
    sessionStorage.setItem('musicPlaying', !isMusicPlaying);
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
  }

  speakerOn.addEventListener('click', toggleMusic);
  speakerOff.addEventListener('click', toggleMusic);
});
