let intViewportHeight = window.innerHeight;
console.log(intViewportHeight);
window.onscroll = function() {myFunction()};
const customnav = document.querySelector(".customnav")

function myFunction() {
  if (document.body.scrollTop > intViewportHeight - 10) {
    customnav.style.display = "flex";
    customnav.classList.add("solidbackground");
    customnav.classList.remove("opacitybackground");
  } else if (document.body.scrollTop < intViewportHeight) {
    customnav.style.display = "none";
    customnav.classList.add("opacitybackground");
    customnav.classList.remove("solidbackground")

  }
}
