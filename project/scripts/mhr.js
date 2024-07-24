//Menu

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
menuBtn.addEventListener("click", displayMenu);

function displayMenu()
{
    if (menu.classList.contains("notVisible"))
    {
        menu.classList.replace("notVisible", "visible");
    } else if (!menu.classList.contains("notVisible")) {
        (menu.classList.replace("visible", "notVisible"));
    }
}

/* Monsters slideshow */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length)
    {
        slideIndex = 1
    }
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++)
    {
        slides[i].classList.replace("visible", "notVisible");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].classList.replace("notVisible", "visible");
    dots[slideIndex-1].classList.add("active");
}

const monsterData = ;
const descContainer = document.querySelector("#description");

