document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const speakerOn = document.getElementById('speaker-on');
  const speakerOff = document.getElementById('speaker-off');
  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';
  let music = new Audio("https://www.bensound.com/bensound-music/bensound-sunny.mp3");
  music.loop = true;
  music.volume = 1.0;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  if (isMusicPlaying) {
    music.play();
    speakerOn.style.display = "none";
    speakerOff.style.display = "inline-block";
  }

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
