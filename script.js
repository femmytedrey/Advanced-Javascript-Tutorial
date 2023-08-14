let width;
let height;
let area;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is ", area)

function getArea(width, height){
    return width * height;
} 

checkWinner(false);

function checkWinner(win){
    win ? console.log('YOU WIN') : console.log('YOU LOSE');
}
