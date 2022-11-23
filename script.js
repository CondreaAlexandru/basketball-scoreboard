let homeScore = document.getElementById('homeScore')
let guestScore = document.getElementById('guestScore')
let reset = document.getElementById('reset');
let scoreHome = 0
let scoreGuest = 0


function addScoreHome(e){
    scoreHome += e
    homeScore.innerHTML = scoreHome
}

function addScoreHomeGuest(e){
    scoreGuest += e
    guestScore.innerHTML = scoreGuest
}

reset.addEventListener("click", function() {
    scoreHome = 0
    scoreGuest = 0
    homeScore.innerHTML = scoreHome
    guestScore.innerHTML = scoreGuest
})