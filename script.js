document.addEventListener('DOMContentLoaded',()=>{
  const ham = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav-links'),
        music = document.getElementById('bg-music'),
        icon = document.getElementById('piano-icon'),
        slash = document.getElementById('piano-slash'),
        toggle = document.querySelector('.music-toggle');

  let play = sessionStorage.getItem('musicPlaying')==='true';
  if(play){ music.play().then(()=>{ icon.classList.add('playing'); slash.style.display='none'; }); }
  else slash.style.display='block';

  toggle?.addEventListener('click',()=>{
    if(play){ music.pause(); icon.classList.remove('playing'); slash.style.display='block'; }
    else{ music.play(); icon.classList.add('playing'); slash.style.display='none'; }
    play = !play;
    sessionStorage.setItem('musicPlaying', play);
  });

  ham?.addEventListener('click',()=>{
    ham.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // collection modal logic
  const inc = document.querySelector('.what-included'),
        back = document.querySelector('.floating-backdrop'),
        close = document.querySelector('.close-floating');
  inc?.addEventListener('click',()=>{
    back.classList.add('show');
  });
  close?.addEventListener('click',()=>{
    document.querySelector('.floating-box').style.animation='fbExit .3s forwards';
    setTimeout(()=> back.classList.remove('show'),300);
  });
});document.addEventListener('DOMContentLoaded', function () {
  const pianoIcon = document.getElementById('piano-icon');
  const pianoSlash = document.getElementById('piano-slash');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const music = document.getElementById('bg-music');

  let isMusicPlaying = sessionStorage.getItem('musicPlaying') === 'true';

  // Function to update music icon state
  function updateMusicIcon() {
    if (isMusicPlaying) {
      pianoIcon.classList.add('playing');
      pianoSlash.style.display = "none";
    } else {
      pianoIcon.classList.remove('playing');
      pianoSlash.style.display = "block";
    }
  }

  // Resume music after user interaction
  function toggleMusic() {
    if (isMusicPlaying) {
      music.pause();
    } else {
      music.play().catch((e) => {
        console.warn("Autoplay blocked until user interacts.");
      });
    }

    isMusicPlaying = !isMusicPlaying;
    sessionStorage.setItem('musicPlaying', isMusicPlaying);
    updateMusicIcon();
  }

  // Initial setup after user interaction
  pianoIcon.addEventListener('click', toggleMusic);
  updateMusicIcon();

  // Hamburger menu toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Try auto-play only after user interacts with any click
  document.body.addEventListener('click', function once() {
    if (isMusicPlaying && music.paused) {
      music.play().catch(() => {
        console.log("Still blocked, but now interacted.");
      });
    }
    document.body.removeEventListener('click', once);
  });
});
