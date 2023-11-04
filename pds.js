const galleryImage = document.getElementById("gallery-image");

const images = [
  "pds6.jpg",
  "pds7.jpg",
  "pds8.jpg",
  "pds9.jpg",
  "pds10.jpg",
  "pds11.jpg",
  "pds12.jpg",
  "pds13.jpg",
  "pds14.jpg",
  "group1.jpg",
  "group2.jpg",
  "group3.jpg",
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
  setInterval(showNextImage, 2500); // Change image every 3 seconds (3000 milliseconds)
}

startSlideshow();
