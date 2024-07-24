const monsters = [
        {
            "name": "Magnamalo",
            "description": "Magnamalo is the flagship monster of Monster Hunter Rise, known for its fearsome appearance and deadly abilities. This fanged wyvern is clad in armor-like carapace, resembling tempered steel, and is surrounded by a sinister vapor."
        },
        {
            "name": "Mizutsune",
            "description": "Mizutsune is a specially evolved Leviathan with a sleek, lithe body. It can secrete a peculiar foam that covers its foes in immobilizing bubbles. Once its prey's movement is impaired, it closes in with spry, dance-like movements."
        },
        {
            "name": "Zinogre",
            "description": "Zinogre is a giant wolf-like creature that is both powerful and dangerous. It can gather Thunderbugs in the environment to charge its body with electricity, making it a formidable opponent."
        },
        {
            "name": "Tigrex",
            "description": "Tigrex is a fierce and powerful monster, known for its relentless aggression and powerful strikes. It can use its massive claws and tail to lash out at hunters, and has a powerful roar that can stun even the bravest of warriors."
        },
        {
            "name": "Diablos",
            "description": "Diablos is a large, bipedal wyvern with two massive horns. Known as the Tyrant of the Desert, it is highly territorial and will fiercely defend its territory from intruders. Diablos can burrow underground and launch surprise attacks, making it a formidable opponent."
        }
    ];

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
    document.querySelector(".monsterName").textContent = monsters[slideIndex-1].name;
    document.querySelector(".monsterDesc").textContent = monsters[slideIndex-1].description;
}