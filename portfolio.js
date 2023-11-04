const galleryImage = document.getElementById("gallery-image");

const images = [
  "port1.jpg",
  "port2.jpg",
  "port3.jpg",
  "port4.jpg",
  "port5.jpg",
  "port6.jpg",
  "port7.jpg",
  "port8.jpg",
  "port9.jpg",
  "port10.jpg",
  "port11.jpg",
  "port12.jpg",
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
