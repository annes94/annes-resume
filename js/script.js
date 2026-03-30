document.addEventListener("DOMContentLoaded", function() {

document.getElementById("viewWorkBtn")
.addEventListener("click", function() {
document.getElementById("projects")
.scrollIntoView({
behavior: "smooth"
});
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove("active");
if (i === index) {
slide.classList.add("active");
}
});
}

function nextSlide() {
currentSlide++;
if (currentSlide >= slides.length) {
currentSlide = 0;
}
showSlide(currentSlide);
}

function prevSlide() {
currentSlide--;
if (currentSlide < 0) {
currentSlide = slides.length - 1;
}
showSlide(currentSlide);
}

/* Auto Slide every 5 seconds */
setInterval(nextSlide, 5000);

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;

});