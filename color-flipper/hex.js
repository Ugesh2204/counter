const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//# hex value = 0-9 and letters A-F 10 11 12 13 14 15
//#f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
 //we need a loop to run 6 times   
 let hexColor ='#';
 for(let i = 0 ; i < 6; i++){
  hexColor += hex[getRandomNumber()];
 }
 color.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
 console.log(hexColor);
});


function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}