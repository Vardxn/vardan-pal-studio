// JavaScript file to handle basic site operations

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Highlight active section in the navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s ease';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});
