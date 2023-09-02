// let width;
// let height;
// let area;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is ", area)

// function getArea(width, height){
//     return width * height;
// } 

// checkWinner(false);

// function checkWinner(win){
//     win ? console.log('YOU WIN') : console.log('YOU LOSE');
// }



const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){

  let guess = document.getElementById("guessField").value
  guesses+=1;
  
  if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guesses`);
  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!"); 
  }
}

// array = think of it as a variable 
//              that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut";

//fruits.push("lemon");      //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                   //removes element from beginning

//let length = fruits.length;
//let index = fruits.indexOf("kiwi");

console.log(fruits);



fruits = fruits.sort();
//fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}