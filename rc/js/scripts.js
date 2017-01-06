var slides = document.querySelectorAll('#slider .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 10000);

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('slider_next');
var prev = document.getElementById('slider_previous');
next.onclick = function() {
  nextSlide();
};

prev.onclick = function() {
  previousSlide();
};
