



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const logoImg = document.querySelector('.logo-img');
    logoImg.style.animationPlayState = 'running'; // Trigger the animation
});


// Add event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements within the section
    const elements = document.querySelectorAll(".first-section *");
  
    // Add the 'hidden' class initially
    elements.forEach((element) => {
      element.classList.add("hidden");
    });
  
    // Trigger animations with a slight delay for each element
    setTimeout(() => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 100); // Delay based on element index
      });
    }, 500); // Wait for 500ms before starting the animation
  });
  

  const text = "Join the Top Affiliate Network with Proven Success";
  const speed = 100; // Typing speed in milliseconds

  const typeEffect = async () => {
    // Use optional chaining and type guard
    const element = document.getElementById("animated-text");
    if (element) {
      let i = 0;
      while (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    } else {
      console.error("Element with ID 'animated-text' not found.");
    }
  };

  typeEffect();


  
  const scrollSection = document.querySelector('.scroll-section');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  
  const scrollAmount = 300; // Adjust how much to scroll per click
  let isInteracting = false; // Flag to check user interaction
  let animationFrameId; // ID to track the animation frame
  
  // Scroll buttons functionality
  leftBtn.addEventListener('click', () => {
    isInteracting = true;
    scrollSection.scrollLeft -= scrollAmount; // Scroll left
    resumeAutoScroll(); // Resume auto-scroll after interaction
  });
  
  rightBtn.addEventListener('click', () => {
    isInteracting = true;
    scrollSection.scrollLeft += scrollAmount; // Scroll right
    resumeAutoScroll(); // Resume auto-scroll after interaction
  });
  


// Infinite scrolling animation
function startAutoScroll() {
  if (!isInteracting) {
    scrollSection.scrollLeft += 1; // Adjust speed of scrolling
    if (scrollSection.scrollLeft >= scrollSection.scrollWidth - scrollSection.clientWidth) {
      scrollSection.scrollLeft = 0; // Reset scroll position for infinite effect
    }
  }
  animationFrameId = requestAnimationFrame(startAutoScroll); // Continuously call the function
}

// Resume auto-scroll after manual interaction
function resumeAutoScroll() {
  setTimeout(() => {
    if (!isInteracting) {
      startAutoScroll();
    }
  }, 1000); // Add a delay before resuming auto-scroll
}

// Start the auto-scroll animation
startAutoScroll();





const financeCard = document.getElementById("finance-card");
const floatContainer = document.getElementById("float-container");

// Open the floating container when the "Finance" card is clicked
financeCard.addEventListener("click", () => {
  floatContainer.style.display = "block";
});

// Close the floating container when a list item is clicked
floatContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    floatContainer.style.display = "none"; // Hide the container
    console.log(`You clicked on: ${e.target.textContent}`); // Log the clicked item
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about');
  const heading = document.querySelector('.about-heading');
  const images = document.querySelectorAll('.about-image');
  const text = document.querySelector('.about-text');

  // Intersection Observer for detecting when the section is in view
  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Trigger animations when section is visible
                  heading.style.animation = 'slideInFromTop 1s ease-out forwards';
                  text.style.animation = 'slideInFromRight 1s ease-out forwards';

                  images.forEach((image, index) => {
                      image.style.animation = `slideInFromLeft ${0.5 + index * 0.3}s ease-out forwards`;
                  });

                  // Disconnect observer to prevent multiple triggers
                  observer.disconnect();
              }
          });
      },
      {
          root: null, // Default is the viewport
          rootMargin: '0px', // Adjust margins for mobile if needed
          threshold: 0.2, // Trigger when 20% of the section is visible
      }
  );

  observer.observe(aboutSection);
});




document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Prevent the default right-click menu from appearing
  alert("you cant see the backend , sorry😥");
});

  // Function to check if developer tools are open
  function detectDevTools() {
    const threshold = 160; // Width/Height threshold for dev tools
    let devtoolsOpen = false;

    // Check if the window is resized to an unusual size (dev tools may cause this)
    window.onresize = function () {
      if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        devtoolsOpen = true;
        console.log("Developer Tools Detected");
        alert("Please close Developer Tools to continue.");
      } else {
        devtoolsOpen = false;
      }
    };

    // Monitor unusual debugging operations (like `debugger`)
    const element = new Image();
    Object.defineProperty(element, 'id', {
      get: function () {
        devtoolsOpen = true;
        console.log("Developer Tools Detected");
        alert("Please close Developer Tools to continue.");
      },
    });

    setInterval(() => {
      console.log('%c', element);
    }, 1000);
  }

  // Call the function to start detection
  detectDevTools();