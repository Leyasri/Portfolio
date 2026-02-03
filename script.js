// Scroll Reveal
const sections = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('revealed');
  });
}, {threshold:0.2});
sections.forEach(s => observer.observe(s));

// Mobile Nav Toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => navLinks.classList.toggle('nav-open'));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.bar-fill');
const skillObserver = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.width = e.target.style.width; // width already in HTML inline
      skillObserver.unobserve(e.target);
    }
  });
},{threshold:0.5});
skillBars.forEach(bar=>skillObserver.observe(bar));
