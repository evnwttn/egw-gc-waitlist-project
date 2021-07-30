// TO DO
//      - PLAYS THE SOUNDS ASSOCIATED WITH A, PLAYERS WILL MEMORIZE [75%]
//      - RE-DO PIANO SOUNDS & TIME EACH FOR THE PLAYBACK FEATURE UNDER SEQUENCE. ALSO NEED FADEOUTS. [25%]
//      - ADDING A HEAD TO HEAD FUNCTION [0%]
//      - A DESCRIPTION OF WHAT THE GAME IS [25%]
//      - A WIN ANIMATION [0%]

// SPLASH SCREEN 

    const splash = document.querySelector(".splash"); // FIRST SPLASH
    const splash2 = document.querySelector(".splash2"); // SECOND SPLASH
    const startScreen = document.querySelector(".startScreen"); // PLAYER SELECTOR SCREEN
    const p1 = document.querySelector(".p1"); // ONE PLAYER
    const p2 = document.querySelector(".p2"); // TWO PLAYER

        splash.addEventListener("click", (event) => {
            splash.classList.add("display-none");
            splash2.classList.remove("splash.display-none");
            splash2.classList.add("splash");
        })

        splash2.addEventListener("click", (event) => {
            splash2.classList.add("display-none");
            startScreen.classList.remove("startScreen");
            startScreen.classList.add("startScreen-visible");
        })

        p1.addEventListener("click", (event) => {
            startScreen.classList.remove("startScreen-visible");
            startScreen.classList.add("startScreen");
            preGame();
            })
            
        p2.addEventListener("click", (event) => {
            alert("N/A")
        })


// BASE INFORMATION

    const b1 = document.querySelector("#b1"); // CROWN 
    const b2 = document.querySelector("#b2"); // LIZARD
    const b3 = document.querySelector("#b3"); // RAVEN
    const b4 = document.querySelector("#b4"); // SKULL
    const b5 = document.querySelector("#b5"); // SCARAB
    const b6 = document.querySelector("#b6"); // PILLAR 
    const b7 = document.querySelector("#b7"); // CRAB

    let on = false; // GAME ON/OFF
    let playerGuess = -1; // # OF PLAYER GUESSES

        const sB = document.querySelector(".startButton"); // START BUTTON
            sB.addEventListener("click", (event) => {
                startGame();
            })


// PRE-START - ALLOWS PLAYER TO HEAR SOUNDS

    function preGame(){
        b1.addEventListener('click', (event) => {
            let audio = document.getElementById("fx1");
                audio.play();})     
        b2.addEventListener('click', (event) => {
            let audio = document.getElementById("fx2");
                audio.play();})    
        b3.addEventListener('click', (event) => {
            let audio = document.getElementById("fx3");
                audio.play();})     
        b4.addEventListener('click', (event) => {
            let audio = document.getElementById("fx4");
                audio.play();})    
        b5.addEventListener('click', (event) => {
            let audio = document.getElementById("fx5");
                audio.play();})    
        b6.addEventListener('click', (event) => {
            let audio = document.getElementById("fx6");
                audio.play();})     
        b7.addEventListener('click', (event) => {
            let audio = document.getElementById("fx7");
                audio.play();})} 



function shuffle(array) { // SHUFFLES 'A' ARRAY RANDOMLY
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array [j], array[i]];
    }
}


function runSequence(){ // PLAYS 'A' AUDIO
    alert("off");
    let iddqd = 0;
    for (let i = 0; i < (a.length + 1); i++) {
        if ([a[i]] == "b1") {
            setTimeout(function () {
                let audio = document.getElementById("fx1");
                audio.play();
                iddqd++; 
            }, i * 1000);
        } else if (a[i] == "b2") {
            setTimeout(function () {
                let audio = document.getElementById("fx2");
                audio.play(); 
                iddqd++;
            }, i * 1000);
        } else if (a[i] == "b3") {
            setTimeout(function () {
                let audio = document.getElementById("fx3");
                audio.play(); 
                iddqd++;
            }, i * 1000);
        } else if (a[i] == "b4") {
            setTimeout(function () {
                let audio = document.getElementById("fx4");
                audio.play(); 
                iddqd++;
            }, i * 1000);
        } else if (a[i] == "b5") {
            setTimeout(function () {
                let audio = document.getElementById("fx5");
                audio.play();
                iddqd++; 
            }, i * 1000);
        } else if (a[i] == "b6") {
            setTimeout(function () {
                let audio = document.getElementById("fx6");
                audio.play(); 
                iddqd++;
            }, i * 1000);
        } else if (a[i] == "b7") {
            setTimeout(function () {
                let audio = document.getElementById("fx7");
                audio.play(); 
                iddqd++;
            }, i * 1000);
        }
    }}



