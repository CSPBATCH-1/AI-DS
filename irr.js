const galleryImage = document.getElementById("gallery-image");

const images = [
  "irr15.jpg",
  "irr16.jpg",
  "irr17.jpg",
  "irr18.jpg",
  "irr19.jpg",
  "irr20.jpg",
  "irr21.jpg",
  "irr22.jpg",
  "irr23.jpg",
];

let currentIndex = 0;

function showImage(index) {
  galleryImage.src = images[index];
  currentIndex = index;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function startSlideshow() {
  showImage(currentIndex);
  setInterval(showNextImage, 4000); // Change image every 3 seconds (3000 milliseconds)
}

startSlideshow();
