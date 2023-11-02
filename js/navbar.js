// Navication_Bar Effect
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

// Responsive Menu
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});
closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

// Navbar Active
const li=document.querySelectorAll(".links");
const sec=document.querySelectorAll("section");

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);
