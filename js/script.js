const toggleBtn = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-style');

// Default: Light Mode (Moon icon)
toggleBtn.textContent = "🌙";
toggleBtn.style.color = "#000"; // Dark icon for light mode

toggleBtn.addEventListener('click', () => {
  if (themeLink.getAttribute('href').includes('light.css')) {
    // Switch to Dark Mode
    themeLink.setAttribute('href', 'assets/css/dark.css');
    toggleBtn.textContent = "☀️"; // Sun icon
    toggleBtn.style.color = "#fff"; // Light icon for dark mode
    toggleBtn.style.background = "#1f2937"; // Dark button background
  } else {
    // Switch to Light Mode
    themeLink.setAttribute('href', 'assets/css/light.css');
    toggleBtn.textContent = "🌙"; // Moon icon
    toggleBtn.style.color = "#000"; // Dark icon for light mode
    toggleBtn.style.background = "#facc15"; // Light button background
  }
});
