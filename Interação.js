function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '-250px') {
      sidebar.style.right = '0';
    } else {
      sidebar.style.right = '-250px';
    }
  }

  