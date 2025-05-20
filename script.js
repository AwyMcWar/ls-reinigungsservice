document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('navbar'); // WICHTIG: ID "navbar" im HTML setzen
  const navLinks = nav.querySelectorAll('a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Symbol wechseln: ☰ ↔ ✖
    burger.innerHTML = nav.classList.contains('active') ? '&times;' : '&#9776;';
  });

  // Menü schließen, wenn Link angeklickt wird
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      burger.innerHTML = '&#9776;';
    });
  });
});
