let intViewportHeight = window.innerHeight;
console.log(intViewportHeight);
window.onscroll = function() {myFunction()};
const navbar = document.querySelector("#navbar");
const mystorylink = document.querySelector("#mystorylink");
const mystorydiv = document.querySelector("#mystory");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > intViewportHeight - 10 ) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
}
