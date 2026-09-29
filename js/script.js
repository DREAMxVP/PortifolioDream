// Tema claro/escuro com localStorage
(function() {
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme');

  // Restaurar tema salvo
  try {
    const savedTheme = localStorage.getItem('tema');
    if (savedTheme) {
      root.setAttribute('data-theme', savedTheme);
    }
  } catch (e) {
    // localStorage não disponível
  }

  // Alternar tema
  themeBtn.addEventListener('click', function() {
    const isDark = root.getAttribute('data-theme') ? root.getAttribute('data-theme') === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const newTheme = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);

    try {
      localStorage.setItem('tema', newTheme);
    } catch (e) {
      // localStorage não disponível
    }
  });
})();
