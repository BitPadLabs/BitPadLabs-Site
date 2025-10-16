document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Also add touch event for mobile
    menuToggle.addEventListener('touchend', function(e) {
      e.preventDefault();
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Close mobile menu when clicking outside (but not on links)
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = mainNav?.contains(e.target);
    const isClickOnToggle = menuToggle?.contains(e.target);
    const isClickOnLink = e.target.tagName === 'A' || e.target.closest('a');
    
    // Only close if clicking outside AND not on a link
    if (mainNav?.classList.contains('active') && !isClickInsideMenu && !isClickOnToggle && !isClickOnLink) {
      mainNav.classList.remove('active');
      menuToggle?.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Close mobile menu when clicking a nav link
  if (mainNav) {
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Allow default navigation to happen
        // Close menu immediately so it animates while page loads
        mainNav.classList.remove('active');
        menuToggle?.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // You can add form validation or submission handling here
      console.log('Form submitted');
    });
  }
  
  // FAQ toggles
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});