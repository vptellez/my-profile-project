$(document).ready(function(){
  $('#carousel-1').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1800,
    autoplayHoverPause: false,
    mouseDrag: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 5
      },
      1000: {
        items: 7
      }
    }
  });
});

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const listsContainer = document.getElementById("lists-container");

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  listsContainer.classList.toggle("open");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("visible");
}

let img = document.querySelectorAll(".img-effect");
let constrain = 2;
let perspective = 1200;

img.forEach(function(img) {
  img.addEventListener("mousemove", function(e) {
    let mousex = e.clientX;
    let mousey = e.clientY;
    let shape = img.getBoundingClientRect();
    let y = (mousex - shape.x - shape.width / 2) / constrain;
    let x = -(mousey - shape.y - shape.height / 2) / constrain;
    img.style.transform = `perspective(${perspective}px) rotateX(${x}deg) rotateY(${y}deg)`;
  });
  img.addEventListener("mouseout", function(e) {
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

document.querySelectorAll('nav a, .button').forEach(function(element) {
  element.addEventListener('click', function(event) {
    var id = this.getAttribute("href");
    var offset = 50;
    var target = document.querySelector(id).offsetTop - offset;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
    event.preventDefault();
  });
});

$(window).scroll(function() {
  if ($(".page-header").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".top-nav .logo").addClass("logo-nav-collapse");
      $(".top-nav .lists-container .social-list").addClass("social-nav-collapse");
      $(".top-nav .lists-container .link-list .nav-link").addClass("link-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".top-nav .logo").removeClass("logo-nav-collapse");
      $(".top-nav .lists-container .social-list").removeClass("social-nav-collapse");
      $(".top-nav .lists-container .link-list .nav-link").removeClass("link-nav-collapse");
  }
});