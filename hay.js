const galleryImage = document.getElementById("gallery-image");

const images = [
  "health12.jpg",
  "health13.jpg",
  "health14.jpg",
  "health15.jpg",
  "health16.jpg",
  "health17.jpg",
  "health18.jpg",
  "health19.jpg",
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
