let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

let homeScore = 0;
let awayScore = 0;

function increment1Home() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function increment2Home() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function increment3Home() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function increment1Away() {
    awayScore += 1
    awayEl.textContent = awayScore
}

function increment2Away() {
    awayScore += 2
    awayEl.textContent = awayScore
}

function increment3Away() {
    awayScore += 3
    awayEl.textContent = awayScore
}