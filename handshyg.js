const galleryImage = document.getElementById("gallery-image");

const images = [
  "handshyg7.jpg",
  "handshyg8.jpg",
  "handshyg9.jpg",
  "handshyg10.jpg",
  "handshyg11.jpg",
  "handshyg12.jpg",
  "handshyg13.jpg",
  "handshyg14.jpg",
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
