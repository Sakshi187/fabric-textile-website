(function () {
  const fabric_slides = document.querySelectorAll('.fabric-slide');
  let fabric_currentIndex = 0;

  // Hide all images initially except the first
  fabric_slides.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
  });

  setInterval(() => {
    // Hide current image
    fabric_slides[fabric_currentIndex].style.display = 'none';

    // Move to next image
    fabric_currentIndex = (fabric_currentIndex + 1) % fabric_slides.length;

    // Show next image
    fabric_slides[fabric_currentIndex].style.display = 'block';
  }, 3000); // Change every 3 seconds
})();
