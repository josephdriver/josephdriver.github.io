const myStoryOffset = mystory.offsetTop;
const projectsOffset = projects.offsetTop;
const rightdoseOffset = rightdose.offsetTop;
const milehighOffset = milehigh.offsetTop;
const cocktailOffset = cocktail.offsetTop;
const shiftyOffset = shifty.offsetTop;
const contactOffset = contact.offsetTop;

const hidden = document.querySelector("#hidden");

let scrollpos = 0;

//My Story Active
window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > myStoryOffset - 1 && scrollpos < projectsOffset - 2) {
    mystorynav.style.color = "#00adb5";
  } else {
    mystorynav.style.color = "#222831";
  }
});

//My Project Active
window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > projectsOffset - 1 && scrollpos < contactOffset - 20) {
    projectsnav.style.color = "#00adb5";
    hidden.style.display = "flex";
  } else {
    projectsnav.style.color = "#222831";
    hidden.style.display = "none";
  }
});

//Right Dose Active
window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > projectsOffset - 1 && scrollpos < milehighOffset - 1) {
    console.log("My story active");
    rightdosenav.style.color = "#00adb5";
  } else {
    rightdosenav.style.color = "#222831";
  }
});

//Mile High Active
window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > milehighOffset - 1 && scrollpos < cocktailOffset - 1) {
    milehighnav.style.color = "#00adb5";
  } else {
    milehighnav.style.color = "#222831";
  }
});

//Cocktail Active
window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > cocktailOffset - 1 && scrollpos < shiftyOffset - 1) {
    cocktailnav.style.color = "#00adb5";
  } else {
    cocktailnav.style.color = "#222831";
  }
});

//Shifty Active
window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > shiftyOffset - 1 && scrollpos < contactOffset - 30) {
    console.log("My story active");
    shiftynav.style.color = "#00adb5";
  } else {
    shiftynav.style.color = "#222831";
  }
});

window.addEventListener('scroll', (event) => {
  scrollpos = window.scrollY;
  if (scrollpos > contactOffset - 30) {
    console.log("My story active");
    contactnav.style.color = "#00adb5";
  } else {
    contactnav.style.color = "#222831";
  }
});
