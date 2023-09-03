// let today = document.querySelector(".date");

// today.innerHTML = new Date();

// console.log(today.toLocaleString());
// const today = document.querySelector(".date");
// let date = new Date();
// date = date.toLocaleString();
// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let month = date.getMonth();
// let hour = date.getHours();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();
// setInterval(() => {
//     let ms = date.getMilliseconds();
//     if(ms<5){
//         console.log("We are the champion");
//     }else{
//         console.log(ms);
//     }
    
// }, 5000);

// date.setFullYear(2000);
// date.setMonth(2);
// date.setDate(2);
// date.setHours(12);
// date.setMinutes(0);
// date.setSeconds(0);

// document.querySelector(".date").innerHTML = formatTime(date);
// // console.log(today);

// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }
// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" : "am";

//     hours = (hours % 12) || 12;

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`
// }
// synchronous code = In an ordered sequence.
//                                      Step-by-step linear instructions
//                                     (start now, finish now)
 
// asynchronous code = Out of sequence.
//                                        Ex. Access a database
//                                              Fetch a file
//                                              Tasks that take time
//                                        (start now, finish sometime later)

// synchronous
// console.log("START");

// // asynchronous
// setTimeout(() => console.log("This is asynchronous"), 5000);

// // synchronous
// console.log("END");

// console.time() = Starts a timer you can use to 
//                               track how long an operation takes
//                              Give each timer a unique name.

//start
// console.time("Response time");

// alert("CLICK THE OK BUTTON!");
// //setTimeout(() => console.log("HELLO!"), 3000);

// //end
// console.timeEnd("Response time");




let myLabel = document.querySelector(".date");
update();
setInterval(update, 1000);
myLabel.style.display = "flex";
myLabel.style.width = "100%"
myLabel.style.height = "100vh";
myLabel.style.background = "black";
myLabel.style.alignItems = "center";
myLabel.style.justifyContent = "center";
myLabel.style.color = "white";
myLabel.style.fontSize = "45px";
myLabel.style.margin = "0px";
myLabel.style.padding = "0px";
myLabel.style.boxSizing = "border-box";
myLabel.style.fontFamily = "Poppins";


// const update = (()=>{
//     let date = new Date;
//     myLabel.innerHTML = date;
// });
function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours > 12 ? "pm":"am"

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

}




// promise = object that encapsulates the result of an asynchronous operation
//                   let asynchronous methods return values like synchronous methods
//                   "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// ------------- Example 1 -------------
// const promise = new Promise((resolve, reject) => {
 
//     let fileLoaded = false;
 
//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File NOT loaded");
//     }
// });
 
// promise.then(value => console.log(value))
//               .catch(error => console.log(error));

// // ------------- Example 2 -------------

// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"));

//import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);

console.log(document)