// Dark Mode Toggle Script

const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const icon = toggleButton.querySelector('i');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(isDark) {
  body.classList.toggle('dark-mode', isDark);
  icon.classList.toggle('fa-moon', !isDark);
  icon.classList.toggle('fa-sun', isDark);
}

// A saved choice wins; otherwise follow the device's light/dark setting
const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme ? savedTheme === 'dark' : systemDark.matches);

// Track device changes until the visitor picks a theme themselves
systemDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) applyTheme(e.matches);
});

toggleButton.addEventListener('click', () => {
  const isDark = !body.classList.contains('dark-mode');
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
