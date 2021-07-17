// SPLASH SCREEN 

const splash = document.querySelector(".splash");
const splash2 = document.querySelector(".splash2");

splash.addEventListener("click", (event) => {
    splash.classList.add("display-none");
    splash2.classList.remove("splash.display-none");
    splash2.classList.add("splash");
    let bg1 = document.getElementById("bg1");
    bg1.play();
})

splash2.addEventListener("click", (event) => {
    splash2.classList.add("display-none");
    startClock();
    startGame();
})

let hintBank = ["[2] uneasy lies the head...", 
                "[4] some battles are won with swords and spears, others with quills and...", 
                "[6] ...the historian looks backwards, and finally he also believes backwards.", 
                "[5] ...will come when it will come.", 
                "[1] ...that we tread upon, in corporal sufferance finds a pang as great as when a giant dies.", 
                "[7] ...but if one bites you, it doesn't make a difference whether you believe in it or not.", 
                "[3] ...that holds up the world. Hope is the dream of a waking man."];
let hint = hintBank[Math.floor(Math.random() * hintBank.length)];
document.getElementById("hint").innerHTML = `${hint}`;

// START GAME

function startGame(){


const b1 = document.querySelector("#b1"); // crown
const b2 = document.querySelector("#b2"); // lizard
const b3 = document.querySelector("#b3"); // raven
const b4 = document.querySelector("#b4"); // skull
const b5 = document.querySelector("#b5"); // scarab
const b6 = document.querySelector("#b6"); // pillar 
const b7 = document.querySelector("#b7"); // crab

let a = ["b5", "b1", "b6", "b3", "b4", "b7", "b2"]; //SOLUTION
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
        }});

b2.addEventListener('click', (event) => {
    let audio = document.getElementById("fx2");
        audio.play();
    b2.onclick = function(){
        b.push("b2");
        b2.classList.remove("b2");
        b2.classList.add("b-clicked");
        compareArrays(a,b);
        }});

b3.addEventListener('click', (event) => {
    let audio = document.getElementById("fx3");
        audio.play();
    b3.onclick = function(){
        b.push("b3");
        b3.classList.remove("b3");
        b3.classList.add("b-clicked");
        compareArrays(a,b);
        }});

b4.addEventListener('click', (event) => {
    let audio = document.getElementById("fx4");
        audio.play();
    b4.onclick = function(){
        b.push("b4");
        b4.classList.remove("b4");
        b4.classList.add("b-clicked");
        compareArrays(a,b);
        }});

b5.addEventListener('click', (event) => {
    let audio = document.getElementById("fx5");
        audio.play();
    b5.onclick = function(){
        b.push("b5");
        b5.classList.remove("b5");
        b5.classList.add("b-clicked");
        compareArrays(a,b);
        }});

b6.addEventListener('click', (event) => {
    let audio = document.getElementById("fx6");
        audio.play();
    b6.onclick = function(){
        b.push("b6");
        b6.classList.remove("b6");
        b6.classList.add("b-clicked");
        compareArrays(a,b);
        }});

b7.addEventListener('click', (event) => {
    let audio = document.getElementById("fx7");
        audio.play();
    b7.onclick = function(){
        b.push("b7");
        b7.classList.remove("b7");
        b7.classList.add("b-clicked");
        compareArrays(a,b);
        }});

}

// GAME MECHANICS

function compareArrays (a,b) {
    let result = false;
    let stopClock = 0;
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
            stopClock + 1;
            winGame();
        } else if ((b.length >= a.length) && (result = false)) {
            loseGame();
        }}}}


function winGame() {  
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("text").innerHTML = "<p>Correct.</p><p2>There used to be a picture of a dog here.</p>";
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
    
var countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = `${timeSecond}`;
    if (timeSecond <= 0 || timeSecond < 1 && stopClock === 0) {
        loseGame(); }
    },1000)



}



