document.addEventListener("DOMContentLoaded", function() {
  // Preloader
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', function() {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });

  // Mobile Menu Toggle
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              mobileMenu.classList.remove('active');
          }
      });
  });

document.getElementById("dark-mode-btn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = " Light Mode";
  } else {
    this.textContent = " Dark Mode";
  }
});


  // Back to Top Button
  const backToTop = document.getElementById("back-to-top");
  
  // Combined scroll event for multiple effects
  window.addEventListener("scroll", function() {
      const scrollY = window.scrollY;
      
      // Sticky header effect
      const header = document.getElementById("header");
      if (scrollY > 50) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
      
      // Parallax effect on hero section
      const hero = document.getElementById("hero");
      if (hero) {
         hero.style.backgroundPositionY = -(scrollY * 0.5) + "px";
      }
      
      // Back to Top Button visibility
      if (scrollY > 300) {
          backToTop.style.display = "block";
      } else {
          backToTop.style.display = "none";
      }
  });
  
  backToTop.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });

  // Scroll Reveal for sections
  const sections = document.querySelectorAll('.section');
  const revealSection = function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.1,
  });

  sections.forEach(section => {
      sectionObserver.observe(section);
  });
});
