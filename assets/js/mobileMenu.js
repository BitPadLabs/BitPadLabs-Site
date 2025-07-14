document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      // Toggle the 'active' class on the mobile navigation
      mobileNav.classList.toggle('active');
      // Toggle the 'open' class on the hamburger icon for animation
      menuToggle.classList.toggle('open');
      
      // Toggle aria-expanded for accessibility
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target) && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    console.error('Mobile menu elements not found');
  }
});