document.addEventListener("DOMContentLoaded", function () {


// Select the container for the testimonials and the arrows
const testimonyFlasher = document.querySelector('.testimony_flasher');



// Set an initial index to track the active testimony
let currentIndex = 0;

// Function to change the displayed testimony
function updateTestimony() {
  const width = 100 / 6;  // Each testimony takes up 100% / 6 testimonies
  testimonyFlasher.style.transform = `translateX(-${currentIndex * width}%)`;
}

const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Add event listeners for the arrows
leftArrow.addEventListener('click', () => {
  // If we are at the first testimony, loop back to the last one
  if (currentIndex === 0) {
    currentIndex = 5;
  } else {
    currentIndex--;
  }
  updateTestimony();
  resetInterval();
});

rightArrow.addEventListener('click', () => {
  // If we are at the last testimony, loop back to the first one
  if (currentIndex === 5) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateTestimony();
  resetInterval();
});

    const testimonies = document.querySelectorAll(".testimony");
    const intervalTime = 9000; // Change slide every 4 seconds

    function showNextTestimony() {
        

        currentIndex = (currentIndex + 1) % testimonies.length; // Loop back when reaching the end
        updateTestimony();
        
    }

    // Start the auto-scroll
    let autoScroll = setInterval(showNextTestimony, intervalTime);

    function resetInterval() {
        clearInterval(autoScroll); // Stop the current interval
        autoScroll = setInterval(showNextTestimony, intervalTime); // Restart auto-scroll
    }


    document.querySelectorAll(".clickable-img").forEach(img => {
    img.addEventListener("click", function() {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = this.src.replace('thumb', '');
    });
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("lightbox").style.display = "none";
});

document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target !== document.getElementById("lightbox-img")) {
        this.style.display = "none";
    }
});






});

