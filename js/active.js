const hidden = document.querySelector("#hidden");

//My Story Active
window.addEventListener('scroll', (event) => {
  if (window.scrollY > mystory.offsetTop - 1 && window.scrollY < projects.offsetTop - 2) {
    mystorynav.style.color = "#00adb5";
  } else {
    mystorynav.style.color = "#222831";
  }
});

//My Project Active
window.addEventListener('scroll', (event) => {
  if (window.scrollY > projects.offsetTop - 1 && window.scrollY < contact.offsetTop - 20 && window.innerWidth > 740) {
    projectsnav.style.color = "#00adb5";
    hidden.style.display = "flex";
  } else if (window.scrollY > projects.offsetTop - 1 && window.scrollY < contact.offsetTop - 20 && window.innerWidth < 740) {
      projectsnav.style.color = "#00adb5";
  } else {
    projectsnav.style.color = "#222831";
    hidden.style.display = "none";
  }
});

//Right Dose Active
window.addEventListener('scroll', (event) => {
  if (window.scrollY > projects.offsetTop - 1 && window.scrollY < milehigh.offsetTop - 10) {
    rightdosenav.style.color = "#00adb5";
  } else {
    rightdosenav.style.color = "#222831";
  }
});

//Mile High Active
window.addEventListener('scroll', (event) => {
  if (window.scrollY > milehigh.offsetTop - 9 && window.scrollY < cocktail.offsetTop - 10) {
    milehighnav.style.color = "#00adb5";
  } else {
    milehighnav.style.color = "#222831";
  }
});

//Cocktail Active
window.addEventListener('scroll', (event) => {
  if (window.scrollY > cocktail.offsetTop - 9 && window.scrollY < shifty.offsetTop - 10) {
    cocktailnav.style.color = "#00adb5";
  } else {
    cocktailnav.style.color = "#222831";
  }
});

//Shifty Active
window.addEventListener('scroll', (event) => {
  if (window.scrollY > shifty.offsetTop - 9 && window.scrollY < io.offsetTop - 10) {
    shiftynav.style.color = "#00adb5";
  } else {
    shiftynav.style.color = "#222831";
  }
});

window.addEventListener('scroll', (event) => {
  if (window.scrollY > io.offsetTop - 9 && window.scrollY < contact.offsetTop - 30) {
    ionav.style.color = "#00adb5";
  } else {
    ionav.style.color = "#222831";
  }
});

window.addEventListener('scroll', (event) => {
  if (window.scrollY > contact.offsetTop - 29) {
    contactnav.style.color = "#00adb5";
  } else {
    contactnav.style.color = "#222831";
  }
});
