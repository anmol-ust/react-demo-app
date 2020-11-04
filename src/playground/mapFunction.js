var Products = [
    {
        name:"Mouse",price:200, category:"Computer"
    },
    {
        name:"Keyboard",price:300, category:"Computer"
    },
    {
        name:"Pendrive",price:700, category:"Computer"
    },
    {
        name:"Eraser",price:5,category:"Stationary"
    }
];

// I want to manipulate array using map function
//map: it will create a new array by calling a function for each array element

var mapData = Products.map((data) => data.name+" - "+data.category);

console.log("Product Name: ",mapData);