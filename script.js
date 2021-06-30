function startGame(){

const reset = document.querySelector("#reset");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");

let a = ["b1", "b2", "b3", "b4", "b5", "b6", "b7"]; //SOLUTION
let b = new Array(); //USERINPUT


b1.addEventListener('click', (event) => {
    let audio = document.getElementById("fx1");
        audio.play();
    b1.onclick = function(){
        b.push("b1");
        console.log("",b,"");
    }});


b2.addEventListener('click', (event) => {
    let audio = document.getElementById("fx2");
        audio.play();
    b2.onclick = function(){
        b.push("b2");
        console.log("",b,"");
    }});

b3.addEventListener('click', (event) => {
    let audio = document.getElementById("fx3");
        audio.play();
    b3.onclick = function(){
        b.push("b3");
        console.log("",b,"");
    }});

b4.addEventListener('click', (event) => {
    let audio = document.getElementById("fx4");
        audio.play();
    b4.onclick = function(){
        b.push("b4");
        console.log("",b,"");
    }});

b5.addEventListener('click', (event) => {
    let audio = document.getElementById("fx5");
        audio.play();
    b5.onclick = function(){
        b.push("b5");
        console.log("",b,"");
    }});

b6.addEventListener('click', (event) => {
    let audio = document.getElementById("fx6");
        audio.play();
    b6.onclick = function(){
        b.push("b6");
        console.log("",b,"");
    }});

b7.addEventListener('click', (event) => {
    let audio = document.getElementById("fx7");
        audio.play();
    b7.onclick = function(){
        b.push("b7");
        console.log("",b,"");
    }});

reset.addEventListener('click', (event) => {
    reset.onclick = function(){
        b = [];
        console.log("",b,"");
    }});


}

startGame();
