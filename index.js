//get element for home score
let homeScore = document.getElementById("home-score")

//get element for away score
let awayScore = document.getElementById("away-score")

//set home score to 0
let currentHomeScore = 00

//set away score to 0
let currentAwayScore = 00

//create function increaseOneHome() to add +1 to homeScore
function increaseOneHome(){
    currentHomeScore += 01
    homeScore.textContent = currentHomeScore.toString().padStart(2, 0)
}

//create function increaseOneAway() to add +1 to homeScore
function increaseOneAway(){
    currentAwayScore += 01
    awayScore.textContent = currentAwayScore.toString().padStart(2, 0)
}

//create function increaseTwoHome() to add +2 to homeScore
function increaseTwoHome(){
    currentHomeScore += 02
    homeScore.textContent = currentHomeScore.toString().padStart(2, 0)
}

//create function increaseTwoAway() to add +2 to homeScore
function increaseTwoAway(){
    currentAwayScore += 02
    awayScore.textContent = currentAwayScore.toString().padStart(2, 0)
}

//create function increaseThreeHome() to add +3 to homeScore
function increaseThreeHome(){
    currentHomeScore += 03
    homeScore.textContent = currentHomeScore.toString().padStart(2, 0)
}


//create function increaseThreeAway() to add +2 to homeScore
function increaseThreeAway(){
    currentAwayScore += 03
    awayScore.textContent = currentAwayScore.toString().padStart(2, 0)
}

//create function newGame() to reset scores to 0

function newGame(){
    currentAwayScore = 0
    currentHomeScore = 0
    awayScore.textContent = currentAwayScore.toString().padStart(2, 0)
    homeScore.textContent = currentHomeScore.toString().padStart(2, 0)
}







