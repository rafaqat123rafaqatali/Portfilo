const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const icon = document.getElementById('icon');

    // Check local storage for saved mode preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      body.classList.add('dark-mode');
      icon.classList.replace('fa-sun', 'fa-moon'); // Show moon icon in dark mode
    }

    // Add an event listener to the toggle button
    toggleButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');

      // Change icon based on the mode
      if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon'); // Switch to moon icon
        localStorage.setItem('mode', 'dark');        // Save mode as dark
      } else {
        icon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
        localStorage.setItem('mode', 'light');       // Save mode as light
      }
    });