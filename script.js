
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gameSections = document.querySelectorAll('.game-section');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.getAttribute('data-genre');

      gameSections.forEach(section => {
        if (genre === 'all') {
          section.style.display = 'block';
        } else {
          const sectionGenre = section.id;
          section.style.display = genre === sectionGenre ? 'block' : 'none';
        }
      });

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
  });


  filterButtons[0].click();
});