var slides = document.querySelectorAll('.item');
var buttons = document.getElementsByName('slide_control');
var labels = document.querySelectorAll('.container label');
var currentSlide = 0;
var interval = setInterval (a, 1000);

function a(n) {
  n === undefined ? n=window.currentSlide : n=n;
  n<5 ? n=n : n=0;
  for (var i=0;i<=slides.length-1;i++) {
    slides[i].className = 'item';
    labels[i].className = '';
  }
  slides[n].className = 'active_item item';
  labels[n].className = 'active_label';
  buttons[n].checked = true;
  window.currentSlide = (n+1)%slides.length;
  console.log(currentSlide);
}

var testi = document.querySelectorAll('.testimonials_item');
var btns = document.getElementsByName('testimonials_control');
var lbls = document.querySelectorAll('.testimonials_container label');
var crnt = 0;
var intt = setInterval (b, 1000);

function b(m) {
  m === undefined ? m = crnt : m = m;
  m<3 ? m = m : m = 0;
  for (var i=0; i<=testi.length-1;i++) {
    testi[i].className = 'testimonials_item';
    lbls[i].className = '';
  }
  testi[m].className = 'testimonials_active testimonials_item';
  lbls[m].className = 'active_testi_label';
  btns[m].checked = true;
  window.crnt = (m+1)%testi.length;
  console.log(crnt);
}
