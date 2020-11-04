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

// I want to get product where product name is Eraser
// find: it will return a data by calling a function for each array element that pass a condition.

var product = Products.find((data) => data.name === "Eraser");
console.log("Prodct: ",product);
