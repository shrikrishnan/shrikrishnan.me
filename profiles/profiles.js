// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize dark mode from localStorage
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  darkToggle.textContent = '☀️';
}

// Toggle dark mode on button click
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  darkToggle.textContent = isDark ? '☀️' : '🌙';
});

// Smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});