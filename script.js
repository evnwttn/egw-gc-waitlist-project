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

b1.addEventListener('click', (event) => {
    let audio = document.getElementById("fx1");
        audio.play();
    b1.onclick = function(){
        b.push("b1");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});


b2.addEventListener('click', (event) => {
    let audio = document.getElementById("fx2");
        audio.play();
    b2.onclick = function(){
        b.push("b2");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b3.addEventListener('click', (event) => {
    let audio = document.getElementById("fx3");
        audio.play();
    b3.onclick = function(){
        b.push("b3");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b4.addEventListener('click', (event) => {
    let audio = document.getElementById("fx4");
        audio.play();
    b4.onclick = function(){
        b.push("b4");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b5.addEventListener('click', (event) => {
    let audio = document.getElementById("fx5");
        audio.play();
    b5.onclick = function(){
        b.push("b5");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b6.addEventListener('click', (event) => {
    let audio = document.getElementById("fx6");
        audio.play();
    b6.onclick = function(){
        b.push("b6");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

b7.addEventListener('click', (event) => {
    let audio = document.getElementById("fx7");
        audio.play();
    b7.onclick = function(){
        b.push("b7");
        alert(b);
        compareArrays(a,b);
        if (b.length >= 7) {
            b = [];
        }}});

reset.addEventListener('click', (event) => {
    reset.onclick = function(){
        b = [];
        alert(b);
    }});

}

function compareArrays (a,b) {
    if (b.length != a.length) {
        return false;
    } else {
        let result = false;
    for (let i=0; i<a.length; i++) {
        if (b[0] === a[0]
        && b[1] === a[1]
        && b[2] === a[2]
        && b[3] === a[3]    
        && b[4] === a[4]
        && b[5] === a[5]
        && b[6] === a[6]) {
            result = true;
            winGame();
        } else {
            continue;
        }
    }}}

function winGame() {  
    document.getElementById("game").innerHTML = "";
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("reset").innerHTML = "";
    document.getElementById("pup").style.visibility = "visible";
    }
;

function loseGame() {
    document.getElementById("game").innerHTML = "";
    timeH.innerHTML = "X";
}

const timeH = document.querySelector("h1");
let timeSecond = 30;

timeH.innerHTML = `${timeSecond}`;
    
const countDown = setInterval (()=>{
    timeSecond--;
    timeH.innerHTML = `${timeSecond}`;
    if(timeSecond <= 0 || timeSecond < 1) {
        loseGame();
    }},1000)

startGame();



