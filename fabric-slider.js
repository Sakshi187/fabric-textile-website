(function () {
  const fabric_slides = document.querySelectorAll('.fabric-slide');
  let fabric_currentIndex = 0;

 
  fabric_slides.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
  });

  setInterval(() => {
    
    fabric_slides[fabric_currentIndex].style.display = 'none';

    
    fabric_currentIndex = (fabric_currentIndex + 1) % fabric_slides.length;

    
    fabric_slides[fabric_currentIndex].style.display = 'block';
  }, 3000); 
})();
