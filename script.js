// SPLASH SCREEN 

const splash = document.querySelector(".splash");

splash.addEventListener('click', (event) => {
    splash.classList.add("display-none");
    startClock();
    startGame();
})

// START GAME

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
let b = []; //USERINPUT

// BUTTON FUNCTIONS

b1.addEventListener('click', (event) => {
    let audio = document.getElementById("fx1");
        audio.play();
    b1.onclick = function(){
        b.push("b1");
        b1.classList.remove("b1");
        b1.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b2.addEventListener('click', (event) => {
    let audio = document.getElementById("fx2");
        audio.play();
    b2.onclick = function(){
        b.push("b2");
        b2.classList.remove("b2");
        b2.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b3.addEventListener('click', (event) => {
    let audio = document.getElementById("fx3");
        audio.play();
    b3.onclick = function(){
        b.push("b3");
        b3.classList.remove("b3");
        b3.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b4.addEventListener('click', (event) => {
    let audio = document.getElementById("fx4");
        audio.play();
    b4.onclick = function(){
        b.push("b4");
        b4.classList.remove("b4");
        b4.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b5.addEventListener('click', (event) => {
    let audio = document.getElementById("fx5");
        audio.play();
    b5.onclick = function(){
        b.push("b5");
        b5.classList.remove("b5");
        b5.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b6.addEventListener('click', (event) => {
    let audio = document.getElementById("fx6");
        audio.play();
    b6.onclick = function(){
        b.push("b6");
        b6.classList.remove("b6");
        b6.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b7.addEventListener('click', (event) => {
    let audio = document.getElementById("fx7");
        audio.play();
    b7.onclick = function(){
        b.push("b7");
        b7.classList.remove("b7");
        b7.classList.add("b-clicked");
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

}

// GAME MECHANICS

function compareArrays (a,b) {
    let result = false;
    if (b.length != a.length) {
        return false;
    } else {
        for (let i=0; i<a.length; i++) {
        if (b[0] === a[0]
        && b[1] === a[1]
        && b[2] === a[2]
        && b[3] === a[3]    
        && b[4] === a[4]
        && b[5] === a[5]
        && b[6] === a[6]) {
            result = true;
            alert("ye");
            winGame();
        } else if ((b.length >= a.length) || (result = false)) {
            loseGame();
        }}}}


function winGame() {  
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("pup").style.visibility = "visible";
    }
;

function loseGame() {
    document.getElementById("game").classList.add("b-clicked");
    document.getElementById("countdown").classList.add("b-clicked");
    setTimeout(function(){
        window.location.reload(1);
     }, 2500);
    document.getElementById("text").innerHTML = "<p>You have failed.</p><p2>Try again?</p>";
}

// COUNTDOWN TIMER

function startClock(){
const timeH = document.querySelector("h1");
let timeSecond = 15;

timeH.innerHTML = `${timeSecond}`;
    
const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = `${timeSecond}`;
    if(timeSecond <= 0 || timeSecond < 1) {
        loseGame();
    }},1000)
}

