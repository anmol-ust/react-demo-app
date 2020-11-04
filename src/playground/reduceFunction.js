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


// I want to get a sum of price of all product
// reduce: it will call a function for each array element & will return a single value
// var data = Products.map((d) => d.price);
// console.log("Prices: ",data);
// var totalPrice = data.reduce((prev,current) => prev += current);  //prev = prev + current
// console.log("Total Amount: ",totalPrice);

// optimized code
var totalPrice = Products.map((d) => d.price).reduce((prev,current) => prev += current);
console.log("Total Amount: ",totalPrice);
