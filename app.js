const hamburger= document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navExt = document.querySelectorAll(".nav-ext");

hamburger.addEventListener("click",mobileMenu);
navExt.forEach(n => n.addEventListener("click",closeMenu));

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}