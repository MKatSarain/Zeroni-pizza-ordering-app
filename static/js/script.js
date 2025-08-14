// VARIABLES
const images = document.querySelectorAll('.gallery-container img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dropBtn = document.querySelector('.drop-btn');
const dropDown = document.getElementById('dropDown');


// FUNCTIONS
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
};

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 5000);
};

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
};

// EVENT LISTENERS
// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   showImage(currentIndex);
//   resetAutoSlide();
// });


// FUNCTION CALLS
showImage(currentIndex);
startAutoSlide();
