const products = [
    {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
    },
    {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
    },
    {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
    },
    {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
    },
    {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
    }
];

//getting the fields
const select = document.querySelector("#product");

products.forEach((product) => {

    const productElement = document.createElement("option");
    productElement.value = product.id;
    productElement.innerHTML = product.name;
    select.appendChild(productElement);
});