b1.addEventListener('click', (event) => {
    let audio = document.getElementById("fx1");
        audio.play();
    if (on == true) {
    b1.onclick = function(){
        b.push("b1");
        playerGuess++;
            if (playerGuess == a.indexOf("b1")) {
                b1.classList.add("b-right");
            } else {
                b1.classList.add("b-wrong");
            }
        compareArrays(a,b);
        }}});
  
b2.addEventListener('click', (event) => {
    let audio = document.getElementById("fx2");
        audio.play();
    if (on == true) {
        b2.onclick = function(){
        b.push("b2");
        playerGuess++;
        if (playerGuess == a.indexOf("b2")) {
            b2.classList.add("b-right");
        } else {
            b2.classList.add("b-wrong");
        }
        compareArrays(a,b);
        }}});

b3.addEventListener('click', (event) => {
    let audio = document.getElementById("fx3");
        audio.play();
    if (on == true) {
    b3.onclick = function(){
        b.push("b3");
        playerGuess++;
        if (playerGuess == a.indexOf("b3")) {
            b3.classList.add("b-right");
        } else {
            b3.classList.add("b-wrong");
        }
        compareArrays(a,b);
        }}});

b4.addEventListener('click', (event) => {
    let audio = document.getElementById("fx4");
        audio.play();
    if (on == true) {
    b4.onclick = function(){
        b.push("b4");
        playerGuess++;
        if (playerGuess == a.indexOf("b4")) {
            b4.classList.add("b-right");
        } else {
            b4.classList.add("b-wrong");
        }
        compareArrays(a,b);
        }}});

b5.addEventListener('click', (event) => {
    let audio = document.getElementById("fx5");
        audio.play();
   if (on == true) {
    b5.onclick = function(){
        b.push("b5");
        playerGuess++;
        if (playerGuess == a.indexOf("b5")) {
            b5.classList.add("b-right");
        } else {
            b5.classList.add("b-wrong");
        }
        compareArrays(a,b);
        }}});

b6.addEventListener('click', (event) => {
    let audio = document.getElementById("fx6");
        audio.play();
    if (on == true) {
    b6.onclick = function(){
        b.push("b6");
        playerGuess++;
        if (playerGuess == a.indexOf("b6")) {
            b6.classList.add("b-right");
        } else {
            b6.classList.add("b-wrong");
        }
        compareArrays(a,b);
        }}});

b7.addEventListener('click', (event) => {
    let audio = document.getElementById("fx7");
        audio.play();
    if (on == true) {
    b7.onclick = function(){
        b.push("b7");
        playerGuess++;
        if (playerGuess == a.indexOf("b7")) {
            b7.classList.add("b-right");
        } else {
            b7.classList.add("b-wrong");
        }
        compareArrays(a,b);
        }}});


// COMPARES USER INPUT TO SOLUTION

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
            alert("yes!")
        } else if ((b.length >= a.length) || (result = false)) {
            alert("no!")
        }}}
    }

    function startGame(){
        window.a = ["b1", "b2", "b3", "b4", "b5", "b6", "b7"]; // SOLUTION
        let b = []; // USERINPUT
        shuffle(a);
        alert(a);
        runSequence();
        alertIddqd();
    }

    function alertIddqd(){
        alert(iddqd);
    }


// GRAVEYARD (R.I.P.)

// function winGame() {
//     document.getElementById("countdown").innerHTML = "";
//     document.getElementById("text").innerHTML = "<p>Correct.</p><p2>There used to be a picture of a dog here.</p>";
//     }
// ;

// function loseGame() {
//     document.getElementById("game").classList.add("b-clicked");
//     document.getElementById("countdown").classList.add("b-clicked");
//     setTimeout(function(){
//         window.location.reload(1);
//      }, 2500);
//     document.getElementById("text").innerHTML = "<p>You have failed.</p><p2>Try again?</p>";
//     alert("boo");
// }

// COUNTDOWN TIMER

// function startClock(){

//     const timeH = document.querySelector("h1");
//     let timeSecond = 15;

//     timeH.innerHTML = `${timeSecond}`;
    
//     window.countDown = setInterval (()=>{
//         timeSecond--;
//         timeH.innerHTML = `${timeSecond}`;
//         if (timeSecond <= 0 || timeSecond < 1) {
//         loseGame();
//         }},1000)
// }

// function endClock(){
//     clearInterval(countDown);
// }

// let hintBank = ["[2] uneasy lies the head...", 
//                 "[4] some battles are won with swords and spears, others with quills and...", 
//                 "[6] ...the historian looks backwards, and finally he also believes backwards.", 
//                 "[5] ...will come when it will come.", 
//                 "[1] ...that we tread upon, in corporal sufferance finds a pang as great as when a giant dies.", 
//                 "[7] ...but if one bites you, it doesn't make a difference whether you believe in it or not.", 
//                 "[3] ...that holds up the world. Hope is the dream of a waking man."];

//     let hint = hintBank[Math.floor(Math.random() * hintBank.length)];
//     document.getElementById("hint").innerHTML = `${hint}`;

