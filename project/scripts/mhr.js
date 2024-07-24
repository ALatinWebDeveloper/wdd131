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
const descContainer = document.querySelector("#description");