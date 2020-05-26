let intViewportHeight = window.innerHeight;

const navbar = document.querySelector("#navbar");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > intViewportHeight - 400 ) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
}
