document.addEventListener("DOMContentLoaded", function() {

document.getElementById("viewWorkBtn")
.addEventListener("click", function() {
document.getElementById("projects")
.scrollIntoView({
behavior: "smooth"
});
});

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

slideIndex = index;
}

function currentSlide(index) {
showSlide(index);
}

function autoSlide() {
slideIndex++;
if(slideIndex >= slides.length){
slideIndex = 0;
}
showSlide(slideIndex);
}

/* Auto Slide every 5 seconds */
setInterval(autoSlide, 6000);

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;

});