// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => 
    {
    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');
  
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    // Close mobile menu when a nav item is clicked
    navLinksItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  
    // Change header style on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinksItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
          item.classList.add('active');
        }
      });
    });
  
    // Project popup functionality
    const projectCards = document.querySelectorAll('.project-card');
    const projectPopupOverlay = document.getElementById('project-popup-overlay');
    const projectPopupContents = document.querySelectorAll('#project-popup-overlay .popup-content');
    const projectPopupClose = document.querySelector('#project-popup-overlay .popup-close');
  
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-id');
        const popupContent = document.getElementById(`${projectId}-popup`);
        
        projectPopupContents.forEach(content => {
          content.classList.remove('active');
        });
        
        popupContent.classList.add('active');
        projectPopupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  
    projectPopupClose.addEventListener('click', () => {
      projectPopupOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  
    // Assignment popup functionality
    const assignmentCards = document.querySelectorAll('.assignment-card');
    const assignmentPopupOverlay = document.getElementById('assignment-popup-overlay');
    const assignmentPopupContents = document.querySelectorAll('#assignment-popup-overlay .popup-content');
    const assignmentPopupClose = document.querySelector('#assignment-popup-overlay .popup-close');
  
    assignmentCards.forEach(card => {
      card.addEventListener('click', function() {
        const assignmentId = this.getAttribute('data-id');
        const popupContent = document.getElementById(`${assignmentId}-popup`);
        
        assignmentPopupContents.forEach(content => {
          content.classList.remove('active');
        });
        
        popupContent.classList.add('active');
        assignmentPopupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  
    assignmentPopupClose.addEventListener('click', () => {
      assignmentPopupOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  
    // Close popups when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === projectPopupOverlay) {
        projectPopupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
      if (e.target === assignmentPopupOverlay) {
        assignmentPopupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
      });
    }
  
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.project-card, .assignment-card, .hobby-card, .skill-item');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Set initial state for animation
    const elementsToAnimate = document.querySelectorAll('.project-card, .assignment-card, .hobby-card, .skill-item');
    elementsToAnimate.forEach(element => {\
      element.style.opacity = '0  .hobby-card, .skill-item\');
    elementsToAnimate.forEach(element => 
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
  });
  
  