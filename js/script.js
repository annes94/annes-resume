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

window.currentSlide = function(index) {
showSlide(index);
}

function autoSlide() {
slideIndex++;
if(slideIndex >= slides.length){
slideIndex = 0;
}
showSlide(slideIndex);
}

setInterval(autoSlide, 6000);

});