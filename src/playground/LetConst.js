// const keyword
const fullname = "Anmol Chaware";
// fullname = "Suhas Kawale";
console.log("Fullname: ",fullname);

// let keyword
function Welcome(){
    let message = "Good Afternoon";
    function Render(){
        return message;
    }
    console.log("Welcome Text: ",Render());
}
// console.log("Outside Welcome Text",message);
Welcome();