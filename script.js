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
});
