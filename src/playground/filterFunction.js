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


// I want to filter product using filter function
// filter: it will create a new array by calling a function for each array element that passes a condition.

var filterData = Products.filter((data) => data.category === "Computer" );
console.log("Filter Data: ",filterData);

// == : it will check only value
// === : it will check value & its datatype
