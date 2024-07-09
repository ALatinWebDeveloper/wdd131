const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Hartford Connecticut Temple",
        location: "Farmington, Connecticut, United States",
        dedicated: "2016, November, 20",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hartford-connecticut/400x250/hartford-temples-steeples-angel-moroni-1808856-wallpaper.jpg"
    },
    {
        templeName: "Helsinki Finland Temple",
        location: "Espoo, Uusimaa, Finland",
        dedicated: "2006, October, 22",
        area: 556178,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/800x450/helsinki-finland-temple-lds-354498-wallpaper.jpg"
    },
    {
        templeName: "Ogden Utah Temple",
        location: "Ogden, Utah, United States",
        dedicated: "1972, January, 18",
        area: 155478,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/800x500/ogden-utah-temple-1300442-wallpaper.jpg"
    }
  ];

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

displayAlbum(temples);

//Filter for larger

const largeBtn = document.querySelector("#largeBtn");
largeBtn.addEventListener("click", () =>
{
  document.querySelector("#album").innerHTML = "";
  displayAlbum(temples.filter(temple => temple.area > 90000));
});

//Filter for smaller

const smalBtn = document.querySelector("#smalBtn");
smalBtn.addEventListener("click", () =>
{
  document.querySelector("#album").innerHTML = "";
  displayAlbum(temples.filter(temple => temple.area < 10000));
});

//Filter for old

const oldBtn = document.querySelector("#oldBtn");
oldBtn.addEventListener("click", () =>
{
  document.querySelector("#album").innerHTML = "";

  displayAlbum(temples.filter(temple => temple.dedicated.split(", ")[0] < 1900));
});

//Filter for new

const newBtn = document.querySelector("#newBtn");
newBtn.addEventListener("click", () =>
{
  document.querySelector("#album").innerHTML = "";

  displayAlbum(temples.filter(temple => temple.dedicated.split(", ")[0] > 2000));
});

//Display All

const allBtn = document.querySelector("#allBtn");
allBtn.addEventListener("click", () =>
{
  document.querySelector("#album").innerHTML = "";

  displayAlbum(temples);
});

//Construction of the page content

function displayAlbum(filteredTemples)
{
  document.querySelector("#album").innerHTML = "";

  filteredTemples.forEach(temple => {
    
    const figure = document.createElement("figure");
    const ul = document.createElement("ul");

    const figcaption = document.createElement("figcaption");
    const locationObj = document.createElement("li");
    const dedicatedObj = document.createElement("li");
    const areaTextObj = document.createElement("li");
    const imageObj = document.createElement("img");
    
    //Population of the objects

    figcaption.textContent = temple.templeName;
    locationObj.textContent = temple.location;
    dedicatedObj.textContent = temple.dedicated;
    areaTextObj.textContent = temple.area;
    imageObj.setAttribute("src", temple.imageUrl);
    imageObj.setAttribute("load", "lazy");
    imageObj.setAttribute("alt", `${temple.templeName} Temple`);

    //Appending objects

    figure.appendChild(figcaption);
    figure.appendChild(ul);
    ul.appendChild(locationObj);
    ul.appendChild(dedicatedObj);
    ul.appendChild(areaTextObj);
    figure.appendChild(imageObj);

    document.querySelector("#album").appendChild(figure);
});
};

