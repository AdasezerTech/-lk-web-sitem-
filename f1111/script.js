(function darkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  const state = localStorage.getItem('darkMode');
  if (state === 'enabled') {
    document.body.classList.add('light-mode');
    toggle.textContent = '🌙';
  } else {
    document.body.classList.remove('light-mode');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    if (isLight) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('darkMode', 'disabled');
      toggle.textContent = '☀️';
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('darkMode', 'enabled');
      toggle.textContent = '🌙';
    }
  });
})();

(function auth() {
  const logoutLink = document.getElementById('logoutLink');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('userName');
      window.location.href = 'giris.html';
    });
  }
})();

(function welcome() {
  const el = document.getElementById('welcomeMessage');
  if (!el) return;
  const user = localStorage.getItem('userName') || 'F1 takipçisi';
  el.textContent = `Hoş geldin, ${user}!`;
})();