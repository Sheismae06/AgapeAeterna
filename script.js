document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  const miniHeader = document.getElementById("mini-header");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  menuBtn.addEventListener("click", function() {
    nav.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = this.getAttribute("href").substring(1);
      sections.forEach(section => {
        section.style.display = section.id === target ? "block" : "none";
      });
      nav.classList.remove("open");
      if (window.scrollY > 100) {
        miniHeader.style.display = "flex";
      }
    });
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      miniHeader.style.display = "flex";
    } else {
      miniHeader.style.display = "none";
    }
  });
});
