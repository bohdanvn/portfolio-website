// Typed.js for text animation
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('#typed', {
      strings: ["Web developer.", "Богом дан.", "Problem solver.", "Ready to work.", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const body = document.body;

  // Updated Dark Mode Toggle Logic
function toggleDarkMode() {
  const isLight = document.body.getAttribute('data-theme') === 'light';
  document.body.setAttribute('data-theme', isLight ? 'dark' : 'light');
  
  const toggleButtons = document.querySelectorAll('.mode-toggle');
  toggleButtons.forEach(btn => {
    btn.innerHTML = isLight ? 
      '<i class="fas fa-moon"></i><span class="toggle-text">Dark Mode</span>' : 
      '<i class="fas fa-sun"></i><span class="toggle-text">Light Mode</span>';
  });

  localStorage.setItem('theme', isLight ? 'dark' : 'light');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
document.querySelectorAll('.mode-toggle').forEach(btn => {
  btn.innerHTML = savedTheme === 'dark' ? 
    '<i class="fas fa-moon"></i><span class="toggle-text">Dark Mode</span>' : 
    '<i class="fas fa-sun"></i><span class="toggle-text">Light Mode</span>';
});

  darkModeToggle.addEventListener('click', toggleDarkMode);
  darkModeToggleMobile.addEventListener('click', toggleDarkMode);

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  // Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazy');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Set the src from data-src
          img.classList.remove('lazy'); // Remove the lazy class
          observer.unobserve(img); // Stop observing the image
        }
      });
    }, {
      rootMargin: '0px', // Adjust this value to trigger loading earlier
      threshold: 0.1 // Trigger when 10% of the image is visible
    });
  
    lazyImages.forEach(img => observer.observe(img));
  });


// Animate skill bars when they come into view
// Add delay between skill bar animations
document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const skillLevel = entry.target.querySelector('.skill-level');
            const width = skillLevel.getAttribute('data-width');
            skillLevel.style.setProperty('--skill-width', width);
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }, index * 300); // Delay each animation by 300ms
        }
      });
    }, {
      threshold: 1.0
    });
  
    skillBars.forEach(skillBar => observer.observe(skillBar));
  });

  // Add delay between stats number animations
// Animate stats numbers when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const statsValues = document.querySelectorAll('.stats-value');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statsValue = entry.target;
          const targetValue = parseInt(statsValue.getAttribute('data-target')); // Get the target value
          const duration = 4000; // Animation duration in milliseconds (5 seconds)
          const startValue = 100; // Starting value
          const increment = (targetValue - startValue) / (duration / 16); // Calculate increment per frame
  
          let currentValue = startValue;
          const updateValue = () => {
            currentValue += increment;
            if (currentValue <= targetValue) {
              statsValue.textContent = `${targetValue}+`;
               // Add animation class
            } else {
              statsValue.textContent = `${Math.round(currentValue)}+`;
              requestAnimationFrame(updateValue); // Continue animation
            }
          };
  
          updateValue();
          observer.unobserve(statsValue); // Stop observing after animation
        }
      });
    }, {
      threshold: 1.0 // Trigger when the entire element is visible
    });
  
    statsValues.forEach(statsValue => observer.observe(statsValue));
  });


  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section, header'); // Select all sections

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Alternate animations: even sections from left, odd sections from right
                if ([...sections].indexOf(entry.target) % 2 === 0) {
                    entry.target.classList.add('fade-in-left');
                } else {
                    entry.target.classList.add('fade-in-right');
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

const button = document.getElementById('.confetti-button');

button.addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});