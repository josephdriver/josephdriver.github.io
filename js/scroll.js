const home = document.querySelector("#home");
const mystory = document.querySelector("#mystory");
const projects = document.querySelector("#projects");
const rightdose = document.querySelector("#rightdose");
const milehigh = document.querySelector("#milehigh");
const cocktail = document.querySelector("#cocktail");
const shifty = document.querySelector("#shifty");
const io = document.querySelector("#io");
const contact = document.querySelector("#contact");


const homenav = document.querySelector("#homenav");

const mystorybanner = document.querySelector("#mystorybanner");
const mystorynav = document.querySelector("#mystorynav");
const tomystory = document.querySelector("#tomystory");

const projectsbanner = document.querySelector("#projectsbanner");
const projectsnav = document.querySelector("#projectsnav");
const toprojects = document.querySelector("#toprojects");

const contactbanner = document.querySelector("#contactbanner");
const contactnav = document.querySelector("#contactnav");
const tocontact = document.querySelector("#tocontact");


//Scroll event for Home element
homenav.addEventListener("click", (event) => {
  event.preventDefault();
  home.scrollIntoView( {behavior: 'smooth'} );
});


//Scroll events for My Story element
mystorynav.addEventListener("click", (event) => {
  event.preventDefault();
  mystory.scrollIntoView( {behavior: 'smooth'} );
});

mystorybanner.addEventListener("click", (event) => {
  event.preventDefault();
  mystory.scrollIntoView( {behavior: 'smooth'} );
});

tomystory.addEventListener("click", (event) => {
  event.preventDefault();
  mystory.scrollIntoView( {behavior: 'smooth'} );
});

//Scroll events for Projects element
projectsnav.addEventListener("click", (event) => {
  event.preventDefault();
  projects.scrollIntoView( {behavior: 'smooth'} );
});

projectsbanner.addEventListener("click", (event) => {
  event.preventDefault();
  projects.scrollIntoView( {behavior: 'smooth'} );
});

toprojects.addEventListener("click", (event) => {
  event.preventDefault();
  projects.scrollIntoView( {behavior: 'smooth'} );
});

//Scroll events for subprojects elements
rightdosenav.addEventListener("click", (event) => {
  event.preventDefault();
  rightdose.scrollIntoView( {behavior: 'smooth'} );
});

milehighnav.addEventListener("click", (event) => {
  event.preventDefault();
  milehigh.scrollIntoView( {behavior: 'smooth'} );
});

cocktailnav.addEventListener("click", (event) => {
  event.preventDefault();
  cocktail.scrollIntoView( {behavior: 'smooth'} );
});

shiftynav.addEventListener("click", (event) => {
  event.preventDefault();
  shifty.scrollIntoView( {behavior: 'smooth'} );
});

ionav.addEventListener("click", (event) => {
  event.preventDefault();
  io.scrollIntoView( {behavior: 'smooth'} );
});

//Scroll events for contact element
contactnav.addEventListener("click", (event) => {
  event.preventDefault();
  contact.scrollIntoView( {behavior: 'smooth'} );
});

contactbanner.addEventListener("click", (event) => {
  event.preventDefault();
  contact.scrollIntoView( {behavior: 'smooth'} );
});

tocontact.addEventListener("click", (event) => {
  event.preventDefault();
  contact.scrollIntoView( {behavior: 'smooth'} );
});
