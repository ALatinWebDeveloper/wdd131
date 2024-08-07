const hunting_areas = [
    {
        "name": "Shrine Ruins",
        "description": "Once a place where people prayed for protection, this shrine has fallen into decay and is now haunted by the roars of monsters, day and night. However, it still maintains its holy nature and exudes a mysterious aura.",
        "img_location": "https://example.com/shrine_ruins.jpg"
    },
    {
        "name": "Frost Islands",
        "description": "The Frost Islands used to be the nest of a gigantic dragon. Many heroes lost their lives trying to slay the beast, turning it into a barren place of desolation and death. In the center of the islands lie giant dragon bones and the remnants of a Dragonship, the final traces left by a desperate struggle.",
        "img_location": "https://example.com/frost_islands.jpg"
    },
    {
        "name": "Sandy Plains",
        "description": "A desolate wasteland, filled with aggressive monsters that hunger for flesh and blood. During the day, the sun beats down on the plains mercilessly, but at night it's lit up by the cool moonlight.",
        "img_location": "https://example.com/sandy_plains.jpg"
    },
    {
        "name": "Flooded Forest",
        "description": "A dense region of deep, dark green. Due to a constant flow of water, the majority of this forest has become submerged. The eye-catching ruins here can be scaled by using the Wirebug.",
        "img_location": "https://example.com/flooded_forest.jpg"
    },
    {
        "name": "Lava Caverns",
        "description": "A network of caverns filled with molten lava. The intense heat and treacherous terrain make it a dangerous place to hunt, but it is home to many powerful monsters.",
        "img_location": "https://example.com/lava_caverns.jpg"
    }
]

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
    document.querySelector(".monsterName").textContent = hunting_areas[slideIndex-1].name;
    document.querySelector(".monsterDesc").textContent = hunting_areas[slideIndex-1].description;
}