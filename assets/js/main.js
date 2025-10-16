document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Also add touch event for mobile
    menuToggle.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Close mobile menu when clicking the overlay (body.menu-open:before)
  document.body.addEventListener('click', (e) => {
    if (document.body.classList.contains('menu-open') && 
        !mainNav?.contains(e.target) && 
        !menuToggle?.contains(e.target)) {
      mainNav?.classList.remove('active');
      menuToggle?.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Close mobile menu when clicking a nav link
  if (mainNav) {
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Check if it's an anchor link on the same page
        if (href && href.startsWith('#')) {
          // For anchor links, close the menu
          mainNav.classList.remove('active');
          menuToggle?.classList.remove('active');
          document.body.classList.remove('menu-open');
        } else {
          // For navigation to other pages, do nothing - let the browser navigate
          // The menu will disappear when the page unloads
        }
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