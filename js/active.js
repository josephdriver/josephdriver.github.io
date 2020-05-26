const myStoryOffset = mystory.offsetTop;
const projectsOffset = projects.offsetTop;
const contactOffset = contact.offsetTop;

let scrollpos = 0;

window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > myStoryOffset - 10 && scrollpos < projectsOffset) {
    console.log("My story active");
    mystorynav.style.color = "#00adb5";
  } else {
    mystorynav.style.color = "#222831";
  }
});

window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > projectsOffset - 10 && scrollpos < contactOffset) {
    console.log("My story active");
    projectsnav.style.color = "#00adb5";
  } else {
    projectsnav.style.color = "#222831";
  }
});

window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  console.log(contactOffset);
  console.log(scrollpos);
  if (scrollpos > contactOffset) {
    console.log("My story active");
    contactnav.style.color = "#00adb5";
  } else {
    contactnav.style.color = "#222831";
  }
});
