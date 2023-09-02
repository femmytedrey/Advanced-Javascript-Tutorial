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
myLabel.style.fontSize = "70px";
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
