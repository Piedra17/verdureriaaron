  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const icon = menuToggle.querySelector('i');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times', 'animate-x');
    } else {
      icon.classList.remove('fa-times', 'animate-x');
      icon.classList.add('fa-bars');
    }
  });

