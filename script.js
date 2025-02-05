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

  // Dark Mode Toggle
  document.getElementById("dark-mode-btn").addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
  });

  // Back to Top Button
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
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
