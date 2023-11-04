const galleryImage = document.getElementById("gallery-image");

const images = [
  "tree1.jpg",
  "tree2.jpg",
  "tree3.jpg",
  "tree9.jpg",
  "tree10.jpg",
  "tree11.jpg",
  "tree12.jpg",
  "tree13.jpg",
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
