let intViewportHeight = window.innerHeight;
console.log(intViewportHeight);
const navbar = document.querySelector("#navbar");

window.onscroll = function() {myFunction()};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > intViewportHeight - 10 ) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
}
