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

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}