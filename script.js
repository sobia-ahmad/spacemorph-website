// Grabbing elements by class to display main menu
let navMenu = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.nav-toggle');
let navClose = document.querySelector('.nav-close');

// Menu concealed
// Menu hidden with this on click if statement
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}
// Menu revealed
// Menu shown with this on click if statement
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}



// Conceal mobile menu
let navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    let navMenu = document.querySelector('.nav-menu');
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Header changed when page is scrolled away from nav area 
function scrollHeader(){
    const header = document.querySelector('.header');
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);





