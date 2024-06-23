const menuBtn = document.querySelector("#menuIcon");
const navMenu = document.querySelector("nav");

menuBtn.addEventListener("click", () =>{
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open"))
        {
            menuBtn.innerHTML = `<p>x</p>`;
        }
        else if(menuBtn.innerHTML = `<p>x</p>`)
        {
            menuBtn.innerHTML = `<p>☰</p>`;
        }
});