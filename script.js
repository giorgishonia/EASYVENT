const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 90) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

const scrollUpBtn = document.getElementById('scrollUpBtn');

// When the user scrolls down 20px or more from the top, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
scrollUpBtn.onclick = function() {  
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
};


function smoothScroll(target, duration) {
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  const ease = (t, b, c, d) => { 
      // A simple ease-out function for basic smoothing
      t /= d/2; 
      if (t < 1) return c/2 * t * t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };

  requestAnimationFrame(animation);
}

// Example Usage (assuming a button with ID "scrollBtn"):
const scrollBtn = document.getElementById('scrollBtn');
const targetElement = document.getElementById('targetSection');


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});